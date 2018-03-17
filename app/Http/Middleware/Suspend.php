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
			// dd(Auth::guard('api')->user()->useraccstatus);
			// if($request->isJson() && Auth::guard('api')->user() && Auth::guard('api')->user()->useraccstatus == 'suspended'){
			// 		# code...
			// 		return response()->json([
			// 				'message'=>'User Account Suspended'
			// 		], 409);
      // }
      // if(!Auth::user()->verified){
      //   return redirect('suspended');
      // }


      return $next($request);
	  }
}
