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


trait BasicCrud
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
  public static function basicCrud($model, $resource, $view, $perPage, $relationships = []){


        /**
         * Get all the rows of a specified resource.
         * @param  Request $request
         * @return Response
         */
        Route::get('get-all-' . $resource, function () use($model, $resource, $view, $relationships, $perPage) {
          // return $model::all();
          return view(str_singular($view).'::' . $resource . '-list', [$resource => $model::with($relationships)->latest()->paginate($perPage) ]);
        })->name('admin.view-' . $resource);

        /**
        * Show the specified resource details.
        * @return Response
        */
        Route::get('/get-' . str_singular($resource) . '-details/{id}', function($id) use($resource, $model, $view) {
          // return $id;
          return view(str_singular($view).'::' . $resource . '-details', [str_singular($resource) => $model::find($id) ]);
        })->name('admin.view-' . str_singular($resource) .'-details');

        /**
         * Show the form for editing an existing resource.
         * @return Response
         */
        Route::get('/edit-' . str_singular($resource) . '-details/{id}', function ($id) use($model, $resource, $view) {
          return view(str_singular($view) . '::' . $resource . '-edit', [str_singular($resource) => $model::find($id) ]);
        })->name('admin.edit-' . str_singular($resource) .'-details');

        /**
         * Update the specified resource in storage.
         * @param  Request $request
         * @return Response
         */
        Route::post('/edit-' . str_singular($resource). '-details/{id}', function ($id) use($model, $resource) {
          // dd(request()->all());
          try {
            $model::find($id)->update(array_except(request()->all(), ['_token']));
            return back()->withStatus('Updated');
          } catch (\Exception $e) {
            dd($e);
            return 'Something wrong happened';
          }

        });

        /**
         * Remove the specified resource from storage.
         * @return Response
         */
        Route::post('/delete-' . str_singular($resource). '/{id}', function ($id) use($model, $resource) {
          $model::find($id)->delete();
          return back();
        })->name('admin.delete-' . str_singular($resource));

        /**
         * Show the form for creating a new resource..
         * @param  Request $request
         * @return Response
         */
        Route::get('/create-' . str_singular($resource), function () use($resource, $view) {
          return view(str_singular($view) . '::' . $resource . '-create');
        })->name('admin.create-' . str_singular($resource));

        /**
         * Store a newly created resource in storage.
         * @param  Request $request
         * @return Response
         */
        Route::post('/create-' . str_singular($resource), function () use($resource, $model) {
          try {
              // return dd(empty(request()->file('imgu')));
              $values = array_except(request()->input(), '_token');

              // return dd($values);

              if ( !empty(request()->file('img')) ) {
                //Laravel 5 Abstraction using the flysystem Storage facade on the fileupload instance

                $name = request()->file('img')->store('clients','public');
                $values['img'] = 'storage/' . $name;
              }

            $model::create($values);
            return back()->withStatus('Created');
          } catch (QueryException $e) {
            if ($e->errorInfo[1] == 1062) {
              return back()->withErrors(str_before($e->errorInfo[2], 'for'));
            }
            else {
              return ['status' => false, 'message' => $e->errorInfo[2]];
            }
          }

          return  request()->all();
        })->name('admin.create-' . str_singular($resource));

  }
}
