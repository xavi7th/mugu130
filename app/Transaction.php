<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;
use Carbon\Carbon;

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

	 public static function totalSumOfPendingRequests(){
			 return self::where('trans_type', 'withdrawal')->where('status', 'pending')->sum('amount');
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

	 public function getRefNoAttribute($value){
		 if (starts_with($value, 'AGENT')) {
			 $exploded = explode('-', $value);
			 $agent_id = $exploded[1];
			 $agent = User::find($agent_id)->only(['id', 'firstname', 'lastname', 'email']);
			 return [
				 'value' => $value,
				 'agent' => $agent
			 ];
		 }
		 else{
			 return [
				 $value,
				 null
			 ];
		 }
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

	 /**
 	 * Scope a query to only include today's earnings.
 	 *
 	 * @param \Illuminate\Database\Eloquent\Builder $q
 	 * @return \Illuminate\Database\Eloquent\Builder
 	 */
 	public function scopeDailyWithdrawal($q){
 			// return $this->expectedghdate->lte(Carbon::now());
 			// dd(Carbon::today()->isToday());

 			$q->whereDate('created_at', Carbon::today())->where('trans_type', 'withdrawal');
 			 // ->whereDate('created_at', '2016-12-31')

 	}

}
