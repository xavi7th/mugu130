<?php

namespace App\Modules\PaymentAgent\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class Transaction extends Model
{
    protected $fillable = ['user_id' ,'description' ,'trans_type' ,'amount' ,'trans_date'];
    protected $dates = ['deleted_at', 'trans_date'];


    public function user(){
          return $this->belongsTo(User::class);
    }
}
