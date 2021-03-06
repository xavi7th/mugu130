<?php

use App\Game;
use App\User;
use App\Slide;
use App\Notice;
use App\Message;
use App\Package;
use App\Earning;
use App\NewsItem;
use App\CryptoSite;
use App\TeamMember;
use App\Confirmation;
use App\DemoQuestion;
use App\DemoGameSession;
use App\UserGameSession;

use Carbon\Carbon;

use App\Mail\ActivationMail;
use App\Mail\AccountCredited;
use App\Mail\TransactionalMail;

use App\Events\ExamJoined;
use App\Transaction;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\DashboardController;
use App\GeneratedError;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;


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

// abort(404, 'User not found');
Route::middleware(['before'])->group(function () {

	Route::view('/', 'welcome')->name('home')->middleware('guest');

	Route::get('/test', function () {
		if (App::environment('local')) {

        // $user = Auth::user();
        // $mail_page = (new ActivationMail(8779, $user))->render();
        // return dd($mail_page); //->render();
        // exit;

        // Agent::mobile();

        // return csrf_token();
        // abort(404);
            // return TransactionalMail::sendWelcomeMail('James', 'xavi7th@yahoo.co.uk');
            // return  redirect( Storage::disk('browser_view')->url('privacy.pdf'));
			$token = 2;
			return view('auth.passwords.reset', compact('token'));

        // return dd(view('demo-play')->render());
        // return view('suspended', compact('user'));
        // return (new ReactivationMail())->render();
        // return Redis::keys('*');
        // Redis::set('demo-page', view('demo-play')->render());
        // Redis::pipeline(function ($pipe) {
        //     for ($i = 0; $i < 1000; $i++) {
        //         $pipe->set("key:$i", $i);
        //     }
        // });
        // return Redis::get('demo-page');
			return ['status' => Redis::get('demo-page')];

			try {
				Mail::to('xavi7th@gmail.com')->queue(new ReactivationMail());
			} catch (\Swift_TransportException $e) {
				return ['status' => $e->getMessage()];
			}


			if (count(Mail::failures()) > 0) {
				return [
					'status' => 422,
					'message' => 'Error sending mail'
				];
			}
		} else {
			$target = '/home/cresawjb/playground.fastplay24.com/storage/app/public/';
			$shortcut = '/home/cresawjb/playground.fastplay24.com/public/storage';
			$result = symlink($target, $shortcut);

			return [$result];
		}
	});

	Route::view('/lasisi', 'video-preview')->name('vid-preview');

	Route::view('/frequently-asked-questions', 'others-home')->name('faq');

	Route::view('/support-center', 'others-home')->name('support');

	Route::any('/calculator', function () {
    // dd(request()->method());

		if (request()->method() == 'POST') {
      # code...
			$rules = [
				'nop' => 'required|numeric',
			];

			$validator = Validator::make(request()->all(), $rules);

			if ($validator->fails()) {
				return redirect()->route('calculator')->withInput()->withErrors($validator->messages());
			}

			$total_players = request('nop');
			return view('calculator', compact('total_players'));

		}
		return view('calculator');
	})->name('calculator');

	Route::get('/top-100-winners', function () {
		$top100 = UserGameSession::groupBy('user_id')->orderBy('user_earnings', 'desc')
			->select(
				'user_id',
				DB::raw('count(user_id) as games_count'),
				DB::raw('sum(earning) as user_earnings')
			)
			->get()->take(100)->load(['userWithTrashed']);
		return view('top-100', compact('top100'));
	})->name('top-100');

	Route::get('/privacy', function () {
		return view('others-home');
		return response()->file('storage/privacy.pdf');
		return download_file('privacy.pdf', env('PRIVACY_FILE_NAME'));
	})->name('privacy');

	Route::get('/download-image', function () {
		return download_file($filename = 'instagram-post.jpg', $name_to_download_as = 'fastplay24-instagram-post.jpg');
	});

	Route::get('/terms-and-conditions', function () {
		return view('others-home');
		return view_file_in_browser('terms.pdf');
    // return download_file('terms.pdf', env('TERMS_FILE_NAME'));
	})->name('terms');

	Route::post('/send-message', 'DashboardController@sendMessage')->name('contact');

	Route::get('/suspended', function () {
		if (Auth::user()->useraccstatus != 'suspended') {
			return redirect('dashboard');
		}
		return view('suspended');
	})->name('suspended')->middleware('auth');

	Route::get('/register/ref/{referral_code}', function ($referral_code = '00000') {

		$refdetails = User::where('refcode', $referral_code)->first();

    // $refdetails = is_null($refdetails) ? collect(['email'=>null, 'id'=>null]) : $refdetails->only(['id', 'email']);

		$refdetails = is_null($refdetails) ? abort(410, 'User not found') : $refdetails->only(['id', 'email']);

		return view('welcome', compact('refdetails'));
	})->middleware('guest')->name('referral');

	Route::get('/register/success', function () {

		if (!session('NEW_USER')) {
			return redirect()->route('register');
		}

		session()->forget('NEW_USER');

		return view('auth.register-success');

	})->name('register.success');

	Route::post('/log-error', function () {
		GeneratedError::create([
			'generated_error' => json_encode(request()->all()),
		]);
	})->name('log-error');

	Auth::routes();

	Route::get('/resend-verification-mail', function () {

		$rsp = TransactionalMail::resendRegistrationMail();

		if (is_array($rsp)) {
			return response()->json(['message' => $rsp['message']], $rsp['status']);
		} else {
			return ['message' => $rsp];
		}


	})->name('verify.request');

	Route::get('/verify-user/{token}', function ($token) {

		$user = User::where('confirmation_token', $token)->first();

		if ($user) {

			$user->confirmation_token = null;
			$user->verified = true;
			$user->save();

			$rsp = TransactionalMail::sendWelcomeMail($user->firstname, $user->email);

			return view('verification_success', compact('user'));
		}

		abort(404, 'Invalid verification code.');

	})->name('verify.check');

	Route::view('/register', 'welcome')->name('register')->middleware('guest');

	Route::view('/login', 'welcome')->name('login')->middleware('guest');

	Route::view('/demo-play', 'demo-play')->name('demo.play')->middleware('guest');

	Route::post('/get-deno-questions', function () {
		DemoGameSession::new();
		return [
			'user_questions' => DemoQuestion::inRandomOrder()->take(11)->get()
		];
	});

	Route::any('/submit-demo-exam', function () {

		// return User::has('games', '>=', 20)->withCount(['games' => function ($q) {
		// 	$q->whereMonth('created_at', '=', date('m'));
		// }])->orderBy('games_count', 'DESC')->with(['games' => function ($q) {
		// 	$q->select(['id','created_at', 'user_id']);
		// 	$q->whereMonth('created_at', '=', date('m'));
		// }])->take(10)->get(['id','games', 'games_count']);
		// return User::has('games', '>', 20)->withCount('games')->orderBy('games_count')->take(10)->get();

		$exam = request()->input('details.answers');

    //loop through the answers and mark them and send to DB
		DB::beginTransaction();

		$total_stake = (env('GAME_CREDITS') - env('BASIC_PARTICIPATION_REWARD') - env('EXAM_PARTICIPATION_FEE')) * request()->input('details.total_examinees');

        //get max winners
		$max_winners = ceil(request()->input('details.total_examinees') / env('PERCENT_WINNERS'));

        //get the amount of first price
		$sum = 0;
		for ($i = 0; $i < $max_winners; $i++) {
          //Given a GP with CR the members of the series are x, pow(CR,1)x, pow(CR, 2)x ... pow(CR, n)x.
          // The first term is given by the sum of the n-members of the series divided by the sum of all their coefficients
          //This portion calculates the sum of all the coefficients
			$sum += (pow(1.06381, $i));
			$dd[] = $sum;
		}


        // This portion gets the last member (which will be the amount to give to the highest scorer) of the series fron the firstmember using the formula
        // nth-member = pow(CR, n-1) * firstmember
		$firstprice = ($total_stake / $sum) * (pow(1.06381, $max_winners - 1));

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
				'earning' => $user_earning = floor($firstprice) + env('BASIC_PARTICIPATION_REWARD')
			]);

		} else {
			DemoGameSession::where('session_id', session('demo_id'))->update([
				'score' => $count,
				'ended_at' => Carbon::now(),
				'earning' => $user_earning = env('BASIC_PARTICIPATION_REWARD'),
				'position' => $max_winners + 1
			]);

		}
		DB::commit();

		$results = DemoGameSession::where('session_id', session('demo_id'))->get();
		// $results = $results->concat(generateDemoUsers($firstprice, $max_winners, $count == 10));

		return [
			'status' => true,
			'results' => $results,
			'user_earning' => $user_earning,
			'total_players' => request()->input('details.total_examinees'),
			'max_winners' => $max_winners,
			'total_prize_money' => $total_stake,
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

	DashboardController::API_Routes();

});

Route::group(['prefix' => 'api'], function () {
	Route::post('/get-banks-list', function () {

		$string = file_get_contents("../resources/assets/js/banks.json");
		return $string;

	});

	Route::get('/get-home-page-details', function () {

		return [
			'total_games_played' => Game::validGamesCount(),
			'total_num_of_users' => User::count(),
			'total_user_earnings' => Earning::totalUserEarnings(),
			'top_three_earners' => UserGameSession::groupBy('user_id')->orderBy('user_earnings', 'desc')->select('user_id', DB::raw('count(user_id) as games_count'), DB::raw('sum(earning) as user_earnings'))->get()->take(5)->load(['user']),
		];

	});

	Route::post('/contact-support', function () {

		return request()->input('details');

		return [
			'status' => Message::newGuestMessage()
		];

	});

});

Route::group(['prefix' => 'api', 'middleware' => 'suspended'], function () {

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

Route::group(['prefix' => env('ADMIN_ROUTE_PREFIX'), 'middleware' => 'suspended'], function () {

	AdminController::routes();

});

DashboardController::routes();
