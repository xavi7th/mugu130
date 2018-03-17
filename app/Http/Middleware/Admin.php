<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Session;
use DB;
use App\Message;

class Admin
{
    /**
     * Custom methods that I set to run before the request hits my app.
     *
     * @var array
     */

	 public function handle($request, Closure $next)
    {

			if (Auth::user()->useraccstatus != 'admin'){

		    Message::alertAdmin('Intrusion Attempt', Auth::user()->email.' tried to access the admin section without authorisation.');
		    Session::flush();
				Auth::logout();
		    return redirect()->route('home');
		  }

			// dump('set up a system to autologout after 5 minutes');

			// dump($request->session());

			// This section logs out the admin if he has been idle for 60 secs times X minutes
			if ($request->session()->has('LAST_ACTIVITY')) {
				$idletime = session()->get('LAST_ACTIVITY')->diffInSeconds(Carbon::now());
			} else {
				$idletime = 200;
			}

			session(['IDLE_TIME' => $idletime]);

			session(['LAST_ACTIVITY' => Carbon::now()]);


			if ($request->session()->get('IDLE_TIME') > 60 * 50 ) {
					// Session::flush();
					session(['ADMIN_ERROR' => 'Account logged out automatically after 5 mins. Relogin to continue.']);
					Auth::logout();
					return redirect('/coded');
					// dump('greater');
			}

			// dump($request->session());

		     return $next($request);
	 }
}
