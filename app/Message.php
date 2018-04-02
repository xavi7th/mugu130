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
                      'user_id' => 0,
                      'sender_id' => Auth::id(),
                      'senderusername' => Auth::user()->firstname,
                      'subject' => request()->input('details.subject'),
                      'message' => request()->input('details.message'),
                    ]);
		return true;
  }



}
