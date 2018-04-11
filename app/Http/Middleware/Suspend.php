<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Session;
use DB;
use Auth;


/**
 * Class to handle suspension of suspended acconts.
 *
 * @var array
 */
class Suspend
{
    /**
     * Custom methods that I set to run before the request hits my app.
     *
     * @var array
     */

	 public function handle($request, Closure $next)
    {
			// dd(Auth::user()->useraccstatus);
			if($request->isJson() && Auth::user()->useraccstatus == 'suspended'){
					return response()->json([
							'message'=>'User Account Suspended'
					], 403);
      }
      if(Auth::user()->useraccstatus == 'suspended'){
        return redirect('suspended');
      }


      return $next($request);
	  }
}
