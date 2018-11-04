<?php

namespace App\Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\User;
use App\Role;
use App\Modules\PaymentAgent\Models\PaymentAgent;

/**
 * undocumented class variable
 *
 */
class AdminController extends Controller
{

    /**
    * Admin's routes
    *
    * This is a listing of all the admins routes
    *
    * @return return type
    */
    public static function routes(){
        // LoginController::routes();

        Route::group(['middleware' => ['auth', 'api'], 'prefix' => 'agents/api'], function(){

          Route::get('get-all-agents', function () {
            try {
              return User::where('role_id', Role::agent_id())->withTrashed()->get()->makeVisible('deleted_at');
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }

          });

          Route::get('get-agent-details/{id}', function ($id) {
            try {
              return User::findOrFail($id);
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }
          });

          Route::get('get-all-agent-transactions/{id}', function ($id) {
            // return $id;
            try {
              return PaymentAgent::findOrFail($id)->agent_transactions->load('credited_user:firstname,lastname,email,id');
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 404);
            }
          });

          Route::post('edit-agent-details', function () {
            // return request('details');
            try {
              return ['status' => User::find(request()->input('details.id'))
                          ->update(request('details'))];
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }
          });

          Route::delete('delete-agent/{id}', function ($id) {
            // return $id;
            try {
              return ['status' => User::destroy($id)];
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }
          });

          Route::delete('restore-agent/{id}', function ($id) {
            // return $id;
            try {
              return ['status' => User::withTrashed()->find($id)->restore()];
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }
          });

          Route::get('get-user-details/{email}', function ($email) {
            try {
              return User::where('email', $email)->firstOrFail(['id', 'email', 'firstname', 'lastname']);
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }
          });

          Route::put('create-agent', function () {
            // return request('user_id');
            try {
              $user = User::find(request('user_id'));
              $user->role_id = Role::agent_id();
              $user->save();

              return [
                      'status' => true,
                      'message' => 'Account converted to Agent Account'
                      ];

            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
            }
          });

        });

        Route::group(['middleware' => ['auth', 'suspended', 'admin'], 'prefix' => 'agents'], function(){

          Route::get('/{vue_capture?}', function () {
            // exit('here');
            return view('admin::admin-dashboard');
          })->where('vue_capture', '[\/\w\.-]*')->name('admin.suplementary-dashboard');

        });


    }

    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index()
    {
        return view('admin::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return view('admin::create');
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
        return view('admin::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @return Response
     */
    public function edit()
    {
        return view('admin::edit');
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
