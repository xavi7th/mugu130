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
		'transferred' => 'boolean'
	];
	// public $rememberFor = 5;
	 //

	 public function user(){
			 return $this->belongsTo(User::class);
	 }
  //
  // public static function new(){
  //
	// 	//end previous game if any
	// 	self::where('status', true)->update([
	// 		'status' => false,
	// 		'ended_at' => Carbon::now(),
	// 		'deleted_at' => Carbon::now()
	// 	]);
  //
	// 	//create new game
	// 	return self::create([
  //
	// 	]);
  // }



  public static function adminEarning($gid, $amt){
		self::updateOrCreate(['game_id' => $gid],[
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
