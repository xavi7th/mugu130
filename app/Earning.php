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
		return self::where('user_id', '!=', env('ADMIN_ROLE_ID'))->remember(10)->sum('amount'); //10
  }


  public static function totalUserUntransferredEarnings(){
		return self::where('user_id', '!=', env('ADMIN_ROLE_ID'))->where('transferred', false)->remember(120)->sum('amount'); //120
  }


  public static function totalUserTransferredEarnings(){
		return self::where('user_id', '!=', env('ADMIN_ROLE_ID'))->where('transferred', true)->remember(120)->sum('amount'); //120
  }


  public static function totalAdminEarnings(){
		return self::where('user_id', env('ADMIN_ROLE_ID'))->remember(120)->sum('amount'); //120
  }


  public static function totalAdminUntransferredEarnings(){
		return self::where('user_id', env('ADMIN_ROLE_ID'))->where('transferred', false)->remember(120)->sum('amount'); //120
  }


  public static function totalAdminTransferredEarnings(){
		return self::where('user_id', env('ADMIN_ROLE_ID'))->where('transferred', true)->remember(120)->sum('amount'); //120
  }

	public static function totalAdminMonthEarnings(){
		return self::where('user_id', env('ADMIN_ROLE_ID'))->whereMonth('created_at', Carbon::now()->month)->whereYear('created_at', Carbon::now()->year)->remember(120)->sum('amount'); //120
	}

	public static function totalAdminPrevMonthEarnings(){
		return self::where('user_id', env('ADMIN_ROLE_ID'))->whereMonth('created_at', Carbon::now()->subMonth()->month)->whereYear('created_at', Carbon::now()->year)->remember(120)->sum('amount'); //120
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
