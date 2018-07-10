<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;
use App\UserGameSession;

class Game extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at', 'ended_at'];
	protected $casts = [
			 'status' => 'boolean',
	];
	// public $rememberFor = 0.1;
	 //
	//  public function user(){
	// 		 return $this->belongsTo(User::class, 'sender_id');
	//  }

  public static function new(){

		//end previous game if any
		// IDEA: CAll Game end? so that all active usergamesessions will end too?
		// self::where('status', true)->update([
		// 	'status' => false,
		// 	'ended_at' => Carbon::now(),
		// 	'deleted_at' => Carbon::now()
		// ]);
		self::end();

		//create new game
		return self::firstOrCreate(['status' => true],[]);
  }

	public function user_game_sessions(){
		return $this->hasMany(UserGameSession::class)->oldest('ended_at');
	}

  public static function end(){
		//emit an event to all browsers that the game has ended

		//get the last gameid and
		//use the game id to retrieve all theuser game sessions ordered by ended_at
		$active_game = self::active();

		if (!$active_game) {

			// self::where('status', true)->where('created_at', '<', DB::raw('NOW() + INTERVAL 15 SECOND'))->update([
			// 	'status' => false,
			// 	'ended_at' => Carbon::now(),
			// 	'deleted_at' => Carbon::now()
			// ]);

			return;

		}

		$exam_records = optional($active_game)->user_game_sessions;

		//count how many they are.
		$total_examinees = optional($exam_records)->count();

		// dd($total_examinees);

		//If 1, void the game and return the cash
		if ($total_examinees == 1) {

			$examinee = $exam_records->first()->user;
			DB::beginTransaction();
					$examinee->available_units = $examinee->available_units + env('GAME_CREDITS');
					$examinee->save();

					// exit;

					$exam_records->first()->payment_status = 'nullified';
					$exam_records->first()->save();

					//end OR delete the game to prevent reimbursing the user indefinitely
					// $active_game->delete();
					$active_game->status = false;
					$active_game->num_of_players = $total_examinees;
					$active_game->max_winners = 0;
					$active_game->total_prize = 0;
					$active_game->total_winners = 0;
					$active_game->amount_won = 0;
					$active_game->ended_at = Carbon::now();
					$active_game->save();
			DB::commit();

		}

		else if($total_examinees == 0){
			//end the game
			$active_game->status = false;
			$active_game->num_of_players = $total_examinees;
			$active_game->max_winners = 0;
			$active_game->total_prize = 0;
			$active_game->total_winners = 0;
			$active_game->amount_won = 0;
			$active_game->ended_at = Carbon::now();
			$active_game->save();
		}

		//if more than 1, use the formula to calculate the amount they should receive
		else if($total_examinees > 1){

			DB::beginTransaction();
					// get the total amount to share, ie game credits - 5 (basic unit for participation ) - 5( for admin ) * total number of examinees
					$total_stake = (env('GAME_CREDITS') - env('BASIC_PARTICIPATION_REWARD') - env('EXAM_PARTICIPATION_FEE')) * $total_examinees;

					//get max winners
					$max_winners = ceil($total_examinees / env('PERCENT_WINNERS'));

					//get the amount of first price
					$sum = 0;
					for ($i=0; $i < $max_winners; $i++) {
						//Given a GP with CR the members of the series are x, pow(CR,1)x, pow(CR, 2)x ... pow(CR, n)x.
						// The first term is given by the sum of the n-members of the series divided by the sum of all their coefficients
						//This portion calculates the sum of all the coefficients
						$sum += (pow(1.06381, $i));
					}

					// This portion gets the last member (which will be the amount to give to the highest scorer) of the series fron the firstmember using the formula
					// nth-member = pow(CR, n-1) * firstmember
					$firstprice = ($total_stake/$sum) * (pow(1.06381, $max_winners - 1));

					$others = [];
					$count = 1;
					$dispensed_amount = 0;
					$those_that_shared = 0;
					$referral_bonus = 0;

					//loop through the sessions and start to apply position from 1 - ? to all those that have 10/10, save those that did not get 10/10 into an array
					//Also apply earnings based on formula
					//passing by reerence to allow modification of original value.

					foreach ($exam_records as $key => &$value) {

						if ($value->score == env('MINIMUM_PASSING_SCORE')) {

							//get his earning
							if ($count == 1) {
								$value->position = $count++;
								$value->earning = floor($firstprice) + env('BASIC_PARTICIPATION_REWARD');
								$dispensed_amount += $value->earning - env('BASIC_PARTICIPATION_REWARD');
								$those_that_shared++;
							}
							elseif($count <= $max_winners){
								$value->position = $count++;
								$value->earning = floor($firstprice /= 1.06381) + env('BASIC_PARTICIPATION_REWARD');
								$dispensed_amount += $value->earning - env('BASIC_PARTICIPATION_REWARD');
								$those_that_shared++;
							}
							elseif ($count > $max_winners) {
								$value->position = $count;
								$value->earning = env('BASIC_PARTICIPATION_REWARD');
							}


							// give him his earning
							if ($value->payment_status == 'unpaid') {
								$value->user->addEarning($active_game->id, $value->earning);

								//create a transaction record
								$value->user->receiptForGame($active_game->id);

								//Give his referrer a bonus for his participation
								if ($value->user->has_referrer()) {
									$value->user->referrer->user->addEarning(0, env('REFERRAL_BONUS'));
									$referral_bonus++;
								}
							}

							$value->payment_status = 'paid';
							$value->save();
						}

						else{
							$others[] = &$value;
						}
					}

					//Next loop over that second array and continue to positions them and add earning of 5
					foreach ($others as $key => &$v) {
						$v->position = $count == 1 ? $count + 1 : $count;
						$v->earning = env('BASIC_PARTICIPATION_REWARD');

						if ($v->payment_status == 'unpaid') {
							$v->user->addEarning($active_game->id, $v->earning);
							// _dd($v->user->earnings);

							//create a transaction record
							$v->user->receiptForGame($active_game->id);

							//Give his referrer a bonus for his participation
							if ($v->user->has_referrer()) {
								$v->user->referrer->user->addEarning(0, env('REFERRAL_BONUS'));
								$referral_bonus++;
							}
						}

						$v->payment_status = 'paid';
						$v->save();
					}

					//send the rest to admin acc
					$admin_amount = ($total_stake - $dispensed_amount) + ( env('EXAM_PARTICIPATION_FEE') * $total_examinees ) - ( env('REFERRAL_BONUS') * $referral_bonus);
					Earning::adminGameEarning($active_game->id, $admin_amount);


					//end the game
					$active_game->status = false;
					$active_game->num_of_players = $total_examinees;
					$active_game->max_winners = $max_winners;
					$active_game->total_prize = $total_stake;
					$active_game->total_winners = $those_that_shared;
					$active_game->amount_won = $dispensed_amount;
					$active_game->ended_at = Carbon::now();
					$active_game->save();

			DB::commit();

		}
  }

  public static function active($useCache = true){

		if ($useCache) {
			$games = self::where('status', true)->remember(0.1)->get();
		}
		else{
			$games = self::where('status', true)->get();
		}


		// if ( (Carbon::now()->minute%2 == 0) ) {
		// // if ( (Carbon::now()->minute%10 > 4) ) {
		// // if ( (Carbon::now()->minute >= 0 && Carbon::now()->minute <= 9) || (Carbon::now()->minute >= 30 && Carbon::now()->minute <= 39) ) {
		//
		// 	$games = self::where('status', true)->remember( session('GAME_TIMER')/60 )->cacheTags('active_game')->get();
		//
		//
		// } else {
		// 	$games = self::where('status', true)->remember( session('GAME_TIMER')/60 )->cacheTags('inactive_game')->get();
		// }

		if ($games->count() > 1) {
			return 'Too many active games';
		}

		else if ($games->count() < 1) {
			return false;
		}

		else {
			return $games[0];
		}

  }

  public static function last(){
		return self::latest()->where('status', false)->first();
  }


  public static function validGamesCount(){
		return self::where('num_of_players', '>', 1)->remember(10)->count(); //10
  }


  public static function totalUsersInAllGames(){
		return self::remember(10)->sum('num_of_players'); //10
  }





}
