<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;

class Message extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	protected $casts =[
		'read' => 'boolean'
	];
	// public $rememberFor = 5;

	 public function user(){
			 return $this->belongsTo(User::class, 'sender_id');
	 }

  public static function toAdmin(){
   	self::create([
                      'user_id' => env("ADMIN_ROLE_ID"),
                      'sender_id' => Auth::id(),
                      'senderusername' => Auth::user()->firstname,
                      'subject' => request()->input('details.subject') ?? request('subject'),
                      'message' => request()->input('details.message') ?? request('message'),
                    ]);
		return true;
  }

  public static function fromAdmin(){
   	self::create([
                      'user_id' => request()->input('details.user_id'),
                      'sender_id' => env("ADMIN_ROLE_ID"),
                      'senderusername' => 'Admin',
                      'subject' => request()->input('details.subject'),
                      'message' => request()->input('details.message'),
                    ]);
		return true;
  }

  public static function toAll(){
   	self::updateOrCreate(['sender_id' => env('USER_ROLE_ID')],[
                      'user_id' => 8888888, //All users will pick this
                      'sender_id' => env('USER_ROLE_ID'),
                      'senderusername' => 'Admin',
                      'subject' => request()->input('details.subject'),
                      'message' => request()->input('details.message'),
											'read' => 0
                    ]);
		return true;
  }

  public static function alertAdmin(){
   	self::create([
                      'user_id' => env("ADMIN_ROLE_ID"),
                      'sender_id' => 4888888,
                      'senderusername' => 'Admin Route Monitor',
                      'subject' => 'Intrusion Attempt',
                      'message' => Auth::user()->email.' tried to access the admin section without authorisation.',
                    ]);
		return true;
  }



}
