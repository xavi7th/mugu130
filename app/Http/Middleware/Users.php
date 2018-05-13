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

class Users
{
	 public function handle($request, Closure $next){

		//  exit;

			if (Auth::user()->role_id != env('USER_ROLE_ID')){
				// exit;
		    // Session::flush();
				// return route('admin');

				if (request()->isJson()) {
          return response()->json(['status' => 'Unauthorised request' ], 423);
        }
		    return redirect()->route('admin');
		  }

		     return $next($request);
	 }
}