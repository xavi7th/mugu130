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
	 public function handle($request, Closure $next){

		//  exit;

			if (Auth::user()->role_id != env('ADMIN_ROLE_ID')){

		    Message::alertAdmin();
		    Session::flush();
				Auth::logout();
				if (request()->isJson()) {
          return response()->json(['status' => 'Unauthorised request' ], 403);
        }
		    return redirect()->route('login');
		  }

			// This section logs out the admin if he has been idle for 60 secs times X minutes
			if ($request->session()->has('LAST_ACTIVITY')) {
				$idletime = session()->get('LAST_ACTIVITY')->diffInSeconds(Carbon::now());
			} else {
				$idletime = 200;
			}

			session(['IDLE_TIME' => $idletime]);

			session(['LAST_ACTIVITY' => Carbon::now()]);


			if ($request->session()->get('IDLE_TIME') > 60 * env('ADMIN_MAX_IDLE_TIME') ) {
					session(['ADMIN_ERROR' => 'Account logged out automatically after 5 mins. Relogin to continue.']);
					Auth::logout();
					if (request()->ajax()) {
						return response()->json(['status' => 'Account logged out automatically after 5 mins. Relogin to continue.' ], 401);
					}
					return redirect()->route('login');
			}

		     return $next($request);
	 }
}
