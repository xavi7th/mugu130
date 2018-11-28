<?php
namespace App\Modules\Admin\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

/**
 * A middleware that allows only those with the roles of admin to pass
 *
 * Logs out every other user
 *
 */
class AdminsOnly
{
	 public function handle($request, Closure $next){

			if (!Auth::user()->isAdmin()){
				Session::flush();
				Auth::logout();

				if (request()->isJson()) {
          return response()->json(['status' => 'Unauthorised request' ], 423);
        }
		    return redirect()->route('login')->withErrors('Unauthorised Action');
		  }

		     return $next($request);
	 }
}
