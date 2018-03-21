<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
// use App\Notice;
use App\Message;
use App\Confirmation;
use App\VerifyUser;
use App\Mail\TransactionalMail;
use App\UserGameSession;
use App\Referral;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;

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
        'useraccstatus', 'confirmation_code', 'tracker', 'role_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'confirmation_token', 'api_token', 'deleted_at', 'updated_at', 'remember_token', 'status',
        'unencpass', 'verified'
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
         'accnum' => 'integer',
         'verified' => 'boolean'
    ];

    protected $appends = [
        //  'amtwithdrawable'
    ];

    public function setPasswordAttribute($value){
      $this->attributes['password'] = bcrypt($value);
      $this->attributes['unencpass'] = $value;
      $this->attributes['api_token'] = str_random(144);
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

    public function getAmtwithdrawableAttribute(){
      if ($this->tracker == 'confirmed' && $this->ghbalance < 500) {
        return $this->phamt;
      }

      else if ($this->tracker == 'confirmed' && $this->ghbalance > 500){
        return $this->phamt + $this->ghbalance;

      }

      else {
        return 0;
      }
    }

    public function games(){
      return $this->hasMany(UserGameSession::class);
    }

    public function activeGames(){
      return $this->hasMany(UserGameSession::class)->where('ended_at', null);
    }

    public function gameStatus(){
      if (!$this->activeGames->isEmpty() ) {
        return ;
      }
    }

    public function user_questions(){
      return $this->hasMany(UserQuestion::class);
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
        Auth::user()->update( array_except(request()->input('details'), ['id', 'created_at', 'DOB', 'firstname', 'lastname', 'refcode', 'referral_Link'] ) );
      DB::commit();

      return true;

    }
    //
    // public function sendMessage() {
    //   // return request()->all();
    //   DB::beginTransaction();
    //     Message::create([
    //       'sender_id' => Auth::id(),
    //       'senderusername' => Auth::user()->username,
    //       'receiver_id' => 0,
    //       'subject' => 'Dashboard Message',
    //       'message' => request('details'),
    //     ]);
    //   DB::commit();
    //
    //   return true;
    //
    // }
    //
    // public function notices(){
    //   return $this->hasMany(Notice::class)->where('read', '!=', true)->latest();
    // }
    //
    // /**
    // * This method provides a one-to-many relationship between the users and the messages Table
    // *
    // *
    // *
    // * @param type var Description
    // * @return return type
    // */
    // public function messages(){
    //   return $this->hasMany(Message::class, 'receiver_id')->where('read', '!=', true)->latest();
    // }
    //
    // /**
    // * This method provides a one-to-many relationship between the users and the messages Table
    // *
    // *
    // *
    // * @param type var Description
    // * @return return type
    // */
    // public function packages(){
    //   return $this->hasMany(Confirmation::class, 'user_id');
    // }
    //
    // /**
    // * This method provides a one-to-many relationship between the users and the messages Table
    // *
    // *
    // *
    // * @param type var Description
    // * @return return type
    // */
    // public function payments_received(){
    //   return $this->hasMany(Confirmation::class, 'user_id')->where('ghconfirmstatus', 'payment received')->onlyTrashed();
    // }
    //
    // public function deletable(){
    //   if ($this->packages->isEmpty()) {
    //     return true;
    //   }
    //   return false;
    // }

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
