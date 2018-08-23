<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;

class Transaction extends Model{

	use SoftDeletes;

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	protected $casts = [
		 'amount' => 'double'
	];

	 public function user(){
			 return $this->belongsTo(User::class);
	 }

	 public static function totalAmountWithdrawn(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'completed')->sum('amount');
	 }

	 public static function totalNumberOfRequests(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'pending')->count();
	 }

	 public static function totalWalletFundingCount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->count();
	 }

	 public static function totalOnlineWalletFundingCount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->where('channel', 'online')->count();
	 }

	 public static function totalOfflineWalletFundingCount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->where('channel', 'bank deposit')->count();
	 }

	 public static function totalWalletFundingAmount(){
		 return self::where('trans_type', 'wallet funding')->where('status', 'completed')->sum('amount');
	 }

	 /**
	  * Retrieves all pending cash out requests from the transaction database.
	  *
	  * Gets a paginate object from the transaction table based on transaction type being withdrawala and the status being pending
	  *
	  * @return return PaginatedResourceResponse
	  */

	 public static function pendingCashouts(){
		 return self::with(['user'])->where('trans_type', 'withdrawal')->where('status', 'pending')->paginate(env('ROWS_PER_PAGE'));
	 }

}
