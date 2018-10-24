<?php

namespace App\Modules;

use Illuminate\Support\Facades\Route;
use Illuminate\Database\QueryException;

/**
 * Adds basic CRUD function for resources
 *
 * This trait adds the basic CRUD functions to a class.
 * It returns the specified routes and should be used in a route file
 * or in a controller that returns route methods
 *
 */


trait BasicApiCrud
{
  /**
   * Adds basic CRUD function for resources
   *
   * This trait adds the basic CRUD functions to a class.
   * It returns the specified routes and should be used in a route file
   * or in a controller that returns route methods
   *
   * @param string model The model to create the CRUD for
   * @param string resource The prefix appendeed to the url string unique to this resource
   * @param string middleware Optional middleware to use for the routes. NOT YET IMPLEMENTED
   * @return Response
   */
  public static function basicApiCrud($model, $resource, $perPage, $relationships, $middleware = null){


        /**
         * Get all the rows of a specified resource.
         * @param  Request $request
         * @return Response
         */
        Route::get('get-all-' . $resource, function () use($model, $perPage, $relationships) {
          return $model::with($relationships)->simplePaginate($perPage);
        });

        /**
        * Show the specified resource details.
        * @return Response
        */
        Route::get('/get-' . str_singular($resource) . '-details', function() use($resource) {
          return view(str_singular($resource).'::details');
        });

        /**
         * Show the form for editing an existing resource.
         * @return Response
         */
        Route::get('/edit-' . str_singular($resource), function () use($resource) {
          return view(str_singular($resource) . '::edit');
        });

        /**
         * Update the specified resource in storage.
         * @param  Request $request
         * @return Response
         */
        Route::post('/edit-' . str_singular($resource), function () use($model) {
          // return request();art
          return [ 'status' => $model::find(request()->input('details.id'))->update(request()->input('details.values')) ];

        });

        /**
         * Remove the specified resource from storage.
         * @return Response
         */
        Route::post('/delete-' . str_singular($resource), function () use($model) {
          return [ 'status' => $model::destroy(request()->input('details.id')) ];
        });

        /**
         * Show the form for creating a new resource..
         * @param  Request $request
         * @return Response
         */
        Route::get('/create-' . str_singular($resource), function () use($resource) {
          return view(str_singular($resource) . '::create');
        });

        /**
         * Store a newly created resource in storage.
         * @param  Request $request
         * @return Response
         */
        Route::post('/create-' . str_singular($resource), function () use($model) {
          // return request()->input('details');
          try {
            return [ 'status' => true, 'new_details' => $model::create(request()->input('details')) ];
          } catch (QueryException $e) {
            if ($e->errorInfo[1] == 1062) {
              return ['status' => false, 'message' => str_before($e->errorInfo[2], 'for')];
            }
            else {
              return ['status' => false, 'message' => str_before($e->errorInfo[2])];
            }
          }

        });

  }
}
