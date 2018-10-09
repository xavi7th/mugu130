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
use App\Question;

use Illuminate\Http\Request;

use Illuminate\Database\Seeder;

use Illuminate\Broadcasting\BroadcastException;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;

// Cache::flush();



class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(){
        $this->middleware('before')->except('sendMessage', 'joinGame');
        $this->middleware('auth')->except('getGameState', 'sendMessage');
        $this->middleware('suspended')->except('suspended', 'getApiKey', 'sendMessage', 'getGameState', 'sendMessage');
        $this->middleware('users')->only('joinGame','pauseGame','resumeGame','submitExam','endExam','getExamResults');
    }

    public static function routes(){
      Route::get('/get-api-key', 'DashboardController@getApiKey');

      Route::post('/get-total-earnings', 'DashboardController@getTotalEarnings');

      Route::post('/transfer-earnings', 'DashboardController@transferEarnings');

      Route::post('/get-user-details', 'DashboardController@getUserDetails');

      Route::post('/get-profile-page-details', 'DashboardController@getProfilePageDetails');

      Route::post('/get-dashboard-page-details', 'DashboardController@getDashboardPageDetails');

      Route::post('/make-deposit', 'DashboardController@makeDeposit');

      Route::post('/send-credit-account-request', 'DashboardController@sendCreditAccountRequest');

      Route::post('/credit-account', 'DashboardController@creditAccount');

      Route::post('/request-withdrawal', 'DashboardController@requestWithdrawal');

      Route::post('/received-withdrawal', 'DashboardController@receivedWithdrawal');

      Route::post('/dispute-withdrawal', 'DashboardController@disputeWithdrawal');

      Route::post('/confirm-user-password', 'DashboardController@confirmUserPassword');

      Route::post('/update-user-details', 'DashboardController@updateUserDetails');

      Route::post('/join-game', 'DashboardController@joinGame');

      Route::post('/pause-game', 'DashboardController@pauseGame');

      Route::post('/resume-game', 'DashboardController@resumeGame');

      Route::post('/submit-exam', 'DashboardController@submitExam');

      Route::any('/end-exam', 'DashboardController@endExam');

      Route::any('get-exam-results', 'DashboardController@getExamResults');

      Route::any('get-exam-top-ten/{game_id}', 'DashboardController@getExamTopTen');

      Route::post('/get-user-questions', 'DashboardController@getUserQuestions');

      Route::post('/question-remove-options', 'DashboardController@questionRemoveOptions');

      Route::post('/mark-message-as-read', 'DashboardController@markMessageAsRead');

      Route::post('/delete-message', 'DashboardController@deleteMessage');

      Route::post('/mark-notice-as-read', 'DashboardController@markNoticeAsRead');

      Route::post('/delete-notice', 'DashboardController@deleteNotice');
    }

    public function getGameState(){

      if (!Game::active()) {
        $exam_records = 0;
      }
      else{
        $exam_records = UserGameSession::where('game_id', optional(Game::active())->id)->oldest('ended_at')->count();
      }

      return [
        'game_timer' => session('GAME_TIMER'),
        'game_state' => session('GAME_STATE'), //active, waiting (for the game to end and show result), paused, loading
        'total_examinees' =>$exam_records,
      ];

    }

    public function joinGame(){

      // return ['hh' => Auth::user()->earnings_today()->sum('amount') < env('MAX_ACCEPTABLE_DAILY_EARNING')] ;

      if (Auth::user()->earnings_today()->sum('amount') >= env('MAX_ACCEPTABLE_DAILY_EARNING') ) {
        return response()->json(['err_msg' => 'DAILY LIMIT EXCEEDED!!! <br> Please wait until tomorrow' ], 402);
      }

      //check user balance
      if (Auth::user()->available_units < env('GAME_CREDITS')) {
        return response()->json(['err_msg' => 'INSUFFICIENT FUNDS!!! <br> Kindly fund your wallet to join game' ], 402);
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
          if ($value['answered_option'] == $record->correct_option) {
            $value['verdict'] = 1;
            $record->verdict = 1;
            $count++;
          }
          $record->save();
          $ids[] = $record;
        }

        if ( Auth::user()->activeGames->created_at->diffInSeconds(now()) < env('MIN_ACCEPTABLE_GAME_TIME') && $count >= env('MINIMUM_PASSING_SCORE') ) {

          Auth::user()->activeGames->ended_at = Carbon::now();
          Auth::user()->activeGames->score = null;
          Auth::user()->activeGames->payment_status = 'malpractice';
          Auth::user()->activeGames->save();

          Auth::user()->useraccstatus = 'suspended';
          Auth::user()->save();

          //Send Admin a message that a user has been suspended
          Message::userSuspended('Malpractice');

          Auth::logout();

          DB::commit();
          session(['GAME_STATE' => 'loading']);

          return;
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
          if ($value['answered_option'] == $record->correct_option) {
            $value['verdict'] = 1;
            $record->verdict = 1;
            $count++;
          }
          $record->save();
          $ids[] = $record;
        }

        if ( Auth::user()->lastGame->created_at->diffInSeconds(now()) < env('MIN_ACCEPTABLE_GAME_TIME') && $count >= env('MINIMUM_PASSING_SCORE') ) {

          Auth::user()->lastGame->ended_at = Carbon::now();
          Auth::user()->lastGame->payment_status = 'malpractice';
          Auth::user()->lastGame->score = null;
          Auth::user()->lastGame->save();

          Auth::user()->useraccstatus = 'suspended';
          Auth::user()->save();

          //Send Admin a message that a user has been suspended
          Message::userSuspended('Malpractice');

          Auth::logout();

          DB::commit();
          session(['GAME_STATE' => 'loading']);

          return;
        }

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
        'user_earning' => Auth::user()->totalEarnings()->where('game_id', $game->id)->sum('amount'),
        'total_players' => $game->num_of_players,
        'max_winners' => $game->max_winners,
        'total_prize_money' => $game->total_prize,
        'user_questions' => Auth::user()->load('user_questions.question'),
        'top_ten' => UserGameSession::with(['user:id,firstname'])->where('game_id', $game->id)->orderBy('score')->take(10)->get(['score', 'earning', 'user_id'])->unique('score')
      ];

    }

    public function getExamTopTen($game_id){

      return [
        'top_ten' => UserGameSession::with(['user:id,firstname', 'game:id,num_of_players'])->where('game_id', $game_id)->where('earning', '!=', env('BASIC_PARTICIPATION_REWARD'))->orderBy('position', 'asc')->take(10)->get(['score', 'earning', 'position', 'user_id', 'created_at', 'ended_at', 'game_id'])->unique('position')
      ];

    }

    public function questionRemoveOptions(){

      // dd(Question::find(request('details')));
      $question = Question::find(request('details'));

      $j = 0;
      for ($i=0; $i < 4;) {

        if ($question->{'option_'.++$i} !== $question->correct_option) {
          if ($j > 1) {
            break;
          }
          $j++;
          $question->{'option_'.$i} = null;
        }
      }

      return $question;

    }

    public function getTotalEarnings(){

        //return the results ordered by position

        if (Auth::user()->role_id == env('ADMIN_ROLE_ID')) {
          $earnings = Earning::where('user_id', env('ADMIN_ROLE_ID'))->where('transferred', 0)->sum('amount');
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

        // TODO: REVIEW THIS AREA cf; line 405.
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

      if ( !Auth::user()->withdrawals_today->isEmpty() ) {
        //The user has withdrawn money today before
        return response()->json(['message' => 'DAILY CASHOUT LIMIT EXCEEDED!!! <br> Please wait until tomorrow.'], 422);
      }

      if (Auth::user()->available_units < request()->input('details.amt')) {
        return response()->json(['message' => 'Insufficient funds' ], 422);
      }

      if (request()->input('details.amt') > env('MAX_WITHDRAWABLE_AMOUNT')) {
        return response()->json(['message' => 'Maximum limit exceeded' ], 422);
      }

      if (!Auth::user()->verified) {
        $message = <<<MESSAGE
          USER ACCOUNT NOT YET VERIFIED. <br> <br> To withdraw, you have to verify your account. A verification link has been sent to you. If you don't find the email in your inbox, check your spam. Otherwise, send a complaint to <a style="color:white; text-decoration: underline;" href="mailto:hello@fastplay24.com ">hello@fastplay24.com </a> for your account to be verified.
MESSAGE;
        return response()->json(['message' => $message ], 422);
      }

      if (Auth::user()->acct_no == null ||  Auth::user()->phone1 == null || (Auth::user()->facebook == null &&  Auth::user()->twitter == null && Auth::user()->instagram == null && Auth::user()->telegram == null) ) {
        return response()->json(['message' => 'Account profile incomplete' ], 422);
      }

      if (request()->input('details.amt') < 1000) {
        $fee = env('TRANSACTION_FEE');
        $amount = request()->input('details.amt') - $fee;
      }
      else{
        $fee = ((floor(request()->input('details.amt')/env('WITHDRAWAL_BOUNDARY_AMOUNT')) * env('TRANSACTION_FEE')) + ( env('TRANSACTION_FEE') ));
        // _dd(floor(request()->input('details.amt')/env('WITHDRAWAL_BOUNDARY_AMOUNT')));
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
        'page_details' => Auth::user()->load(['transactions' => function ($q) { $q->latest(); }, 'earnings'=> function ($q) { $q->with('user_game_session'); $q->latest(); }, 'games' => function ($q) { $q->latest(); },'referrals'=> function ($q) { $q->latest(); }])
      ];
    }

    public function getDashboardPageDetails() {

      if (Auth::user()->activeGames && session('GAME_STATE') != 'waiting') {
        session(['GAME_STATE' => 'paused']);
      }

      if ( optional(Auth::user()->activeGames)->ended_at != null && optional(Auth::user()->activeGames)->payment_status == 'unpaid') {
        session(['GAME_STATE' => 'waiting']);
      }

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

      if ( ! Hash::check(request()->input('details'), Auth::user()->password)) {
        return response()->json(['message' => 'Old password missmatch' ], 423);
      }

      return [
        'status' =>  true,
      ];
    }

    public function updateUserDetails(){

      // return request();
      $this->validate(request(), [
        'details.email' => 'required',
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
      // $rsp = TransactionalMail::resendVerificationMail();

      if (is_array($rsp)) {
        return response()->json(['message' => $rsp['message'] ], $rsp['status']);
      }
      else {
        return ['message' => $rsp];
      }
    }
}
