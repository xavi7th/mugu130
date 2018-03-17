<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Session;
use DB;

class Verified
{
    /**
     * Custom methods that I set to run before the request hits my app.
     *
     * @var array
     */

	 public function handle($request, Closure $next)
    {

			// dd( Auth::user()->verified );

			if(Auth::check() && Auth::user()->verified){
				return redirect()->route('dashboard');
			}


		     return $next($request);
	 }
}
