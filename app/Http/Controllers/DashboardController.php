<?php

namespace App\Http\Controllers;

use Paystack;
use PaystackCharge;

use App\Game;
use App\User;
use App\Role;
use App\Notice;
use App\Earning;
use App\Message;
use App\Transaction;
use App\UserQuestion;
use App\UserGameSession;
use App\PaystackWebhook;

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

    /**
     * User DAshboard routes
     *
     * The normal HTTP routes for the user's dashboard`
     *
     * @return return type
     */
    public static function routes(){
      Route::get('/dashboard/game-play', function () {
        return redirect('/dashboard');
      });

      Route::get('/dashboard/display-results', function () {
        return redirect('/dashboard');
      });

      Route::post('/dashboard/save-order-and-pay', function () {

        /***** THE PaystackCharge file is in my models and autoloaded by composer files option in composer.json  *******/
        // you can configure to use default charge (1.5% with a additional 100ngn if above 2500)
        // or a negotiated charge
        $pc = new PaystackCharge(0.017, 10000, 250000, 1000000000); // 1.5% with a additional 100ngn if above 2500ngn - 10Mngn charge cap (essentially infinite)
        $amount = $pc->add_for_kobo(request('amount')) . "\n";

        DB::beginTransaction();

          //create deposit transcation record
          $transaction =  Auth::user()->transactions()->create([
              'amount' => request('amount') / 100,
              'charges' => (intval($amount) - intval(request('amount')) / 100),
              'trans_type' => 'wallet funding',
              'status' => 'pending',
              'ref_no' => 'PAYSTACK-'.str_random(22)
            ]);


        // Get this from https://github.com/yabacon/paystack-class
        // The PAYSTACK CLASS IS IN MY MODELS and autlooaded with files object in composer.json

        $paystack = new Paystack(env('PAYSTACK_SECRET_KEY'));

        //Initialise a call to paystack to authorize the payment. Sample response below
        /*

            Array[1][
              {
                "status": true,
                "message": "Authorization URL created",
                "data": {
                  "authorization_url": "https://checkout.paystack.com/exqcbnbjltzfdyz",
                  "access_code": "exqcbnbjltzfdyz",
                  "reference": "t69t891pmp"
                }
              }
            ]

        */
        // the code below throws an exception if there was a problem completing the request,
        // else returns an object created from the json response
        try {
          $trx = $paystack->transaction->initialize(
            [
              'amount' => $amount,
              'email' => Auth::user()->email,
              'reference' => $transaction->ref_no,
              'callback_url' => route('verify-paystack-transaction'),
              'metadata' => json_encode([
                'transaction_id' => $transaction->id,
                'ref_no' => $transaction->ref_no,
                'user_id' => Auth::user()->id,
                'amount_to_credit_user' => intval(request('amount')),
                'amount_the_user_was_charged' => (intval($amount) - intval(request('amount'))),
                'custom_fields' => [ // to be displayed on paystack transaction page and paystack email.
                                      [
                                        'display_name' => "User Details",
                                        'variable_name' => "user_details",
                                        'value' => Auth::user()->firstname . ' ' . Auth::user()->lastname . ': ' . Auth::user()->phone1
                                      ],
                                      [
                                        'display_name' => "User's Amount",
                                        'variable_name' => "user_amount",
                                        'value' => '₦'.(number_format((intval(request('amount')) / 100), 2))
                                      ],
                                      [
                                        'display_name' => "Client Charged",
                                        'variable_name' => "fees",
                                        'value' => '₦'.((intval($amount) - intval(request('amount'))) / 100)
                                      ]
                                ]
              ])
            ]
          );
        }
        catch (\Exception $e) {
          if ($e->getCode() == 0) {
            abort(203, 'There was a problem connecting to the payment gateway. Try again later.');
          }
        }

        // status should be true if there was a successful call
        if(!$trx->status){
          abort(502, 'A node in the communication replied with '. $trx->message . '. Please try again.');
        }

        //Since the transaction has been authorised, commit the trasnaction record
        DB::commit();

        // full sample initialize response is here: https://developers.paystack.co/docs/initialize-a-transaction
        // An authorsied URL where this transaction will be processed. The paystack form for the user to enter his details is at this URL.
        // This is a sample of the URL "https://checkout.paystack.com/exqcbnbjltzfdyz",
        // From this URL, paystack sends a JSON data for events, posted to your webhook url when a transaction is successful
        // on your account in the webhook's domain. Your webhook has to be a publicly available url which doesn't redirect.
        // The webhook URL is where you handle the charge.sucess event

        // return $trx->data->authorization_url;
        // Get the user to click link to start payment or simply redirect to the url generated

        session(['activeTransaction' => true]);

        return redirect($trx->data->authorization_url);

      })->middleware('auth', 'suspended', 'before', 'users');

      Route::any('/dashboard/paystack-web-hook', function () {

        // Retrieve the request's body
        $body = @file_get_contents("php://input");
        $signature = (isset($_SERVER['HTTP_X_PAYSTACK_SIGNATURE']) ? $_SERVER['HTTP_X_PAYSTACK_SIGNATURE'] : '');

        PaystackWebhook::create([
          'signature' => $signature,
          'body' => $body
        ]);


        exit;


        /* It is a good idea to log all events received. Add code *
         * here to log the signature and body to db or file       */

        if (!$signature) {
            // only a post with paystack signature header gets our attention
            exit();
        }

        define('PAYSTACK_SECRET_KEY','sk_xxxx_xxxxxx');
        // confirm the event's signature
        if( $signature !== hash_hmac('sha512', $body, PAYSTACK_SECRET_KEY) ){
          // silently forget this ever happened
          exit();
        }

        http_response_code(200);
        // parse event (which is json string) as object
        // Give value to your customer but don't give any output
        // Remember that this is a call from Paystack's servers and
        // Your customer is not seeing the response here at all
        $event = json_decode($body);
        switch($event->event){
            // charge.success
            case 'charge.success':
                // TIP: you may still verify the transaction
            		// before giving value.
                /*
                  {
                    "event": "charge.success",
                    "data": {
                      "id": 748541,
                      "domain": "test",
                      "status": "success",
                      "reference": "87pfjx9yjj",
                      "amount": 67800,
                      "message": null,
                      "gateway_response": "Successful",
                      "paid_at": "2017-02-09T17:36:15.000Z",
                      "created_at": "2017-02-09T17:35:48.000Z",
                      "channel": "card",
                      "currency": "NGN",
                      "ip_address": "154.118.45.106",
                      "metadata": {},
                      "log": null,
                      "fees": null,
                      "fees_split": null,
                      "customer": {
                        "id": 181336,
                        "first_name": null,
                        "last_name": null,
                        "email": "support@paystack.com",
                        "customer_code": "CUS_dw5posshfd1i5uj",
                        "phone": null,
                        "metadata": null,
                        "risk_action": "default"
                      },
                      "authorization": {
                        "authorization_code": "AUTH_z7k6ysdd",
                        "bin": "412345",
                        "last4": "1381",
                        "exp_month": "01",
                        "exp_year": "2020",
                        "channel": "card",
                        "card_type": "visa visa",
                        "bank": "TEST BANK",
                        "country_code": "NG",
                        "brand": "visa",
                        "reusable": true
                      },
                      "plan": {
                        "id": 2511,
                        "name": "bleh",
                        "plan_code": "PLN_3g5vcz2c1pkc4n0",
                        "description": null,
                        "amount": 67800,
                        "interval": "hourly",
                        "send_invoices": true,
                        "send_sms": true,
                        "currency": "NGN"
                      },
                      "subaccount": {

                      },
                      "paidAt": "2017-02-09T17:36:15.000Z"
                    }
                  }

                */
                break;
        }
        exit();

      });

      Route::get('/dashboard/verify-wallet-funding-transaction', function () {

        // Confirm that reference has not already gotten value
        // This would have happened most times if you handle the charge.success event.
        // If it has already gotten value by your records, you may call
        // perform_success()

        $paystack = new Paystack(env('PAYSTACK_SECRET_KEY'));

        // the code below throws an exception if there was a problem completing the request,
        // else returns an object created from the json response
        $trx = $paystack->transaction->verify(
        	[
        	 'reference'=>$_GET['reference']
        	]
        );

        //Save the reansaction details from Paystack whether positive or negative
        Transaction::find($trx->data->metadata->transaction_id)->update([
          'paystack_response' => json_encode($trx)
        ]);

        // status should be true if there was a successful call
        if(!$trx->status){
            abort(502, 'A node in the communication replied with '. $trx->message . '. Please try again.');
        }

        // full sample verify response is here: https://developers.paystack.co/docs/verifying-transactions
        if('success' == $trx->data->status){
        	//TODO: Maybe use trx info including metadata and a session info to confirm that cartid
          // matches the one for which we accepted payment
          try {
            DB::beginTransaction();
              Transaction::find($trx->data->metadata->transaction_id)->update([
                'status' => 'completed'
              ]);
              Auth::user()->creditAccount(($trx->data->metadata->amount_to_credit_user)/100);
            DB::commit();

            $rsp = TransactionalMail::sendCreditMail(($trx->data->amount/100), ($trx->data->metadata->amount_the_user_was_charged/100), 'wallet funding', Auth::user()->available_units);
            if (is_array($rsp)) {
              // If response is an array it means Mail not sent
              // Handle it somehow
              // return response()->json(['message' => $rsp['message'] ], $rsp['status']);
            }

          }
          catch (\Exception $e) {
            //Send the admin an error message that someone trien to perform an operationa nd there was an error

            //send the user a notification that something went wrong but support has been notified
          }

          return redirect()->route('wallet-funding-successful');
          exit();
        }

        abort(502, 'A node in the encountered an error. Please try again.');

      })->name('verify-paystack-transaction');

      Route::get('/dashboard/order-successful', function () {

        if (session('activeTransaction')) {
          session()->forget('activeTransaction');
          return view('dashboard');
        }
        else{
          return redirect()->route('dashboard');
        }

      })->name('wallet-funding-successful');

      Route::view('/dashboard/{subcat?}', 'dashboard')->where('subcat', '(.*)')->name('dashboard')->middleware('auth', 'suspended', 'before', 'users');

    }

    public static function API_Routes(){

      Route::any('/get-game-state', 'DashboardController@getGameState');

      Route::post('/send-verification-mail', 'DashboardController@resendVerificationMail');

      Route::post('/get-withdrawal-instructions-data', function () {
        if (is_null(request()->input('details.id'))) {
          return [
                    'amount' => Auth::user()->withdrawals_today()->latest()->first(['amount'])['amount'],
                    'total_amount' => Auth::user()->total_withdrawals,
                    'time_joined' => Auth::user()->created_at->diffForHumans(),
                    'refcode' => Auth::user()->refcode,
                  ];

        }
        else{
          return [
                    'amount' => Transaction::find(request()->input('details.id'))['amount'],
                    'total_amount' => Auth::user()->total_withdrawals,
                    'time_joined' => Auth::user()->created_at->diffForHumans(),
                    'refcode' => Auth::user()->refcode,
                  ];
        }
      });

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

      Route::get('/get-all-agents', function () {
        return  DB::table('users')->where('role_id', Role::agent_id())
                    ->get(['id', 'phone1', 'acct_no', 'acct_type', 'firstname', 'lastname']);
      });
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

        if (Auth::user()->isAdmin()) {
          $earnings = Earning::where('user_id', Role::admin_id())->where('transferred', 0)->sum('amount');
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

    public function requestWithdrawal(){

      return [now()->endOfDay()];

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
