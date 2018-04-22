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
use Illuminate\Broadcasting\BroadcastException;
use App\Events\ExamJoined;
use App\Events\NewMemberJoined;
use App\Notice;
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
        $this->middleware('auth')->except('getGameState');
        $this->middleware('suspended')->except('suspended', 'getApiKey', 'sendMessage', 'getGameState');
    }

    public function getGameState(){
      $game_id = Game::where('status', true)->value('id');
      $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();

      // if (Auth::user()->activeGames) {
      //   session(['GAME_STATE' => 'paused']);
      // }
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

              $new_session = UserGameSession::create([
                'user_id' => auth()->id(),
                'game_id' => $game_id
              ]);

            try {
              event(new ExamJoined(++$total_examinees));
              event(new NewMemberJoined($new_session));
            }

            catch (BroadcastException $e) {
              // echo 'broadcast Exception';
              //send admin a message that pusher was unavailable. The idea is so that he will know whether to continue to rely on pusher
              // IDEA: use a directrive that polls the app every 5secs to use a cached query to retrieve the num of users
            }
            catch (Exception $e) {
              // echo 'general exception';
            }

            DB::commit();

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

    public function pauseGame(){

      session(['GAME_STATE' => 'paused']);

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

        // _dd(Auth::user()->lastGame);

        Auth::user()->lastGame->ended_at = Carbon::now();
        Auth::user()->lastGame->score = $count;
        Auth::user()->lastGame->save();

        // temporarily generate users for the exam
        // $f = new DatabaseSeeder;
        // $f->call('UserGameSessionsTableSeeder');

      DB::commit();

      return ['status' => true, 'user_score'=>$count];

    }

    public function getExamResults(){

      if (Auth::user()->lastGame->payment_status == 'nullified') {
        //return invalid to inform the user
        return 'invalid';
      }

      return [
        'results' => Game::last()->user_game_sessions->load('user'),
        'user_earning' => Auth::user()->totalEarnings()->where('game_id', Game::last()->id)->sum('amount')
        // 'dispensed' => $dispensed_amount,
        // 'total_examinees' => $total_examinees,
        // 'total_share' => $dispensed_amount,
        // 'admin_amount' => $admin_amount,
        // 'total_stake' => $total_stake,
        // 'max_winners' => $max_winners,
        // 'last_price' => $total_stake/$sum,
        // 'first_price' => ($total_stake/$sum) * (pow(1.06381, $max_winners - 1)),
        // 'those_that_shared' => $those_that_shared,
        // 'total_earnings' => Auth::user()->totalEarnings->sum('amount'),

      ];
      //
      //
      // }

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

    public function requestWithdrawal(){

      if (Auth::user()->available_units < request()->input('details.amt')) {
        return response()->json(['message' => 'Insufficient funds' ], 422);
      }

      if (!Auth::user()->verified) {
        return response()->json(['message' => 'User account not yet verified' ], 422);
      }

      if (Auth::user()->acct_no == null ||  Auth::user()->phone1 == null) {
        return response()->json(['message' => 'Account profile incomplete' ], 422);
      }

      if (request()->input('details.amt') <= 1000) {
        $amount = request()->input('details.amt') - 50;
      }
      else{
        $amount = request()->input('details.amt') - ((floor(request()->input('details.amt')/5000) * 50) + 50);
      }

      DB::beginTransaction();

        //add a withdrawal request to transactions table
        Auth::user()->transactions()->create([
          'amount' => $amount,
          'trans_type' => 'withdrawal',
          'status' => 'pending',
        ]);

        //add a notice for the user

        //remove the units from his acc so that he cannot use it meanwhile
        Auth::user()->debitAccount($amount);

      DB::commit();

      return [
        'status' => true
      ];
    }

    public function getProfilePageDetails(){

      return [
        'page_details' => Auth::user()->load('transactions', 'earnings', 'games','referrer')
      ];
    }

    public function getDashboardPageDetails() {
      // _dd(Auth::user()->activeGames->payment_status);

      if (Auth::user()->activeGames && session('GAME_STATE') != 'waiting') {
        session(['GAME_STATE' => 'paused']);
      }

      if ( optional(Auth::user()->activeGames)->payment_status == 'unpaid' && optional(Auth::user()->activeGames)->ended_at != null) {
        session(['GAME_STATE' => 'waiting']);
      }
      // $game_id = Game::where('status', true)->value('id');
      // $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();
      //
      //
      //
      return [
        'ststus' => true,
      ];

    }

    public function getUserDetails() {
      return [
        'userdetails' => Auth::user()->load('notices', 'messages'),
      ];
    }

    public function confirmUserPassword(){
      // return request()->input('details');
      if (Auth::user()->unencpass != request()->input('details')) {
        return response()->json(['message' => 'Old password missmatch' ], 423);
      }
      return [
        'status' =>  true,
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

    public function markMessageAsRead() {
      return Message::updateOrCreate(['id' => request()->input('details.id')], request()->input('details'));
    }

    public function deleteMessage() {
      return ['status' => Message::find(request()->input('details.id'))->delete()];
    }

    public function sendMessage() {
      if (!request()->isJson()) {
        Message::toAdmin();
        return back()->withSuccess('Message Sent');
      }
      return ['status' => Message::toAdmin()];
    }

    public function markNoticeAsRead() {
      return Notice::updateOrCreate(['id' => request()->input('details.id')], request()->input('details'));
    }

    public function deleteNotice() {
      return ['status' => Notice::find(request()->input('details.id'))->delete()];
    }
}
