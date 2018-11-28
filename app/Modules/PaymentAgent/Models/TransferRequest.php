<?php

namespace App\Modules\PaymentAgent\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use App\User;

/**
 * undocumented class
 *
 *
 */
 class TransferRequest extends Model
{
    protected $guarded = [

    ];

    /**
     * A mutator that
     *
     * @param mixed $value The current value supplied bofore mutation
     * @return null
     *
     */
    public function setAccNameAttribute($value){
      // return $value;
      $this->attributes['acc_name'] = $value;
      $this->attributes['user_id'] = Auth::id();
    }

    /**
     * This method provides a one-to-many relationship between the users and the transfer requsets Table
     *
     *
     * @return mixed Illuminate\Database\Schema\Builder
     *
     */
    public function user(){
          return $this->belongsTo(User::class);
    }

}
