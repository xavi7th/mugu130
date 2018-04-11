<?php
use App\Notice;
use App\Slide;
use App\Package;
use App\Message;
use App\NewsItem;
use App\TeamMember;
use App\CryptoSite;
use App\Confirmation;
use App\Mail\TransactionalMail;
use App\User;
use App\Game;
use App\Events\ExamJoined;
use App\UserGameSession;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

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

  Route::view('/contact', 'welcome');

  Route::view('/about', 'welcome');

  Route::view('/faq', 'welcome');

  Route::view('/suspended', 'suspended')->name('suspended')->middleware('auth','verified');

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

  //
  // Route::get('/register/{referral_code?}', function ($referral_code = null) {
  //
  //   $refdetails = User::where('username', $referral_code)->first();
  //
  //   $refdetails = is_null($refdetails) ? collect([]) : $refdetails->only(['id', 'username', 'email']);
  //
  //   return view( 'auth.register', compact('refdetails'));
  // })->middleware('guest');
  //
  Route::get('/ref/{referral_code}', function ($referral_code = '00000') {

    $refdetails = User::where('refcode', $referral_code)->first();

    // $refdetails = is_null($refdetails) ? collect(['email'=>null, 'id'=>null]) : $refdetails->only(['id', 'email']);

    $refdetails = is_null($refdetails) ? abort(404) : $refdetails->only(['id', 'email']);

    return view( 'welcome', compact('refdetails'));
  })->middleware('guest')->name('referral');

  Auth::routes();

  Route::view('/register', 'welcome')->name('register');

  Route::view('/login', 'welcome')->name('login');

});

Route::group(['prefix' => 'user', 'middleware'=>'suspended'], function () {

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

  Route::post('/update-user-details', 'DashboardController@updateUserDetails');

  Route::any('/get-game-state', 'DashboardController@getGameState');

  Route::post('/join-game', 'DashboardController@joinGame');

  Route::post('/resume-game', 'DashboardController@resumeGame');

  Route::post('/submit-exam', 'DashboardController@submitExam');

  Route::any('/end-exam', 'DashboardController@endExam');

  Route::any('get-exam-results', 'DashboardController@getExamResults');

  Route::post('/get-user-questions', 'DashboardController@getUserQuestions');

  Route::post('/send-message', 'DashboardController@sendMessage');

  Route::post('/mark-message-as-read', 'DashboardController@markMessageAsRead');

  Route::post('/delete-message', 'DashboardController@deleteMessage');

  Route::post('/mark-notice-as-read', 'DashboardController@markNoticeAsRead');

  Route::post('/delete-notice', 'DashboardController@deleteNotice');

  // Route::post('/request-bonus', 'DashboardController@requestBonus');

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

    Route::post('/get-dashboard-page-details', $c.'getDashboardPageDetails');

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
