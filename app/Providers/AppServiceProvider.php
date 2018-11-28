<?php

namespace App\Providers;

use Illuminate\Support\Facades\DB;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Bootstrap any application services.
	 *
	 * @return void
	 */
	public function boot()
	{
        //
		Schema::defaultStringLength(191);
		Paginator::useBootstrapThree();

		DB::listen(function ($query) {
        //  dump([$query->sql, $query->bindings, $query->time]);
        //  dump($query->sql);
        //  dump($query->bindings);
        //  dump($query->time);
        //  exit;
		});
	}

	/**
	 * Register any application services.
	 *
	 * @return void
	 */
	public function register()
	{
        //
	}
}
