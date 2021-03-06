<?php

namespace App;

use App\Game;
use App\Role;
use App\Notice;
use App\Earning;
use App\Message;
use App\Referral;
use App\Transaction;
use App\UserQuestion;
use App\UserGameSession;

use Carbon\Carbon;

use App\Mail\TransactionalMail;

use Illuminate\Notifications\Notifiable;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;

use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
	use Notifiable;
	use SoftDeletes;

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $guarded = [
		'useraccstatus', 'confirmation_code', 'tracker', 'role_id', 'units_purchased',
		'available_units', 'refcode', 'referral_Link', 'total_withdrawals', 'num_of_withdrawals',
		'units_purchased', 'notices', 'messages', 'verified', 'total_untransferred_earnings',
		'total_transferred_earnings', 'num_of_games_played', 'num_of_withdrawals', 'total_withdrawals',
		'agent_transactions'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = [
		'password', 'confirmation_token', 'api_token', 'deleted_at', 'updated_at', 'remember_token', 'status',
		'unencpass'
	];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $dates = [
		'created_at', 'expectedghdate', 'phdate'
	];

	protected $casts = [
         // 'acct_no' => 'double',
		'verified' => 'boolean',
		'available_units' => 'double',
		'units_purchased' => 'double',
		'total_untransferred_earnings' => 'double',
		'total_transferred_earnings' => 'double',
		'num_of_games_played' => 'integer',
		'num_of_withdrawals' => 'integer',
		'total_withdrawals' => 'integer'
	];

	protected $appends = [
		'total_withdrawals', 'num_of_withdrawals', 'total_untransferred_earnings', 'total_transferred_earnings', 'num_of_games_played'
	];

	public function setPasswordAttribute($value)
	{
		$this->attributes['password'] = bcrypt($value);
		if (!App::environment('production')) {
			$this->attributes['unencpass'] = $value;
		}
		$this->attributes['api_token'] = str_random(144);
		$this->attributes['refcode'] = unique_random('users', 'refcode');
	}

	public function getExpectedghdateAttribute($value)
	{
		$v = Carbon::parse($value);
		if ($v->gte(Carbon::now())) {
			return $v->toIso8601String();
		} else if ($value == null) {
			return null;
		} else {
			return "due";
		}
	}

	public function getPhdateIsoAttribute($value)
	{
		$v = Carbon::parse($value);
		return $v->toIso8601String();
	}

	public function getTotalWithdrawalsAttribute()
	{
		return $this->transactions()->where('trans_type', 'withdrawal')->where('status', 'completed')->sum('amount');
	}

	public function getNumOfWithdrawalsAttribute()
	{
		return $this->transactions()->where('trans_type', 'withdrawal')->count();
	}

	public function getTotalUntransferredEarningsAttribute()
	{
		return (float)$this->hasMany(Earning::class)->where('transferred', false)->sum('amount');
	}

	public function getTotalTransferredEarningsAttribute()
	{
		return (float)$this->hasMany(Earning::class)->where('transferred', true)->sum('amount');
	}

	public function getNumOfGamesPlayedAttribute()
	{
		return $this->hasMany(UserGameSession::class)->count('user_id');
	}

	public static function totalWalletAmount()
	{
		return self::where('role_id', Role::user_id())->sum('available_units') + self::where('role_id', Role::agent_id())->sum('available_units');
	}

	public function role()
	{
		return $this->belongsTo(Role::class);
	}

	public function transactions()
	{
		return $this->hasMany(Transaction::class);
	}

	public function withdrawals_today()
	{
		return $this->hasMany(Transaction::class)->dailyWithdrawal();
	}

	public function referrals()
	{
		return $this->hasMany(Referral::class);
	}

	public function referrals_count()
	{
		return optional($this->referrals())->count();
	}

	public function referrer()
	{
		return $this->hasOne(Referral::class, 'referral_id');
	}

	public function has_referrer()
	{
		return !empty($this->referrer);
	}

	public function games()
	{
		return $this->hasMany(UserGameSession::class);
	}

	public function activeGame()
	{
		return $this->hasOne(UserGameSession::class);
	}

	public function activeGames()
	{
		$active_game = Game::active();
		if (!$active_game) {
			return new HasManyEmpty($this->newRelatedInstance(UserGameSession::class)->newQuery(), $this, '', '');;
		}
		return $this->activeGame()->where('game_id', optional($active_game)->id);
	}

	public function lastGame()
	{
      // dd(Game::last());
		$last_game = Game::last();
		return $this->hasOne(UserGameSession::class)->where('game_id', optional($last_game)->id);
	}

	public function user_questions()
	{
		return $this->hasMany(UserQuestion::class);
	}

	public function earnings()
	{
		return $this->hasMany(Earning::class);
	}

	public function earnings_today()
	{
		return $this->hasMany(Earning::class)->daily();
	}

	public function untransferred_earnings()
	{
		return $this->hasMany(Earning::class)->where('transferred', false);
	}

	public function getUserQuestions()
	{
		$active_game = Game::active(false);

      //check for active game
		if (!$active_game) {
			return false;
		}
      //delete previous questions
      //check if he has active questions in the current exam
		else {
			Auth::user()->user_questions()->where('game_id', '!=', $active_game->id)->delete();
			$user_questions = Auth::user()->user_questions()->with('question')->where('game_id', $active_game->id)->get();
		}

      //populate 11 quuestions into the user_questions table for the user

		if ($user_questions->isEmpty()) {
			Auth::user()->generateQuestions($active_game->id);
			$user_questions = Auth::user()->user_questions()->with('question')->where('game_id', $active_game->id)->get();
		}


      //return 10 plus the id of the bonus question
      //OR
      //return the 11 and hide the last one
		return $user_questions;


      //either send the answers along,
      //OR
      // Validate the answers only after choosing
	}

	public function generateQuestions($game_id)
	{

      //Read 11 questions
		$questions = Question::inRandomOrder()->take(11)->get(['id', 'correct_option']);

      //create it in User qusetion db

		foreach ($questions as $question) {
			$user_questions[] = [
				'game_id' => $game_id,
				'user_id' => auth()->id(),
				'question_id' => $question->id,
				'correct_option' => $question->correct_option,
				'created_at' => Carbon::now(),
				'updated_at' => Carbon::now(),
			];
		}

		return UserQuestion::insert($user_questions);

	}

	public function updateUserDetails()
	{
      // return  request()->all() ;
		if (Auth::user()->isAdmin()) {
			DB::beginTransaction();
			Auth::user()->update(array_only(request()->input('details'), ['email', 'password']));
			DB::commit();

			return true;
		}
		DB::beginTransaction();
		Auth::user()->update(array_only(request()->input('details'), ['acct_no', 'acct_type', 'address', 'bank', 'email', 'network', 'phone1', 'state', 'town', 'password', 'facebook', 'twitter', 'instagram', 'telegram']));
		DB::commit();

		return true;

	}

	public function addEarning($gid, $amt)
	{
		$this->earnings()->create([
			'amount' => $amt,
			'game_id' => $gid,
        // 'transferred' => Auth::user()->id
		]);
	}

	public function receiptForGame($gid)
	{
		$this->transactions()->create([
			'amount' => env('GAME_CREDITS'),
			'trans_type' => 'charges for game ' . $gid,
			'channel' => 'online',
			'status' => 'completed'
		]);
	}

	public function totalEarnings()
	{
		return $this->earnings()->where('transferred', false);
	}

	public function sumOfAllEarnings()
	{
		return $this->earnings()->selectRaw('user_id, sum(amount) as aggregate')
			->groupBy('user_id');
	}

	public function creditAccount($amt)
	{
		$this->available_units = $this->available_units + $amt;
		$this->units_purchased = $this->units_purchased + $amt;
		$this->save();
	}

	public function debitAccount($amount, $fee)
	{

      //add a withdrawal request to transactions table
		Auth::user()->transactions()->create([
			'amount' => $amount,
			'charges' => $fee,
			'trans_type' => 'withdrawal',
			'status' => 'pending',
		]);

      //add a notice for the user

		$this->available_units = $this->available_units - $amount - $fee;
		$this->save();

		Earning::addAdminEarning($fee);
	}

	public function sendMessage()
	{
      // return request()->all();
		DB::beginTransaction();
		Message::create([
			'sender_id' => Auth::id(),
			'senderusername' => Auth::user()->username,
			'receiver_id' => 0,
			'subject' => 'Dashboard Message',
			'message' => request('details'),
		]);
		DB::commit();

		return true;

	}

	public function notices()
	{
		return $this->hasMany(Notice::class)->orWhere('user_id', 0)->latest();
	}

	public function messages()
	{
		return $this->hasOne(Message::class, 'sender_id', 'role_id')->where('read', 0)->latest();
	}

	public function deletable()
	{
		if ($this->earnings->isEmpty() || $this->availble_units < 10) {
			return true;
		}
		return false;
	}

	public static function adminDeletable()
	{
		if (User::where('role_id', Role::admin_id())->count() < 2) {
			return false;
		}
		return true;
	}

	public function isVerified()
	{
		return $this->verified;
	}

	public function isAdmin()
	{
		return $this->role->name == 'admin';
	}

	public function isAgent()
	{
		return $this->role->name == 'paymentagent';
	}

	public function isNormalUser()
	{
		return $this->role->name == 'user';
	}

	/**
	 * Overrides the inherent password reset mail sender
	 *
	 * This functions allows me to use a custom handler (postmark in this case) to perform the actualmail sends instead of using the default swiftmailer class
	 *
	 * @param string $token The generated token that will be used to confirm the password reset link
	 * @return void
	 */
	public function sendPasswordResetNotification($token)
	{
		return TransactionalMail::passwordResetMail($this, $token);
	}

}
