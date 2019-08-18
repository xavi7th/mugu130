<?php

namespace App\Modules\PaymentAgent\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class PaymentAgentTransaction extends Model
{
    protected $guarded = [];
    // protected $appends = [
    //       'credited_user'
    // ];

    public function payment_agent(){
      return $this->belongsTo(User::class, 'payment_agent_id', 'user_id');
    }

    public function getCreditedUserAttribute(){
      return $this->transactions()->where('trans_type', 'withdrawal')->where('status', 'completed')->sum('amount');
    }

    public function credited_user(){
      return $this->belongsTo(User::class);
    }

}
