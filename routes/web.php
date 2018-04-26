<?php

use App\Game;
use App\User;
use App\Slide;
use App\Notice;
use App\Message;
use App\Package;
use App\NewsItem;
use App\CryptoSite;
use App\TeamMember;
use App\Confirmation;
use App\DemoQuestion;
use App\DemoGameSession;
use App\UserGameSession;

use Carbon\Carbon;

use App\Mail\TransactionalMail;

use App\Events\ExamJoined;

use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//
Route::middleware(['before'])->group( function () {

  Route::view('/', 'welcome')->name('home')->middleware('guest');

  // Route::get('/test', function () {
  //   return DB::table('user_game_sessions')->distinct('game_id')->toSql();
  //   return UserGameSession::select(DB::raw('count(*) as gamer_count, user_id'))->whereMonth('created_at', Carbon::now()->month)->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first();
  //   return UserGameSession::all()->keys();
  //   // $grouped = UserGameSession::all()->mapToGroups(function ($item, $key) {
  //   //     return [$item['game_id'] => $item];
  //   // });
  //
  //   return $grouped->toArray();
  // });

  // Route::view('/about', 'welcome');


  Route::post('/send-message', 'DashboardController@sendMessage')->name('contact');

  Route::get('/suspended', function(){
    if(Auth::user()->useraccstatus != 'suspended'){
      return redirect('dashboard');
    }
    return view('suspended');
  })->name('suspended')->middleware('auth');

  Route::get('/resend-verification-mail', function () {

    $status = TransactionalMail::resendRegistrationMail();

    // dd($status);

    if ($status === 0) {
      return back()->withErrors('Network Error! Try again.');
    }
    return back()->withErrors('Verification Mail Sent');
  })->name('verify.request');

  Route::get('/verify-user/{token}', function ($token) {

    $user = User::where('confirmation_token', $token)->first();

    if($user){
      $user->update([
        'confirmation_token' => null,
        'verified' => true
      ]);
      return view('verification_success', compact('user'));
    }

    // abort(404, 'Invalid verification code.');

  })->name('verify.check');

  Route::get('/register/ref/{referral_code}', function ($referral_code = '00000') {

    $refdetails = User::where('refcode', $referral_code)->first();

    // $refdetails = is_null($refdetails) ? collect(['email'=>null, 'id'=>null]) : $refdetails->only(['id', 'email']);

    $refdetails = is_null($refdetails) ? abort(410, 'User not found') : $refdetails->only(['id', 'email']);

    return view( 'welcome', compact('refdetails'));
  })->middleware('guest')->name('referral');

  Route::get('/register/success', function () {

    if (!session('NEW_REG')) {
      return redirect()->route('register');
    }

    session()->forget('NEW_REG');

    return view( 'auth.register-success');

  })->name('register.success');

  Auth::routes();

  Route::view('/register', 'welcome')->name('register')->middleware('guest');

  Route::view('/login', 'welcome')->name('login')->middleware('guest');

  Route::view('/demo-play', 'demo-play')->name('demo.play')->middleware('guest');

  Route::post('/get-deno-questions', function () {
    DemoGameSession::new();
    return [
              'user_questions' => DemoQuestion::inRandomOrder()->take(11)->get()
            ];
  });

  Route::post('/submit-demo-exam', function () {

    $exam = request()->input('details.answers');

    //loop through the answers and mark them and send to DB
    DB::beginTransaction();

    $total_stake = (env('GAME_CREDITS') - env('BASIC_PARTICIPATION_REWARD') - env('EXAM_PARTICIPATION_FEE')) * request()->input('details.total_examinees');

    //get max winners
    $max_winners = ceil(request()->input('details.total_examinees') / env('PERCENT_WINNERS'));

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

    $count = 0;
    foreach ($exam as $key => $value) {
      if (isset($value['answered_option']) && $value['answered_option'] == $value['correct_option']) {
        $count++;
      }
    }

    if ($count == 10) {
      DemoGameSession::where('session_id', session('demo_id'))->update([
        'score' => $count,
        'ended_at' => Carbon::now(),
        'position' => 1,
        'earning' => $user_earning = $firstprice + env('BASIC_PARTICIPATION_REWARD')
      ]);
    }

    else{
      DemoGameSession::where('session_id', session('demo_id'))->update([
        'score' => $count,
        'ended_at' => Carbon::now(),
        'earning' => $user_earning = env('BASIC_PARTICIPATION_REWARD')
      ]);
    }

    // generate users for the exam
    $f = new DatabaseSeeder;
    $f->call('DemoGameSessionsTableSeeder');

    DB::commit();

    return [
      'status' => true,
      'results'=> DemoGameSession::where('session_id', session('demo_id'))->get(),
      'user_earning' => $user_earning
    ];

  });

  Route::any('/end-demo-exam', function () {
    return 'demo ended';
  });

  Route::any('get-demo-exam-results', function () {
    return 'demo results';
  });



});

Route::group(['prefix' => 'user'], function () {
  Route::any('/get-game-state', 'DashboardController@getGameState');

  Route::post('/send-verification-mail', 'DashboardController@resendVerificationMail');
});

Route::group(['prefix' => 'user'], function () {

  Route::get('/get-api-key', 'DashboardController@getApiKey');

  Route::post('/get-total-earnings', 'DashboardController@getTotalEarnings');

  Route::post('/transfer-earnings', 'DashboardController@transferEarnings');

  Route::post('/get-user-details', 'DashboardController@getUserDetails');

  Route::post('/get-profile-page-details', 'DashboardController@getProfilePageDetails');

  Route::post('/get-dashboard-page-details', 'DashboardController@getDashboardPageDetails');

  Route::post('/make-deposit', 'DashboardController@makeDeposit');

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

  Route::post('/get-user-questions', 'DashboardController@getUserQuestions');

  Route::post('/mark-message-as-read', 'DashboardController@markMessageAsRead');

  Route::post('/delete-message', 'DashboardController@deleteMessage');

  Route::post('/mark-notice-as-read', 'DashboardController@markNoticeAsRead');

  Route::post('/delete-notice', 'DashboardController@deleteNotice');

});

Route::group(['prefix' => 'api'], function () {

  Route::post('/get-banks-list', function () {

    $string = file_get_contents("../resources/assets/js/banks.json");
    return $string;

    return [
      'bank_lists' => Slide::all(),
    ];

  });

  Route::get('/get-home-page-details', function () {

    return [
      'slides' => Slide::all(),
      'news_items' => NewsItem::all()->take(3),
      'team_members' => TeamMember::all()

    ];

  });

  Route::get('/get-about-page-details', function () {

    return [
      'team_members' => TeamMember::all()
    ];

  });

  Route::get('/get-crypto-page-details', function () {

    return [
      'crypto_sites' => CryptoSite::all()
    ];

  });

  Route::post('/contact-support', function () {

    return request()->input('details');

    return [
      'status' => Message::newGuestMessage()
    ];

  });

});

Route::group(['prefix' => 'api', 'middleware'=>'suspended'], function () {

    Route::post('/get-buy-package-page-details', function () {

      return [
        'packages' => Package::all()
      ];

    });

    Route::post('/user/payment-made', function () {

      DB::beginTransaction();

          Notice::paymentMade();
          Auth::user()->tracker = 'awaiting confirmation';
          Auth::user()->save();

          Confirmation::find(request()->input('details'))->update([
            'ghconfirmstatus' => 'awaiting confirmation'
          ]);

      DB::commit();
      return [
        'status' => true
      ];

    });

    Route::post('/user/delete-package', function () {

      // return request()->input('details');
          Confirmation::destroy(request()->input('details'));
      return [
        'status' => true
      ];

    });

    Route::post('/user/mark-as-read', function () {

      // return request()->input('details');
          Message::find(request()->input('details.id'))->update([
            'read' => true
          ]);
      return [
        'status' => true
      ];

    });

});

Route::group(['prefix' => env('ADMIN_ROUTE_PREFIX'), 'middleware'=>'suspended'], function () {

  $c = 'AdminController@';

  Route::group(['prefix' => 'api'], function () use($c) {

    Route::post('/get-dashboard-page-details', function () {});

    Route::post('/get-questions-page-details', $c.'getQuestionsPageDetails');

    Route::post('/get-profile-page-details', $c.'getProfilePageDetails');

    Route::post('/get-admins-page-details', $c.'getAdminsPageDetails');

    Route::post('/get-users-page-details', $c.'getUsersPageDetails');

    Route::post('/update-user-details', $c.'updateUserDetails');

    Route::post('/get-questions-page-details', $c.'getQuestionsPageDetails');

    Route::post('/edit-question', $c.'editQuestion');

    Route::post('/delete-question', $c.'deleteQuestion');

    Route::post('/create-question', $c.'createQuestion');

    Route::post('/edit-admin', $c.'editAdmin');

    Route::post('/delete-admin', $c.'deleteAdmin');

    Route::post('/create-admin', $c.'createAdmin');

    Route::post('/remove-admin', $c.'removeAdmin');

    Route::post('/get-live-game-session', $c.'getLiveGameSession');

    Route::post('/get-all-games', $c.'getAllGames');

    Route::post('/get-game-records', $c.'getGameRecords');

    Route::post('/get-logs-by-day', $c.'getLogsByDay');

    Route::post('/get-profile-page-details', $c.'confirmWithdrawal');

    Route::post('/get-all-transactions', $c.'getAllTransactions');

    Route::post('/create-transaction', $c.'createTransaction');

    Route::post('/mark-transaction-as-paid', $c.'markTransactionAsPaid');

    Route::post('/get-all-user-earnings', $c.'getAllUserEarnings');

    Route::post('/get-user-referrals', $c.'getUserReferrals');

    Route::post('/get-monthly-statistics', $c.'getMonthlyStatistics');

    Route::post('/get-daily-statistics', $c.'getDailyStatistics');

    Route::post('/send-broadcast', $c.'sendBroadcast');

    Route::post('/send-message', $c.'sendMessage');

    Route::post('/get-referrals-by-user', $c.'getReferralsByUser');

    Route::post('/edit-user', $c.'editUser');

    Route::post('/delete-user', $c.'deleteUser');

    Route::post('/suspend-user', $c.'suspendUser');

    Route::post('/verify-user', $c.'verifyUser');

    Route::post('/get-all-messages', $c.'getAllMessages');

    Route::post('/reply-message', $c.'replyMessage');

    Route::post('/mark-message-as-read', $c.'markMessageAsRead');

    Route::post('/delete-message', $c.'deleteMessage');


    Route::post('/get-all-users-earnings', $c.'getAllUsersEarnings');

    Route::post('/get-all-admin-earnings', $c.'getAllAdminEarnings');

    Route::post('/get-all-user-earnings', $c.'getAllUserEarnings');

    Route::post('/get-all-game-earnings', $c.'getAllGameEarnings');

  });

  Route::get('/{subcat?}', $c.'showDashboard')->where('subcat', '(.*)')->name('admin');

});

Route::view('/dashboard/{subcat?}', 'dashboard')->where('subcat', '(.*)')->name('dashboard')->middleware('auth', 'suspended', 'before');
