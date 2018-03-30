<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Seeder;
use App\User;
use App\Game;
use App\Message;
use App\Earning;
use App\UserGameSession;
use App\UserQuestion;
use Carbon\Carbon;
use DatabaseSeeder;
use App\Events\ExamJoined;
// Cache::flush();

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('before');
        $this->middleware('auth')->except('contact');
        $this->middleware('suspended')->except('suspended', 'getApiKey', 'contact');
    }

    public function index(){
        // Cache::flush();

        if (Auth::user()->useraccstatus == 'admin') {
          # code...
          return redirect()->route('admin');
        }
        return view('dashboard');
    }

    public function getGameState(){
      $game_id = Game::where('status', true)->value('id');
      $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();

      return [
        'game_timer' => session('GAME_TIMER'),
        'game_state' => session('GAME_STATE'), //active, waiting (for the game to end and show result), paused, loading
        'total_examinees' =>$exam_records->count(),
      ];

    }

    public function joinGame(){

      // Get id of the current active on-going game
      $game_id = Game::where('status', true)->value('id');

      if (!$game_id) {
        return response()->json(['status' => false ], 422);
      }

      // Add the user to that current game using the game->id
      if($game_id > 0){
        if (Auth::user()->activeGames) {
          return response()->json(['status' => 'user already has an active game' ], 403);
        }

        else if (!Auth::user()->activeGames) {

          //use the game id to retrieve all theuser game sessions ordered by ended_at
          $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();

          //count hom many they are.
          $total_examinees = $exam_records->count();

          //check user balance
          if (Auth::user()->available_units < env('GAME_CREDITS')) {
            return response()->json(['status' => 'Insufficient balance' ], 402);
          }
          else{
            DB::beginTransaction();

              Auth::user()->available_units -= env('GAME_CREDITS');
              Auth::user()->save();

              UserGameSession::create([
                'user_id' => auth()->id(),
                'game_id' => $game_id
              ]);

            DB::commit();

            event(new ExamJoined(++$total_examinees));

          }



        }

        return ['status' => true];
      }

      // Retrieve 11 random questions from the question pool and assign it to the user for that particular game


        return [
          'game_timer' => 600,
          'game_state' => 'active' //active, waiting (for the game to end and show result), paused, loading
        ];
    }

    public function resumeGame(){

      session(['GAME_STATE' => 'active']);
      return ['status' => true];
    }

    public function submitExam(){

      // return Auth::user()->activeGames;

      $exam = request('details');

      // Get id of the current active on-going game
      $game_id = Game::where('status', true)->value('id');

      //loop through the answers and mark them and send to DB
      DB::beginTransaction();
        $count = 0;
        foreach ($exam as $key => $value) {
          $record = UserQuestion::find($value['id']);
          $record->answered_option = $value['answered_option'];
          if ($value['answered_option'] == $value['question']['correct_option']) {
            $value['verdict'] = 1;
            $record->verdict = 1;
            $count++;
          }
          $record->save();
          $ids[] = $record;
        }

        Auth::user()->activeGames->ended_at = Carbon::now();
        Auth::user()->activeGames->score = $count;
        Auth::user()->activeGames->save();

        // temporarily generate users for the exam
        $f = new DatabaseSeeder;
        $f->call('UserGameSessionsTableSeeder');

      DB::commit();
      session(['GAME_STATE' => 'waiting']);


      //change the game state to waiting if timer is not up yet
      return ['status' => true, 'user_score'=>$count];

      // return game state

    }

    public function endExam(){

      // return dd(Auth::user()->lastGame);

      $exam = request('details');

      // Get id of the current active on-going game
      $game_id = Game::where('status', true)->value('id');

      //loop through the answers and mark them and send to DB
      DB::beginTransaction();
        $count = 0;
        foreach ($exam as $key => $value) {
          $record = UserQuestion::find($value['id']);
          $record->answered_option = $value['answered_option'];
          if ($value['answered_option'] == $value['question']['correct_option']) {
            $value['verdict'] = 1;
            $record->verdict = 1;
            $count++;
          }
          $record->save();
          $ids[] = $record;
        }

        Auth::user()->lastGame->ended_at = Carbon::now();
        Auth::user()->lastGame->score = $count;
        Auth::user()->lastGame->save();

        // temporarily generate users for the exam
        $f = new DatabaseSeeder;
        $f->call('UserGameSessionsTableSeeder');

      DB::commit();
      // session(['GAME_STATE' => 'loading']);


      //change the game state to waiting if timer is not up yet
      return ['status' => true, 'user_score'=>$count];

      // return game state

    }

    public function getExamResults(){

      //check if the game has ended. If not, send false. Game state should be loading if it has ended.
      if (Game::active() !== false) {
        return ['results' => false ];
      };

      //the Before middleware should end the game when it's time

      //use socket.io to end the game on all browsers when the time is up.

      //get the last gameid
      $game_id = Game::latest()->first()->id;

      //use the game id to retrieve all theuser game sessions ordered by ended_at
      $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();

      //count hom many they are.
      $total_examinees = $exam_records->count();

      //If 1, void the game and return the cash
      if ($total_examinees == 1) {
        DB::beginTransaction();
            Auth::user()->available_units = Auth::user()->available_units + env('GAME_CREDITS');
            Auth::user()->save();

            $exam_records->first()->payment_status == 'paid';
            $exam_records->first()->save();

            //delete the game to prevent reimbursing the user indefinitely
            Game::find($game_id)->delete();
        DB::commit();
        //return invalid to inform the user
        return 'invalid';
      }

      //if more than 1, use the formula to calculate the amount they should receive
      else{
        // get the total amount to share,
        $total_stake = 25 * $total_examinees;

        //get max winners
        $max_winners = ceil($total_examinees / 10);

        //get the amount of first price
        $sum = 0;
        for ($i=0; $i < $max_winners; $i++) {

          //Given a GP with CR the members of the series are x, pow(CR,1)x, pow(CR, 2)x ... pow(CR, n)x.
          // The first term is given by the sum of the n-members of the series divided by the sum of all their coefficients
          //This portion calculates the sum of all the coefficients

          $sum += (pow(1.06381, $i));
        }
        // return $total_stake/$sum;

        // This portion gets the last member (which will be the amount to give to the highest scorer) of the series fron the firstmember using the formula
        // nth-member = pow(CR, n-1) * firstmember
        $firstprice = ($total_stake/$sum) * (pow(1.06381, $max_winners - 1));

        $others = [];
        $count = 0;
        $dispensed_amount = 0;
        $those_that_shared = 0;

        //passing by reerence to allow modification of original value.

        //loop through the sessions and start to apply position from 1 - ? to all those that have 10/10, save those that did not get 10/10 into an array
        //Also apply earnings based on formula


        foreach ($exam_records as $key => &$value) {

          if ($value->score == 10) {
            $value->position = ++$count;

            if ($count == 1) {

              $value->earning = floor($firstprice) + 5;
              $dispensed_amount += $value->earning - 5;
              $those_that_shared++;
            }

            elseif($count <= $max_winners){
              // give him his share
              $value->earning = floor($firstprice /= 1.06381) + 5;
              $dispensed_amount += $value->earning - 5;
              $those_that_shared++;
            }
            elseif ($count > $max_winners) {
              # code...
              $value->earning = 5;
            }

            if ($value->payment_status == 'unpaid') {
              $value->user->addEarning($game_id, $value->earning);
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
          $v->earning = 5;

          if ($v->payment_status == 'unpaid') {
            $v->user->addEarning($game_id, $v->earning);
          }
          $v->payment_status = 'paid';

          $v->save();


        }


        //send the rest to admin acc
        $admin_amount = $total_stake - $dispensed_amount;
        Earning::adminEarning($game_id, $admin_amount);


        //return the results ordered by position
        return [
          'results' => $exam_records->load('user'),
          'dispensed' => $dispensed_amount,
          'total_examinees' => $total_examinees,
          'total_share' => $dispensed_amount,
          'admin_amount' => $admin_amount,
          'total_stake' => $total_stake,
          'max_winners' => $max_winners,
          'last_price' => $total_stake/$sum,
          'first_price' => ($total_stake/$sum) * (pow(1.06381, $max_winners - 1)),
          'those_that_shared' => $those_that_shared,
          'total_earnings' => Auth::user()->totalEarnings->sum('amount'),

        ];


      }

    }

    public function getTotalEarnings(){

        //return the results ordered by position
        return [
          'total_earnings' => Auth::user()->totalEarnings->sum('amount'),

        ];

    }

    public function transferEarnings(){

      //if there is, add the sum to the available_units
      if (!Auth::user()->totalEarnings()->where('transferred', false)->sum('amount')) {
        return [
          'status' => 'Insufficient',
        ];
      }
      DB::beginTransaction();

          Auth::user()->available_units = Auth::user()->available_units + Auth::user()->totalEarnings()->where('transferred', false)->sum('amount');
          Auth::user()->save();

          Auth::user()->earnings()->where('transferred', false)->update([
            'transferred' => true
          ]);

      DB::commit();

        //return the results ordered by position
        return [
          'status' => true,
        ];

    }

    public function getUserQuestions(){
        return [
          'user_questions' => Auth::user()->getUserQuestions()
        ];
    }

    public function creditAccount(){
      // return  request()->all();

      DB::beginTransaction();

        //create deposit transcation record
        Auth::user()->transactions()->create([
          'amount' => request()->input('details.amt'),
          'trans_type' => 'purchase',
        ]);

        Auth::user()->creditAccount();

      DB::commit();

      return [
        'status' => true
      ];
    }

    public function getProfilePageDetails(){

      return [
        'page_details' => Auth::user()->load('transactions', 'earnings', 'games')
      ];
    }

    public function updateUserDetails(){

      $this->validate(request(), [
        'details.email' => 'required',
        'details.phone1' => 'required'
      ]);
      return [
        'status' =>  Auth::user()->updateUserDetails(),
      ];
    }




}
