<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;

class Question extends Model{

	// use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	// public $rememberFor = 5;

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
