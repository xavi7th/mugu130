<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneratedError extends Model
{
    //
    protected $guarded = [];

    /**
     * Saves the error to the database for review
     *
     * Undocumented function long description
     *
     * @param type var Description
     * @return return type
     */
    public static function log($err){
     	try {
        self::create([
                      'generated_error' => $err,
                    ]);
       } catch (\Exception $e) {
         dd($e);
       }
  		// return true;
    }
}
