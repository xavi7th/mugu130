<?php

namespace App\Modules\PaymentAgent\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;

/**
 * undocumented class variable
 *
 */
class PaymentAgentController extends Controller
{

    /**
    * Agent's routes
    *
    * This is a listing of all the agents routes
    *
    * @return return type
    */
    public static function routes(){
        // LoginController::routes();

        Route::group(['middleware' => ['auth', 'suspended', 'agent']], function(){

          Route::get('/{vue_capture?}', function () {
            return view('paymentagent::agent-dashboard');
          })->where('vue_capture', '[\/\w\.-]*')->name('agent.dashboard');

        });

      Route::group(['middleware' => ['auth', 'api'], 'prefix' => 'api'], function(){


      });
    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('paymentagent::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('paymentagent::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function store(Request $request)
    {
    }

    /**
     * Show the specified resource.
     * @return Response
     */
    public function show()
    {
        return view('paymentagent::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit()
    {
        return view('paymentagent::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param  Request $request
     * @return Response
     */
    public function update(Request $request)
    {
    }

    /**
     * Remove the specified resource from storage.
     * @return Response
     */
    public function destroy()
    {
    }
}
