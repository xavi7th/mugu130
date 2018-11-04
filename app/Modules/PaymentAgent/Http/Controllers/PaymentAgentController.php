<?php

namespace App\Modules\PaymentAgent\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\User;
use App\Modules\PaymentAgent\Models\PaymentAgent;
use App\Earning;

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

            if (Auth::user()->available_units < request('amount')) {
              return response()->json(['message' => 'Insufficient balance' ], 200);
            }
            if (request('amount') < 200) {
              return response()->json(['message' => 'Funding amount must be greater that 200' ], 200);
            }

            $amount_to_credit_user = request('amount') - env('AGENT_REMITAL_FEE') - env('AGENT_PROFIT');

            try {
              DB::beginTransaction();
                  $user = User::findOrFail(request('user_id'));
                  $user->available_units += $amount_to_credit_user;
                  $user->units_purchased += $amount_to_credit_user;
                  $user->save();

                  Auth::user()->available_units -= request('amount');
                  Auth::user()->save();

                  //Create a transaction record for the user
                  $user->transactions()->create([
                    'amount' => $amount_to_credit_user,
                    'ref_no' => 'AGENT-'. Auth::id() . '-' . str_random(rand(20,30)),
                    'trans_type' => 'wallet funding',
                    'status' => 'completed',
                    'channel' => 'bank deposit'
                  ]);

                  //Create a transaction record for the agent
                  PaymentAgent::find(Auth::id())->agent_transactions()->create([
                    'amount' => request('amount'),
                    'credited_user_id' => request('user_id'),
                    'trans_type' => 'user wallet funding',
                    'status' => 'completed'
                  ]);

                  //Add admin earning
                  Earning::addAdminEarningFromAgent(env('AGENT_REMITAL_FEE'));

                  //Add agent Earning
                  Auth::user()->addEarning(0, env('AGENT_PROFIT'));
              DB::commit();
              return ['status' => true, 'message' => 'User credited'];
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'User not found' ], 204);
            }

          });

          Route::get('get-agent-details', function () {
            try {
              return PaymentAgent::find(Auth::id());
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'User not found' ], 403);
            }

          });

          Route::get('get-transactions', function () {
            try {
              return PaymentAgent::find(Auth::id())->agent_transactions->load('credited_user:firstname,lastname,email,id');
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'User not found' ], 403);
            }
          });

          Route::get('get-wallet-fund-log', function () {
            try {
              // return PaymentAgent::find(Auth::id())->agent_transactions->load('credited_user:firstname,lastname,email,id');
              return Auth::user()->load(['transactions' => function ($q) { $q->latest(); }]);

            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'User not found' ], 403);
            }
          });

          Route::post('edit-details', function () {
              return ['status' => PaymentAgent::find(Auth::id())->update(request('details'))];
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
