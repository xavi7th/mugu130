// IDEA: MOVE THE MARKING TO THE MIDDLEWARE RESPONSIBLE FOR ENDING THE GAME TO PREVENT MARKING THE GAME TOO MANY TIMES WHEN THE USERS ARE RETRIEVING RESULTS
//// TODO: THIS FUNCTION SHOULD ONLY RETRIEVE THE RESULTS NOT MARK THE EXAM.

//check if the game has ended. If not, send false. Game state should be loading if it has ended.
// if (Game::active() !== false) {
//   return ['results' => false ];
// };

//use socket.io to end the game on all browsers when the time is up.

// //get the last gameid
// $game_id = Game::latest()->first()->id;
//
// //use the game id to retrieve all theuser game sessions ordered by ended_at
// $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();
//
// //count hom many they are.
// $total_examinees = $exam_records->count();
//
// //If 1, void the game and return the cash
// if ($total_examinees == 1) {
//   DB::beginTransaction();
//       Auth::user()->available_units = Auth::user()->available_units + env('GAME_CREDITS');
//       Auth::user()->save();
//
//       $exam_records->first()->payment_status == 'paid';
//       $exam_records->first()->save();
//
//       //delete the game to prevent reimbursing the user indefinitely
//       Game::find($game_id)->delete();
//   DB::commit();
//   //return invalid to inform the user
//   return 'invalid';
//   exit;
// }
//
// //if more than 1, use the formula to calculate the amount they should receive
// else{
//   // get the total amount to share, ie game credits - 5 (basic unit for participation ) - 5( for admin ) * total number of examinees
//   $total_stake = (env('GAME_CREDITS') - env('BASIC_PARTICIPATION_REWARD') - env('EXAM_PARTICIPATION_FEE')) * $total_examinees;
//
//   //get max winners
//   $max_winners = ceil($total_examinees / env('PERCENT_WINNERS'));
//
//
//   //get the amount of first price
//   $sum = 0;
//   for ($i=0; $i < $max_winners; $i++) {
//
//     //Given a GP with CR the members of the series are x, pow(CR,1)x, pow(CR, 2)x ... pow(CR, n)x.
//     // The first term is given by the sum of the n-members of the series divided by the sum of all their coefficients
//     //This portion calculates the sum of all the coefficients
//
//     $sum += (pow(1.06381, $i));
//   }
//   // return $total_stake/$sum;
//
//   // This portion gets the last member (which will be the amount to give to the highest scorer) of the series fron the firstmember using the formula
//   // nth-member = pow(CR, n-1) * firstmember
//   $firstprice = ($total_stake/$sum) * (pow(1.06381, $max_winners - 1));
//
//   $others = [];
//   $count = 0;
//   $dispensed_amount = 0;
//   $those_that_shared = 0;
//
//   //passing by reerence to allow modification of original value.
//
//   //loop through the sessions and start to apply position from 1 - ? to all those that have 10/10, save those that did not get 10/10 into an array
//   //Also apply earnings based on formula
//
//
//   foreach ($exam_records as $key => &$value) {
//
//     if ($value->score == env('MINIMUM_PASSING_SCORE')) {
//       $value->position = ++$count;
//
//       if ($count == 1) {
//
//         $value->earning = floor($firstprice) + env('BASIC_PARTICIPATION_REWARD');
//         $dispensed_amount += $value->earning - env('BASIC_PARTICIPATION_REWARD');
//         $those_that_shared++;
//       }
//
//       elseif($count <= $max_winners){
//         // give him his share
//         $value->earning = floor($firstprice /= 1.06381) + env('BASIC_PARTICIPATION_REWARD');
//         $dispensed_amount += $value->earning - env('BASIC_PARTICIPATION_REWARD');
//         $those_that_shared++;
//       }
//       elseif ($count > $max_winners) {
//         $value->earning = env('BASIC_PARTICIPATION_REWARD');
//       }
//
//       if ($value->payment_status == 'unpaid') {
//         $value->user->addEarning($game_id, $value->earning);
//       }
//       $value->payment_status = 'paid';
//
//       $value->save();
//     }
//
//     else{
//       $others[] = &$value;
//     }
//   }
//
//
//   //Next loop over that second array and continue to positions them and add earning of 5
//   foreach ($others as $key => &$v) {
//     $v->position = ++$count;
//     $v->earning = env('BASIC_PARTICIPATION_REWARD');
//
//     if ($v->payment_status == 'unpaid') {
//       $v->user->addEarning($game_id, $v->earning);
//     }
//     $v->payment_status = 'paid';
//
//     $v->save();
//   }
//
//
//   //send the rest to admin acc
//   $admin_amount = ($total_stake - $dispensed_amount) + ( env('EXAM_PARTICIPATION_FEE') * $total_examinees );
//   Earning::adminEarning($game_id, $admin_amount);
//
//
//   //return the results ordered by position
