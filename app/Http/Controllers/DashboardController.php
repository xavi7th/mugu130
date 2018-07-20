<?php

namespace App\Http\Controllers;

use Paystack;

use App\Game;
use App\User;
use App\Notice;
use App\Earning;
use App\Message;
use App\Transaction;
use App\UserQuestion;
use App\UserGameSession;

use Carbon\Carbon;

use App\Mail\TransactionalMail;

use App\Events\ExamJoined;
use App\Events\NewMemberJoined;

use Illuminate\Http\Request;

use Illuminate\Database\Seeder;

use Illuminate\Broadcasting\BroadcastException;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;

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
        $this->middleware('before')->except('sendMessage', 'joinGame');
        $this->middleware('auth')->except('getGameState', 'sendMessage');
        $this->middleware('suspended')->except('suspended', 'getApiKey', 'sendMessage', 'getGameState', 'sendMessage');
        $this->middleware('users')->only('joinGame','pauseGame','resumeGame','submitExam','endExam','getExamResults');
    }

    public function getGameState(){
      // return optional(Game::active())->id;
      // $game_id = Game::where('status', true)->value('id');
      if (!Game::active()) {
        $exam_records = 0;
      }
      else{
        $exam_records = UserGameSession::where('game_id', optional(Game::active())->id)->oldest('ended_at')->remember(0.5)->count();
      }

      // if (Auth::user()->activeGames) {
      //   session(['GAME_STATE' => 'paused']);
      // }
      return [
        'game_timer' => session('GAME_TIMER'),
        'game_state' => session('GAME_STATE'), //active, waiting (for the game to end and show result), paused, loading
        'total_examinees' =>$exam_records,
      ];

    }

    public function joinGame(){

      //check user balance
      if (Auth::user()->available_units < env('GAME_CREDITS')) {
        return response()->json(['status' => 'Insufficient balance' ], 402);
      }

      // Get id of the current active on-going game
      $game_id = optional(Game::active(false))->id;

      if (!$game_id) {
        return response()->json(['status' => false ], 422);
      }

      // Add the user to that current game using the game->id
      if($game_id > 0){
        if (Auth::user()->activeGames) {
          return response()->json(['status' => 'user already has an active game' ], 403);
        }

        else {

          // COUNT THE NUM OF EXAMINEES CURRENTLY
          $total_examinees = UserGameSession::where('game_id', $game_id)->count('id');

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

        return ['status' => true];
      }

    }

    public function pauseGame(){

      if (Auth::user()->activeGames && session('GAME_STATE') != 'waiting') {
            session(['GAME_STATE' => 'paused']);
            return 'game paused';
        }
       return 'user has ended his exam';

    }

    public function resumeGame(){
      if(!Auth::user()->activeGames->ended_at){
           session(['GAME_STATE' => 'active']);
           return ['status' => true];
       } else {
           return ['status' => session(['GAME_STATE'])];
       }
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

      DB::commit();
      session(['GAME_STATE' => 'waiting']);


      //change the game state to waiting if timer is not up yet
      return [
        'status' => true,
        'user_score'=>$count
      ];

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

      DB::commit();

      return ['status' => true, 'user_score'=>$count];

    }

    public function getExamResults(){

      if (Auth::user()->lastGame->payment_status == 'nullified') {
        //return invalid to inform the user
        return 'invalid';
      }

      $game = Game::last();

      return [
        'results' => [Auth::user()->lastGame],
        'user_earning' => Auth::user()->totalEarnings()->where('game_id', Game::last()->id)->sum('amount'),
        'total_players' => $game->num_of_players,
        'max_winners' => $game->max_winners,
        'total_prize_money' => $game->total_prize,
        'user_questions' => Auth::user()->load('user_questions.question')
      ];
      //
      //
      // }

    }

    public function getTotalEarnings(){

        //return the results ordered by position

        if (Auth::user()->role_id == env('ADMIN_ROLE_ID')) {
          $earnings = Earning::where('user_id', env('ADMIN_ROLE_ID'))->where('transferred', 0)->remember(5)->sum('amount');
        }
        else{
          $earnings = Auth::user()->totalEarnings->sum('amount');

        }

        return [
          'total_earnings' => $earnings,

        ];

    }

    public function transferEarnings(){
      Cache::flush();
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

    public function sendCreditAccountRequest(){
      // return  request()->all();

      DB::beginTransaction();

        //create deposit transcation record
        Auth::user()->transactions()->create([
          'amount' => request()->input('details.amt'),
          'trans_type' => request()->input('details.trans_type'),
          'status' => request()->input('details.status'),
        ]);


      DB::commit();

      return [
        'status' => true
      ];
    }

    public function creditAccount(){
      // return  request('reference');

      // Confirm that reference has not already gotten value
      // This would have happened most times if you handle the charge.success event.
      // If it has already gotten value by your records, you may call
      // perform_success()

      // Get this from https://github.com/yabacon/paystack-class
      // require 'Paystack.php';
      // if using https://github.com/yabacon/paystack-php
      // require 'paystack/autoload.php';


      // The PAYSTACK CLASS IS IN MY MODELS

      $paystack = new Paystack(env('PAYSTACK_SECRET_KEY'));
      $reference = request('reference');
      // the code below throws an exception if there was a problem completing the request,
      // else returns an object created from the json response
      $trx = $paystack->transaction->verify([
                                               'reference' => $reference
                                            ]);
      // _dd($trx);
      // status should be true if there was a successful call. This is not what determines if the transaction was successful. ONLY DETERMINES IF A CALL WAS MADE SUCCESSFULLY
      if(!$trx->status){
          exit($trx->message);
      }


      // functions
      function give_value($reference, $trx){
        // Be sure to log the reference as having gotten value
        // write code to give value

        if ($trx->status == 'success') {

                // Credit the user on paystack bounceback
            DB::beginTransaction();

                Transaction::where('user_id', $trx->data->metadata->custom_fields[3]->value)->latest()->first()->update([
                  'status' => 'completed'
                ]);

                Auth::user()->creditAccount((($trx->data->amount - $trx->data->metadata->custom_fields[4]->value)/100));

            DB::commit();
                // _dd($trx->data);


            $rsp = TransactionalMail::sendCreditMail(($trx->data->amount/100), ($trx->data->metadata->custom_fields[4]->value/100), 'wallet funding', Auth::user()->available_units);
            if (is_array($rsp)) {
              return response()->json(['message' => $rsp['message'] ], $rsp['status']);
            }
            else {
              return ['message' => $rsp];
            }

          // echo json_encode(['transaction'=>'updated. Value given']);
        }
      }

      function perform_success($trx) {
        // inline
        echo json_encode([
                            'verified'=>true,
                            'status'=> $trx->data->status,
                            'paystack message'=> $trx->message,

                          ]);

        // redirect to




        // echo '<br>';
        // echo '<pre>'; print_r($trx); echo '</pre>'; exit;
        // standard
        // header('Location:'.route('ordersuccessful'));
        exit();
      }



      // full sample verify response is here: https://developers.paystack.co/docs/verifying-transactions
      if('success' == $trx->data->status){
        // use trx info including metadata and session info to confirm that cartid
        // matches the one for which we accepted payment
        give_value($reference, $trx);
        perform_success($trx);
      }

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
        $fee = env('TRANSACTION_FEE');
        $amount = request()->input('details.amt') - $fee;
      }
      else{
        $fee = ((floor(request()->input('details.amt')/5000) * env('TRANSACTION_FEE')) + (env('TRANSACTION_FEE') * 2));
        $amount = request()->input('details.amt') - $fee;
      }

      DB::beginTransaction();

        //remove the units from his acc so that he cannot use it meanwhile
        Auth::user()->debitAccount($amount, $fee);

      DB::commit();

      // $rsp = TransactionalMail::sendDebitRequestedMail(request()->input('details.amt'));

      return [
        'status' => true
      ];
    }

    public function getProfilePageDetails(){

      return [
        'page_details' => Auth::user()->load(['transactions' => function ($q) { $q->latest()->remember(0.5); }, 'earnings'=> function ($q) { $q->latest()->remember(1); }, 'games' => function ($q) { $q->latest()->remember(10); },'referrals'=> function ($q) { $q->remember(240); }])
      ];
    }

    public function getDashboardPageDetails() {

      if (Auth::user()->activeGames && session('GAME_STATE') != 'waiting') {
        session(['GAME_STATE' => 'paused']);
      }

      if ( optional(Auth::user()->activeGames)->ended_at != null && optional(Auth::user()->activeGames)->payment_status == 'unpaid') {
        session(['GAME_STATE' => 'waiting']);
      }
      // $game_id = Game::where('status', true)->value('id');
      // $exam_records = UserGameSession::where('game_id', $game_id)->oldest('ended_at')->get();
      //
      //
      //
      return [
        'status' => true,
      ];

    }

    public function getUserDetails() {
      return [
        'userdetails' => Auth::user()->load('messages'),
      ];
    }

    public function confirmUserPassword(){
      // return request()->input('details');

      if ( ! Hash::check(request()->input('details'), Auth::user()->password)) {
        return response()->json(['message' => 'Old password missmatch' ], 423);
      }

      // if (Auth::user()->unencpass != request()->input('details')) {
      //   return response()->json(['message' => 'Old password missmatch' ], 423);
      // }
      return [
        'status' =>  true,
      ];
    }

    public function updateUserDetails(){

      // return request();
      $this->validate(request(), [
        'details.email' => 'required',
        // 'details.phone1' => 'required'
      ]);

      Cache::flush();

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
      // return  request()->all();
      if (!request()->isJson()) {
        $rsp = TransactionalMail::sendVisitorMessage();

        return back()->withSuccess('Message Sent');
      }
      $rsp = TransactionalMail::sendVisitorMessage();

      return [
        'status' => $rsp['status'],
        'message' => $rsp['message']
      ];
    }

    public function markNoticeAsRead() {
      return Notice::updateOrCreate(['id' => request()->input('details.id')], request()->input('details'));
    }

    public function deleteNotice() {
      return ['status' => Notice::find(request()->input('details.id'))->delete()];
    }

    public function resendVerificationMail() {
      $rsp = TransactionalMail::resendVerificationMail();

      if (is_array($rsp)) {
        return response()->json(['message' => $rsp['message'] ], $rsp['status']);
      }
      else {
        return ['message' => $rsp];
      }
    }
}
