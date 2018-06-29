<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;

class Earning extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at', 'ended_at'];
	protected $casts = [
		'transferred' => 'boolean',
		'game_id' => 'integer',
		'amount' => 'double'
	];
	// public $rememberFor = 1;
	 //

	 public function user(){
			 return $this->belongsTo(User::class);
	 }


  public static function totalUserEarnings(){
		return self::where('user_id', '!=', env('ADMIN_ROLE_ID'))->remember(10)->sum('amount');
  }



  public static function adminGameEarning($gid, $amt){
		self::updateOrCreate(['game_id' => $gid, 'user_id' => env('ADMIN_ROLE_ID')],[
			'user_id' => 0,
			'game_id' => $gid,
			'amount' => $amt,
		]);
  }


  public static function addAdminEarning($amt){
		self::create([
			'user_id' => 0,
			'game_id' => 0,
			'amount' => $amt,
		]);
  }

}
