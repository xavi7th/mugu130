<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use DB;
use App\Message;

class Users
{
	 public function handle($request, Closure $next){

		//  exit;

			if (!Auth::user()->isNormalUser()){
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
