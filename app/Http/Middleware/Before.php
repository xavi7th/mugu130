<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Session;
use DB;
use App\Game;

class Before
{
	/**
	 * Custom methods that I set to run before the request hits my app.
	 *
	 * @var array
	 */

	public function handle($request, Closure $next)
	{

		// dd(env('GAME_CYCLE') == 5);
		// dd(Carbon::now()->gte(Carbon::parse('17:00:00')) && Carbon::now()->lte(Carbon::parse('17:10:59')));


		// 2 Mins timer
		if (env('GAME_CYCLE') == 2) {

			if ((Carbon::now()->minute % 2 == 0)) {
				// Bypass the cache ONLY within the first 10secs
				if (Carbon::now()->minute % 2 == 0 && Carbon::now()->second <= 10) {
					if (!Game::active(false)) {
						Game::new();
						session(['GAME_STATE' => 'active']);
					}
				} else {
					if (!Game::active()) {
						Game::new();
						session(['GAME_STATE' => 'active']);
					}
				}

				if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting') {
					session(['GAME_STATE' => 'active']);
				}
				session(['GAME_TIMER' => 60 - Carbon::now()->second]);
			} else {

				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {
					if (Game::active()) {
						Game::end();
						Session::forget('GAME_ACTIVE');
					}
				};
				session(['GAME_STATE' => 'loading']);
				session(['GAME_TIMER' => 60 - Carbon::now()->second]);
			}
		} elseif (env('GAME_CYCLE') == 5) {

			// 5 mins timer
			if ((Carbon::now()->minute % 10 > 4)) {
				// if ( (Carbon::now()->minute%10 <= 4) ) {

				// Bypass the cache ONLY within the first 10secs
				if (Carbon::now()->minute % 10 > 4 && Carbon::now()->second <= 10) {
					// if (Carbon::now()->minute%10 <= 4 && Carbon::now()->second <= 10) {
					if (!Game::active(false)) {
						Game::new();
						session(['GAME_STATE' => 'active']);
					}
				} else {
					if (!Game::active()) {
						Game::new();
						session(['GAME_STATE' => 'active']);
					}
				}

				if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting') {
					session(['GAME_STATE' => 'active']);
				}
				session(['GAME_TIMER' => 60 - Carbon::now()->second + (60 * (4 - Carbon::now()->minute % 5))]);
			} else {
				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {
					if (Game::active()) {
						Game::end();
						Session::forget('GAME_ACTIVE');
					}
				};
				if (Game::active()) {
					Game::end();

					Session::forget('GAME_ACTIVE');
				}
				session(['GAME_STATE' => 'loading']);

				session(['GAME_TIMER' => 60 - Carbon::now()->second + (60 * (4 - Carbon::now()->minute % 5))]);
			}
		} elseif (env('GAME_CYCLE') == 10) {



			// Normal Game timer
			if ((Carbon::now()->minute >= 0 && Carbon::now()->minute <= 9) || (Carbon::now()->minute >= 30 && Carbon::now()->minute <= 39)) {
				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {

					// Bypass the cache ONLY within the first 10secs
					if (Carbon::now()->minute == 0 && Carbon::now()->second <= 10) {
						if (!Game::active(false)) {
							Game::new();
							session(['GAME_STATE' => 'active']);
						}
					} else {
						if (!Game::active()) {
							Game::new();
							session(['GAME_STATE' => 'active']);
						}
					}
				};


				if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting') {
					session(['GAME_STATE' => 'active']);
				}

				if ((Carbon::now()->minute >= 0 && Carbon::now()->minute <= 9)) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 9, 59))]);
				} else if (Carbon::now()->minute >= 30 && Carbon::now()->minute <= 39) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 39, 59))]);
				}
			} else {
				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {
					if (Game::active()) {
						Game::end();
						Session::forget('GAME_ACTIVE');
					}
				};

				session(['GAME_STATE' => 'loading']);

				if ((Carbon::now()->minute >= 10 && Carbon::now()->minute <= 29)) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 29, 59))]);
				} else if (Carbon::now()->minute >= 40 && Carbon::now()->minute <= 59) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 59, 59))]);
				}
			}
		} else {

			if (Carbon::now()->gte(Carbon::parse('17:00:00')) && Carbon::now()->lt(Carbon::parse('17:10')) || Carbon::now()->gte(Carbon::parse('21:00:00')) && Carbon::now()->lt(Carbon::parse('21:10'))) {

				/**
				 * Game time
				 * Set the countdoen timer to 10 mins
				 */
				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {

					// Bypass the cache ONLY within the first 10secs
					if (Carbon::now()->minute == 0 && Carbon::now()->second <= 10) {
						if (!Game::active(false)) {
							Game::new();
							session(['GAME_STATE' => 'active']);
						}
					} else {
						if (!Game::active()) {
							Game::new();
							session(['GAME_STATE' => 'active']);
						}
					}
				};


				if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting') {
					session(['GAME_STATE' => 'active']);
				}

				if ((Carbon::now()->minute >= 0 && Carbon::now()->minute <= 9)) {
					/**
					 * Set the timer between now and the 10mins marker for the end of the exam
					 */
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 9, 59))]);
				}
			} else {

				/**
				 * Not game time.
				 * Set the count down timer till the next game
				 */

				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {
					if (Game::active()) {
						Game::end();
						Session::forget('GAME_ACTIVE');
					}
				};

				session(['GAME_STATE' => 'loading']);

				if ((Carbon::now()->gte(Carbon::parse('17:10:00')) && Carbon::now()->lt(Carbon::parse('21:00:00')))) {
					/**
					 * Set the time between 5:10pm and 9:00pm
					 */
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(20, 59, 59))]);
				} else if (Carbon::now()->lt(Carbon::parse('17:00:00'))) {
					/**
					 * Set the time between 00:00am and 5pm
					 */
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(16, 59, 59))]);
				} else if (Carbon::now()->gte(Carbon::parse('21:10:00'))) {
					/**
					 * Set the time between 9:10pm and 5:00pm tomorrow
					 */
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::parse('tomorrow')->addHours(17))]);
				}
			}
		}

		//Redirect to secure
		if (App::environment('production') && !$request->secure()) {
			return redirect()->secure($request->path());
		}

		return $next($request);
	}
}
