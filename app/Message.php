<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;

/**
 * Eloquent Model to access the messe table
 *
 * This class accesses the message table. Containing methods to send visitor message and logged in user message and alert admin in case of an attempted intrusion
 *
 */

class Message extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	public $rememberFor = 5;


	//
	// public function getCreatedAtAttribute($value){
	// 	$v = Carbon::parse($value);
	// 	return $v->toIso8601String();
	// }
	//

	/**
		* Get the user object that owns the message.
		*/
	 public function user(){
			 return $this->belongsTo(User::class, 'sender_id');
	 }

  public static function sendAdminMessage($senderid, $senderusername, $message){
   	return self::create([
                      'receiver_id' => 0,
                      'sender_id' => $senderid,
                      'senderusername' => $senderusername,
                      'subject' => 'Dashboard chat',
                      'message' => $message,
                    ]);
  }

  public static function newGuestMessage(){
   	 self::create([
                      'receiver_id' => 0,
                      'sender_id' => 4000,
                      'senderusername' => 'Guest',
                      'subject' => request()->input('details.subject'),
                      'message' => 'Sender Name: '.request()->input('details.name') . '<br><br>Sender Email: '. request()->input('details.email') . '<br><br>Message: '. request()->input('details.message'),
                    ]);
		return true;
  }

  public static function disputeAdminNotify($gherid, $gherusername, $confirmationid){
   	return self::create([
                      'receiver_id' => 0,
                      'sender_id' => $gherid,
                      'senderusername' => $gherusername,
                      'subject' => 'Donation dispute',
                      'message' => "Donation record $confirmationid is in dispute. Look into it.",
                    ]);
  }

  public static function adminSendMessage($receiverid, $subject, $message){
   	return self::create([
                      'receiver_id' => $receiverid,
                      'sender_id' => 0,
                      'senderusername' => 'Admin',
                      'subject' => 'Admin Message',
                      'message' => $message,
                    ]);
  }

  public static function adminSendBroadcast($subject, $message){
   	return self::create([
                      'receiver_id' => 0, //So that the admin can easily see it on his his messages
                      'sender_id' => 40000,
                      'senderusername' => 'Broadcast Message',
                      'subject' => $subject,
                      'message' => $message,
                    ]);
  }

  public static function donationDisputed($pherid, $gherid, $gherusername){
   	return self::create([
                      'receiver_id' => $pherid,
                      'sender_id' => $gherid,
                      'senderusername' => $gherusername,
                      'subject' => 'Donation dispute',
                      'message' => "Your payment to $gherusername has been disputed. Your account is hereby suspended pending clarification by the admin. Please contact the admin.",
                    ]);
  }

	public static function alertAdmin($subject, $message){
	  DB::beginTransaction();
	    $m = self::create([
	                        'receiver_id' => 0,
	                        'sender_id' => 12000,
	                        'senderusername' => 'Intrusion Prevention',
	                        'subject' => $subject,
	                        'message' => $message,
	                      ]);
	  DB::commit();
	}


}
