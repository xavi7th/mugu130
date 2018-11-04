<?php

namespace App\Modules\Admin\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\User;
use App\Role;

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

          Route::get('get-agent-details/{id}', function ($id) {
            try {
              return User::find($id)->firstOrFail();
            } catch (ModelNotFoundException $e) {
              return response()->json(['message' => 'user not found' ], 204);
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

        });

        Route::group(['middleware' => ['auth', 'suspended', 'admin'], 'prefix' => 'agents'], function(){


           Route::get('get-all-agents', function () {
             try {
               return User::where('role_id', Role::agent_id())->get();
             } catch (ModelNotFoundException $e) {
               return response()->json(['message' => 'user not found' ], 204);
             }

           });

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
