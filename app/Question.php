<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;

class Question extends Model{

  protected $guarded = [];
  protected $hidden = ['correct_option'];
  protected $dates = ['deleted_at'];

	 public function user(){
			 return $this->belongsTo(User::class, 'admin_id');
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
}
