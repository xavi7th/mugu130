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
	// public $rememberFor = 5;
	 //
	//  public function user(){
	// 		 return $this->belongsTo(User::class, 'sender_id');
	//  }

  public static function new(){

		//end previous game if any
		// IDEA: CAll Game end? so that all active usergamesessions will end too?
		self::where('status', true)->update([
			'status' => false,
			'ended_at' => Carbon::now(),
			'deleted_at' => Carbon::now()
		]);

		//create new game
		return self::create([

		]);
  }

	public function user_game_sessions(){
		return $this->hasMany(UserGameSession::class)->oldest('ended_at');
	}

  public static function end(){
		//emit an event to all browsers that the game has ended

		//get the last gameid and
		//use the game id to retrieve all theuser game sessions ordered by ended_at
		$active_game = self::active();
		$exam_records = optional($active_game)->user_game_sessions;

		//count hom many they are.
		$total_examinees = optional($exam_records)->count();

		//If 1, void the game and return the cash
		if ($total_examinees == 1) {

			$examinee = $exam_records->first()->user;
			DB::beginTransaction();
					$examinee->available_units = $examinee->available_units + env('GAME_CREDITS');
					$examinee->save();

					$exam_records->first()->payment_status == 'nullified';
					$exam_records->first()->save();

					//delete the game to prevent reimbursing the user indefinitely
					$active_game->delete();
			DB::commit();

		}

		else if($total_examinees == 0){
			// return $total_examinees;
		}

		//if more than 1, use the formula to calculate the amount they should receive
		else if($total_examinees > 0){

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
					$count = 0;
					$dispensed_amount = 0;
					$those_that_shared = 0;

					//loop through the sessions and start to apply position from 1 - ? to all those that have 10/10, save those that did not get 10/10 into an array
					//Also apply earnings based on formula
					//passing by reerence to allow modification of original value.

					foreach ($exam_records as $key => &$value) {
						if ($value->score == env('MINIMUM_PASSING_SCORE')) {
							$value->position = ++$count;

							if ($count == 1) {

								$value->earning = floor($firstprice) + env('BASIC_PARTICIPATION_REWARD');
								$dispensed_amount += $value->earning - env('BASIC_PARTICIPATION_REWARD');
								$those_that_shared++;
							}
							elseif($count <= $max_winners){
								// give him his share
								$value->earning = floor($firstprice /= 1.06381) + env('BASIC_PARTICIPATION_REWARD');
								$dispensed_amount += $value->earning - env('BASIC_PARTICIPATION_REWARD');
								$those_that_shared++;
							}
							elseif ($count > $max_winners) {
								$value->earning = env('BASIC_PARTICIPATION_REWARD');
							}
							if ($value->payment_status == 'unpaid') {
								$value->user->addEarning($active_game->id, $value->earning);
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
						$v->position = ++$count;
						$v->earning = env('BASIC_PARTICIPATION_REWARD');

						if ($v->payment_status == 'unpaid') {
							$v->user->addEarning($active_game->id, $v->earning);
						}

						$v->payment_status = 'paid';
						$v->save();
					}

					//send the rest to admin acc
					$admin_amount = ($total_stake - $dispensed_amount) + ( env('EXAM_PARTICIPATION_FEE') * $total_examinees );
					Earning::adminEarning($active_game->id, $admin_amount);

					//end the game
					$active_game->status = false;
					$active_game->ended_at = Carbon::now();
					$active_game->save();

			DB::commit();

		}
  }

  public static function active(){

		$games = self::where('status', true)->get();

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



}
