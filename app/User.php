<?php

namespace App;

use App\Game;
use App\Notice;
use App\Earning;
use App\Message;
use App\Referral;
use App\Transaction;
use App\Confirmation;
use App\UserGameSession;

use Carbon\Carbon;

use App\Mail\TransactionalMail;

use Watson\Rememberable\Rememberable;

use Illuminate\Notifications\Notifiable;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

use Illuminate\Database\Eloquent\SoftDeletes;

use Illuminate\Foundation\Auth\User as Authenticatable;

// Cache::flush();

class User extends Authenticatable{
    use Notifiable;
    use SoftDeletes;
    use Rememberable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $guarded = [
        'useraccstatus', 'confirmation_code', 'tracker', 'role_id', 'units_purchased', 'available_units',  'refcode', 'referral_Link', 'total_withdrawals', 'num_of_withdrawals', 'units_purchased', 'notices', 'messages', 'verified'
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

    // public $rememberFor = 5;

    protected $casts = [
         'acct_no' => 'integer',
         'verified' => 'boolean',
         'available_units' => 'double',
         'units_purchased' => 'double',
    ];

    protected $appends = [
          'total_withdrawals', 'num_of_withdrawals'
    ];

    public function setPasswordAttribute($value){
      $this->attributes['password'] = bcrypt($value);
      // $this->attributes['unencpass'] = $value;
      $this->attributes['api_token'] = str_random(144);
      $this->attributes['refcode'] = unique_random('users', 'refcode');
    }

    public function getExpectedghdateAttribute($value){
      $v = Carbon::parse($value);
      if($v->gte(Carbon::now())){
        return $v->toIso8601String();
      }

      else if($value == null){
        return null;
      }

      else{
        return "due";
      }
    }

    public function getPhdateIsoAttribute($value){
      $v = Carbon::parse($value);
      return $v->toIso8601String();
    }

    public function getTotalWithdrawalsAttribute(){
      return $this->transactions()->where('trans_type', 'withdrawal')->sum('amount');
    }

    public function getNumOfWithdrawalsAttribute(){
      return $this->transactions()->where('trans_type', 'withdrawal')->count();
    }

    public function transactions(){
      return $this->hasMany(Transaction::class);
    }

    public function referrals(){
      return $this->hasMany(Referral::class);
    }

    public function referrals_count(){
      return optional($this->referrals())->count();
    }

    public function referrer(){
      return $this->hasOne(Referral::class, 'referral_id');
    }

    public function has_referrer(){
      return !empty($this->referrer);
    }

    public function games(){
      return $this->hasMany(UserGameSession::class);
    }

    public function activeGames(){
      $active_game = Game::active();
      return $this->hasOne(UserGameSession::class)->where('game_id', optional($active_game)->id);
    }

    public function lastGame(){
      // dd(Game::last());
      $last_game = Game::last();
      return $this->hasOne(UserGameSession::class)->where('game_id', optional($last_game)->id);
    }

    public function user_questions(){
      return $this->hasMany(UserQuestion::class);
    }

    public function earnings(){
      return $this->hasMany(Earning::class);
    }

    public function getUserQuestions(){
      $active_game = Game::active();

      //check for active game
      if (!$active_game) {
        return false;
      }
      //delete previous questions
      //check if he has active questions in the current exam
      else{
        Auth::user()->user_questions()->where('game_id', '!=', $active_game->id)->delete();
        $user_questions = Auth::user()->user_questions()->with('question')->where('game_id', $active_game->id)->get();
      }

      //populate 11 quuestions into the user_questions table for the user

      if ( $user_questions->isEmpty() ) {
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

    public function generateQuestions($game_id){

      //Read 11 questions
      $questions = Question::inRandomOrder()->take(11)->get(['id'])->toArray();

      //create it in User qusetion db

      foreach ($questions as $key => $question ) {
        $user_questions[] = [
          'game_id' => $game_id,
          'user_id' => auth()->id(),
          'question_id' => $question['id'],
          'created_at' => Carbon::now(),
          'updated_at' => Carbon::now(),
        ];
      }

      return UserQuestion::insert($user_questions);

    }

    public function updateUserDetails() {
      // return request()->all();
      DB::beginTransaction();
        Auth::user()->update( array_except(request()->input('details'), ['id', 'created_at', 'DOB', 'firstname', 'lastname', 'refcode', 'referral_Link', 'total_withdrawals', 'num_of_withdrawals', 'units_purchased', 'old_password', 'password_confirmation'] ) );
      DB::commit();

      return true;

    }

    public function addEarning($gid, $amt){
      $this->earnings()->create([
        'amount' => $amt,
        'game_id' => $gid,
        // 'transferred' => Auth::user()->id
      ]);
    }

    public function receiptForGame($gid){
      $this->transactions()->create([
        'amount' => env('GAME_CREDITS'),
        'trans_type' => 'charges for game '. $gid,
        'channel' => 'online',
        'status' => 'completed'
      ]);
    }

    public function totalEarnings(){
      return $this->earnings()->where('transferred', false);
    }

    public function creditAccount($amt){
      $this->available_units = $this->available_units + $amt;
      $this->units_purchased = $this->units_purchased + $amt;
      $this->save();
    }

    public function debitAccount($amount, $fee){

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

    public function sendMessage() {
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

    public function notices(){
      return $this->hasMany(Notice::class)->orWhere('user_id', 0)->latest();
    }

    public function messages(){
      return $this->hasOne(Message::class, 'sender_id', 'role_id')->where('read', 0)->latest();
    }

    public function deletable(){
      if ($this->earnings->isEmpty() || $this->availble_units < 10) {
        return true;
      }
      return false;
    }

    public static function adminDeletable(){
      if (User::where('role_id', env('ADMIN_ROLE_ID'))->count() < 2) {
        return false;
      }
      return true;
    }

    public function isVerified(){
      return $this->verified;
    }

  	/**
  	 * Overrides the inherent password reset mail sender
  	 *
  	 * This functions allows me to use a custom handler (postmark in this case) to perform the actualmail sends instead of using the default swiftmailer class
  	 *
  	 * @param string token The generated token that will be used to confirm the password reset link
  	 * @param Eloquent Object this The Model for the current emailinjected  into the method
  	 * @param string url The pattern for the route that the reset link in the email MUST call in the url(route('password.reset', $token))
  	 * @return void
  	 */
  	public function sendPasswordResetNotification($token){
  		return TransactionalMail::passwordResetMail($this, $token);
  	}

}
