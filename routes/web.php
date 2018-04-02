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

  Route::view('/', 'welcome')->name('home');

  Route::get('/test', function () {

    //use the game id to retrieve all theuser game sessions ordered by ended_at
    $exam_records = UserGameSession::where('game_id', 75)->oldest('ended_at')->get();

    //count hom many they are.
    $total_examinees = $exam_records->count();

    event(new ExamJoined($total_examinees));

    return view('welcome');
    // Redis::set('name', 'Taylor');
    // return dd(Redis::get('name'));
    // return 'hello';
  });

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

Route::middleware(['before'])->group( function () {

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
  // Route::get('/ref/{referral_code}', function ($referral_code = '00000') {
  //
  //   $refdetails = User::where('username', $referral_code)->first();
  //
  //   $refdetails = is_null($refdetails) ? collect([]) : $refdetails->only(['id', 'username', 'email']);
  //
  //   return view( 'auth.register', compact('refdetails'));
  // })->middleware('guest');

  Auth::routes();

  Route::view('/register', 'welcome')->name('register');

  Route::view('/login', 'welcome')->name('login');

});

Route::group(['prefix' => 'coded', 'middleware'=>'suspended'], function () {

  $c = 'AdminController@';

  Route::group(['prefix' => 'api'], function () use($c) {

    Route::post('/get-dashboard-page-details', $c.'getDashboardPageDetails');

    Route::post('/get-profile-page-details', $c.'getProfilePageDetails');

    Route::post('/get-view-packages-page-details', $c.'getViewPackagesPageDetails');

    Route::post('/update-user-details', $c.'updateUserDetails');

    Route::post('/get-all-users-details', $c.'getAllUsersDetails');

    Route::get('/delete-user/{user}', $c.'deleteUser');

    Route::get('/suspend-user/{user}', $c.'suspendUser');

    Route::post('/admin-send-message', $c.'adminSendMessage');

    Route::post('/admin-send-broadcast', $c.'adminSendBroadcast');

    Route::post('/get-all-donations', $c.'getAllDonations');

    Route::post('/get-admin-messages', $c.'getAdminMessages');

    Route::get('/delete-message/{message}', $c.'deleteMessage');

    Route::get('/seen-message/{message}', $c.'seenMessage');

    Route::post('/create-admin-account', $c.'createAdminAccount');

    Route::post('/get-admin-accounts', $c.'getAdminAccounts');

    Route::post('/gh-admin-account', $c.'ghAdminAccount');

    Route::get('/delete-admin-account/{admin}', $c.'deleteAdminAcc');

    Route::post('/admin-confirm-donation/{donation}', $c.'confirmDonation');

    Route::post('/admin-paid-donation/{donation}', $c.'paidDonation');

    Route::post('/admin-delete-package', $c.'deletePackage');

    Route::post('/admin-edit-package', $c.'editPackage');

    Route::post('/create-news-item', $c.'createNewsItem');

    Route::post('/get-news-items', $c.'getNewsItems');

    Route::get('/delete-news-item/{news}', $c.'deleteNewsItems');

    Route::post('/edit-news-item', $c.'editNewsItem');

    Route::post('/get-team-members', $c.'getTeamMembers');

    Route::get('/delete-team-member/{member}', $c.'deleteTeamMember');

    Route::post('/edit-team-member', $c.'editTeamMember');

    Route::post('/create-team-member', $c.'createTeamMember');

    Route::post('/get-crypto-sites', $c.'getCryptoSites');

    Route::get('/delete-crypto-site/{site}', $c.'deleteCryptoSite');

    Route::post('/edit-crypto-site', $c.'editCryptoSite');

    Route::post('/create-crypto-site', $c.'createCryptoSite');


  });

  Route::get('/{subcat?}', $c.'showDashboard')->where('subcat', '(.*)')->name('admin');

});

Route::view('/dashboard/{subcat?}', 'dashboard')->where('subcat', '(.*)')->name('dashboard')->middleware('auth', 'suspended');

// //
// // This is the section for admin routes
// //
// //
//
// // Admin Alpha
// Route::get('/admin', 'AdminSessionsController@index')->middleware('guest');
//
// // Admin sessions controller
// Route::post('/admin_login', 'AdminSessionsController@adminLogin');
//
// // Register Admin Controller
// Route::get('/admin_dashboard', 'AdminController@showAdminDashboard');
// Route::get('/reg_admin', 'AdminController@showRegisterAdmin');
// Route::post('/reg_admin', 'AdminController@registerAdmin');
//
// // Questions Controller
// Route::get('/question', 'QuestionController@index');
// Route::get('/create_question', 'QuestionController@showCreateQuestion');
// Route::post('/create_question', 'QuestionController@createQuestion');
