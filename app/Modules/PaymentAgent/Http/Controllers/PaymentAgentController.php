<?php

namespace App\Modules\PaymentAgent\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\User;

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

        Route::group(['middleware' => ['auth', 'api'], 'prefix' => 'api'], function(){

          Route::get('find-user/{email}', function ($email) {
            try {
              return User::where('email', $email)->firstOrFail()->only(['email', 'firstname', 'lastname', 'id']);
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }

          });

          Route::post('credit-user', function () {
            try {
              $user = User::findOrFail(request('user_id'));
              $user->available_units += request('amount');
              $user->units_purchased += request('amount');
              $user->save();
              return ['status' => true, 'message' => 'User credited'];
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'User not found' ], 204);
            }

          });

          Route::get('get-agent-details', function () {
            try {
              return Auth::user();
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'User not found' ], 403);
            }

          });

        });

        Route::group(['middleware' => ['auth', 'suspended', 'agent']], function(){

          Route::get('/{vue_capture?}', function () {
            return view('paymentagent::agent-dashboard');
          })->where('vue_capture', '[\/\w\.-]*')->name('agent.dashboard');

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
