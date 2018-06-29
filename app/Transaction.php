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
	// public $rememberFor = 5;

	 public function user(){
			 return $this->belongsTo(User::class);
	 }

	 public static function totalAmountWithdrawn(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'completed')->get();
	 }

	 public static function totalNumberOfRequests(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'pending')->count();
	 }

	 public static function totalWalletFundingCount(){
		 // return self::where('trans_type', 'wallet funding')->where('status', 'completed')->sum('amount');
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->count();
	 }

}
