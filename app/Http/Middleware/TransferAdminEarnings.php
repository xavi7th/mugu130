<?php

namespace App\Http\Middleware;

use Closure;
use App\Role;
use App\Earning;

class TransferAdminEarnings
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
			if (now()->format('d') == now()->lastOfMonth()->format('d')) {
				Earning::where('user_id', Role::admin_id())->update(['transferred' => true]);
			}
        return $next($request);
    }
}
