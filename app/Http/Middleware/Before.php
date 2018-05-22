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

			// dd(fopen('lock', 'w'));
			// $f = fopen('lock', 'w') or die('Cant open file');
			// if (flock($f, LOCK_EX | LOCK_NB)) {
			// 	echo "yay";
			// 	sleep(10);
			// };

			// $semaphore = sem_get( intval(env('SEMAPHORE_KEY')),  intval(env('SEMAPHORE_MAX_ACQUIRE')),  env('SEMAPHORE_PERMISSIONS'),  env('SEMAPHORE_AUTORELEASE'));
			// $semaphore = sem_get( 123456,  1);
			// if (sem_acquire($semaphore, 1) !== false) {
			// 	if ( Game::active() ) {
			// 		Game::end();
			// 		Session::forget('GAME_ACTIVE');
			// 	}
			// 	sem_release($semaphore);
			// 	sem_remove($semaphore);
			// }

			// exit;
			// Session::forget('GAME_ACTIVE');
			//  _dd( Hash::check('pass.', Auth::user()->password) );
			// Game::new();
			// Game::end();

			// if ( (Carbon::now()->minute%2 == 0) ) {
			// 	if ( !Game::active() ) {
			// 		Game::new();
			// 		session(['GAME_STATE' => 'active']);
			// 	}
			// 	if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting' ) {
			// 		session(['GAME_STATE' => 'active']);
			// 	}
			// 	session(['GAME_TIMER' => 60 - Carbon::now()->second ]);
			//
			// } else {
			//
			// 	$f = fopen('lock', 'w') or die('Cant open file');
			// 	if (flock($f, LOCK_EX | LOCK_NB)) {
			// 		if ( Game::active() ) {
			// 			Game::end();
			// 			Session::forget('GAME_ACTIVE');
			// 		}
			// 	};
			// 	session(['GAME_STATE' => 'loading']);
			// 	session(['GAME_TIMER' => 60 - Carbon::now()->second ]);
			// }
// Game::end();

			// if ( (Carbon::now()->minute%10 > 4) ) {
			// if ( (Carbon::now()->minute%10 <= 4) ) {
			//
			// 	if ( !Game::active()) {
			// 		Game::new();
			// 		session(['GAME_ACTIVE' => true]);
			// 		session(['GAME_STATE' => 'active']);
			// 	}
			//
			//
			// 	if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting' ) {
			// 		session(['GAME_STATE' => 'active']);
			// 	}
			// 		session(['GAME_TIMER' => 60 - Carbon::now()->second  + (60 * (4 - Carbon::now()->minute%5)) ]);
			//
			// } else {
				// $f = fopen('lock', 'w') or die('Cant open file');
				// if (flock($f, LOCK_EX | LOCK_NB)) {
				// 	if ( Game::active() ) {
				// 		Game::end();
				// 		Session::forget('GAME_ACTIVE');
				// 	}
				// };
			// 	if ( Game::active() ) {
			// 		Game::end();

			// 		Session::forget('GAME_ACTIVE');
			// 	}
			// 	session(['GAME_STATE' => 'loading']);
			//
			// 	session(['GAME_TIMER' => 60 - Carbon::now()->second  + (60 * (4 - Carbon::now()->minute%5)) ]);
			// }

// dd(collect(Game::active())->isEmpty());
// dump(session()->all());
			if ( (Carbon::now()->minute >= 0 && Carbon::now()->minute <= 9) || (Carbon::now()->minute >= 30 && Carbon::now()->minute <= 39) ) {
				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {
					if ( !Game::active() ) {
						Game::new();
						session(['GAME_STATE' => 'active']);
					}
				};


				if (session('GAME_STATE') != 'paused' && session('GAME_STATE') != 'waiting' ) {
					session(['GAME_STATE' => 'active']);
				}

				if ((Carbon::now()->minute >= 0 && Carbon::now()->minute <= 9 )) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 9, 59))]);
				}
				else if (Carbon::now()->minute >= 30 && Carbon::now()->minute <= 39) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 39, 59))]);
				}
			}

			else {
				$f = fopen('lock', 'w') or die('Cant open file');
				if (flock($f, LOCK_EX | LOCK_NB)) {
					if ( Game::active() ) {
						Game::end();
						Session::forget('GAME_ACTIVE');
					}
				};
				//
				// if ( Game::active() ) {
				// 	Game::end();
				// 	Session::forget('GAME_ACTIVE');®
				// }
				session(['GAME_STATE' => 'loading']);

				if ((Carbon::now()->minute >= 10 && Carbon::now()->minute <= 29)) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 29, 59))]);
				}
				else if (Carbon::now()->minute >= 40 && Carbon::now()->minute <= 59) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 59, 59))]);
				}

			}




			//
			// Game::new();
			// session(['GAME_ACTIVE' => true]);
			// session(['GAME_STATE' => 'active']);

			// Game::end();
			// Session::forget('GAME_ACTIVE');
			// session(['GAME_STATE' => 'loading']);

			// if ($request->session()->has('LAST_ACTIVITY')) {
			// 	$idletime = session()->get('LAST_ACTIVITY')->diffInSeconds(Carbon::now());
			// } else {
			// 	$idletime = 200;
			// }
      //
			// session(['IDLE_TIME' => $idletime]);
      //
			// session(['LAST_ACTIVITY' => Carbon::now()]);
      //
      //
			// if ($request->session()->get('IDLE_TIME') > 60 * 60 ) {
			// 		\Cart::whereDate('created_at', '<', Carbon::now()->subWeek()->toDateString())->where('checked_out', 'no')->where('email', 'N/A')->forceDelete();
			// 		Session::forget('transid');
			// }



				if( App::environment('production') && ! $request->secure()){
					// return gethostname();
					// echo  App::environment();
					// return var_dump($request->secure());
						return redirect()->secure($request->path());
				}

		     return $next($request);
	 }
}
