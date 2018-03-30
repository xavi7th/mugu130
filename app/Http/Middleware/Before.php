<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
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
			// Session::forget('GAME_ACTIVE');

			//  dd( $request->session()->has('GAME_ACTIVE') );

			if ( (Carbon::now()->minute > -1 && Carbon::now()->minute < 10) || (Carbon::now()->minute > 29 && Carbon::now()->minute < 40) ) {
				if ( !$request->session()->has('GAME_ACTIVE') ) {
					Game::new();
					session(['GAME_ACTIVE' => true]);
					session(['GAME_STATE' => 'active']);
				}
				if ((Carbon::now()->minute > -1 && Carbon::now()->minute < 10)) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 10, 0))]);
				}
				else if (Carbon::now()->minute > 29 && Carbon::now()->minute <= 40) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 40, 0))]);
				}
			} else {
				if ( $request->session()->has('GAME_ACTIVE') ) {
					Game::end();
					Session::forget('GAME_ACTIVE');
					session(['GAME_STATE' => 'loading']);

				}
				if ((Carbon::now()->minute > 10 && Carbon::now()->minute < 30)) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 30, 0))]);
					session(['GAME_STATE' => 'loading']);
				}
				else if (Carbon::now()->minute > 40 && Carbon::now()->minute <= 59) {
					session(['GAME_TIMER' => Carbon::now()->diffInSeconds(Carbon::createFromTime(Carbon::now()->hour, 60, 0))]);
					session(['GAME_STATE' => 'loading']);
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
