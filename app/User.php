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

    public $rememberFor = 5;

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


    //
    // public function verifyUser(){
    //    return $this->hasOne(VerifyUser::class);
    //  }
    //
    // public function referrals(){
    //  return $this->hasMany(Referral::class);
    // }
    //
    // public function referrer(){
    //  return $this->hasOne(Referral::class, 'referral_id');
    // }
    //
    // public function makeDeposit () {
    //
    //   DB::beginTransaction();
    //
    //       Notice::depositMade();
    //
    //       $this->tracker = 'pending';
    //       $this->save();
    //
    //       $package = $this->packages()->create([
    //         'package_id' => request()->input('details.id'),
    //         'daily_percentage' => request()->input('details.daily_percentage'),
    //         'thisghamt' => request()->input('details.amount'),
    //         'expectedghamt' => request()->input('details.amount') + request()->input('details.amount') * request()->input('details.daily_percentage') / 100 * request()->input('details.duration'),
    //         'thisghdate' => Carbon::now(),
    //         'paymentmethod' => 'bitcoin',
    //         'expectedghdate' => Carbon::now()->addWeekDays(request()->input('details.duration')),
    //         'ghconfirmstatus' => 'pending',
    //         'transaction_key' => unique_random('confirmations', 'transaction_key', 20),
    //       ]);
    //
    //   DB::commit();
    //
    //   return $package;
    //
    //   // Confirmation::create([
    //   //
    //   // ]);
    // }
    //
    // public function requestBonus() {
    //
    //   DB::beginTransaction();
    //
    //       Notice::bonusRequested();
    //
    //
    //       $package = $this->packages()->create([
    //         'package_id' => 0,
    //         'daily_percentage' => 0,
    //         'thisghamt' => 0,
    //         'expectedghamt' => Auth::user()->referrerbonus,
    //         'thisghdate' => Carbon::now(),
    //         'paymentmethod' => 'bitcoin',
    //         'expectedghdate' => Carbon::now(),
    //         'ghconfirmstatus' => 'payment requested',
    //         'transaction_key' => 'bonus',
    //       ]);
    //
    //       $this->tracker = 'bonus requested';
    //       $this->referrerbonus = 0;
    //       $this->save();
    //
    //
    //   DB::commit();
    //
    //   return true;
    //
    // }
    //
    // public function requestPayment () {
    //
    //   DB::beginTransaction();
    //
    //     Notice::paymentRequested();
    //     $this->tracker = 'payment pending';
    //     $this->save();
    //
    //     Confirmation::find(request()->input('details.id'))->update([
    //         'ghconfirmstatus' => 'payment requested'
    //     ]);
    //
    //   DB::commit();
    //
    //   return true;
    //
    // }
    //
    // public function receivedPayment () {
    //
    //   DB::beginTransaction();
    //
    //       Notice::paymentReceived();
    //       $this->tracker = 'payment received';
    //       $this->save();
    //
    //     Confirmation::find(request()->input('details.id'))->update([
    //         'ghconfirmstatus' => 'payment received',
    //         'deleted_at' => Carbon::now()
    //       ]);
    //   DB::commit();
    //
    //   return true;
    //
    // }
    //
    // public function disputePayment () {
    //
    //   DB::beginTransaction();
    //
    //     Notice::paymentDisputed();
    //     Confirmation::find(request()->input('details.id'))->update([
    //         'ghconfirmstatus' => 'payment disputed'
    //       ]);
    //   DB::commit();
    //
    //   return true;
    //
    // }
    //
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
