<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\UserGameSession;

class Earning extends Model{

	use SoftDeletes;

  protected $guarded = [];
  protected $dates = ['deleted_at', 'ended_at'];
	protected $casts = [
		'transferred' => 'boolean',
		'game_id' => 'integer',
		'amount' => 'double'
	];

	 public function user(){
			 return $this->belongsTo(User::class);
	 }

	 public function user_game_session(){
			 return $this->belongsTo(UserGameSession::class, 'game_id', 'game_id')->where('user_id', Auth::id());
	 }


  public static function totalUserEarnings(){
		return self::where('user_id', '!=', Role::admin_id())->sum('amount');
  }


  public static function totalUserUntransferredEarnings(){
		return self::where('user_id', '!=', Role::admin_id())->where('transferred', false)->sum('amount');
  }


  public static function totalUserTransferredEarnings(){
		return self::where('user_id', '!=', Role::admin_id())->where('transferred', true)->sum('amount');
  }


  public static function totalAdminEarnings(){
		return self::where('user_id', Role::admin_id())->sum('amount');
  }


  public static function totalAdminUntransferredEarnings(){
		return self::where('user_id', Role::admin_id())->where('transferred', false)->sum('amount');
  }


  public static function totalAdminTransferredEarnings(){
		return self::where('user_id', Role::admin_id())->where('transferred', true)->sum('amount');
  }

	public static function totalAdminMonthEarnings(){
		return self::where('user_id', Role::admin_id())->whereMonth('created_at', Carbon::now()->month)->whereYear('created_at', Carbon::now()->year)->sum('amount');
	}

	public static function totalAdminPrevMonthEarnings(){
		return self::where('user_id', Role::admin_id())->whereMonth('created_at', Carbon::now()->subMonth()->month)->whereYear('created_at', Carbon::now()->year)->sum('amount');
	}

  public static function adminGameEarning($gid, $amt){
		self::updateOrCreate(['game_id' => $gid, 'user_id' => Role::admin_id()],[
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

	/**
	 * Scope a query to only include today's earnings.
	 *
	 * @param \Illuminate\Database\Eloquent\Builder $q
	 * @return \Illuminate\Database\Eloquent\Builder
	 */
	public function scopeDaily($q){
			// return $this->expectedghdate->lte(Carbon::now());
			// dd(Carbon::today()->isToday());

			$q->whereDate('created_at', '=', Carbon::today());
			 // ->whereDate('created_at', '2016-12-31')

	}

}
