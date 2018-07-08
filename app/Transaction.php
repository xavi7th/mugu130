<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Rememberable\Rememberable;
use App\User;

class Transaction extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	public $rememberFor = 5; //5
	protected $casts = [
		 'amount' => 'double'
	];

	 public function user(){
			 return $this->belongsTo(User::class);
	 }

	 public static function totalAmountWithdrawn(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'completed')->remember(240)->sum('amount'); //240
	 }

	 public static function totalNumberOfRequests(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'pending')->remember(240)->count(); //240
	 }

	 public static function totalWalletFundingCount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->remember(240)->count(); //240
	 }

	 public static function totalOnlineWalletFundingCount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->where('channel', 'online')->remember(240)->count(); //240
	 }

	 public static function totalOfflineWalletFundingCount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->where('channel', 'bank deposit')->remember(240)->count(); //240
	 }
	 public static function totalWalletFundingAmount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->remember(240)->sum('amount'); //240
	 }

}
