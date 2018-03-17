<?php
namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Session;
use DB;

class Before
{
    /**
     * Custom methods that I set to run before the request hits my app.
     *
     * @var array
     */

	 public function handle($request, Closure $next)
    {

			// dump(storage_path('app/public/uploads'));
			// dump(Storage::url('uploads/products')); exit;
			// dump(asset('storage/uploads')); exit;
			// exit;

				// dd(\Product::whereRaw("`product_name` like '%used%' AND `product_os` <> `product_brand`")->select('product_os','product_brand')->distinct()->toSql());
				// dd($request);

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


					// 	echo '<pre>', var_dump(\Product::inRandomOrder()->take(2)->get()), '</pre>'; exit;
					// return gethostname();
					// echo  App::environment();
					// echo '<pre>', var_dump(App::environment('mac.dev')), '</pre>'; exit;
					// exit;
					// return var_dump($request->secure());

				if( App::environment('production') && ! $request->secure())
				{
						return redirect()->secure($request->path());
				}

					// dump($request->session());
				// 		Event::listen('illuminate.query', function( $query ) {
				// 			echo '<div class="alert alert-info"><h2>'.$query.'</h2></div>'; // not working
				// 		});

		     return $next($request);
	 }
}
