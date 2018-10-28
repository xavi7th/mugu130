<?php

namespace App\Modules\PaymentAgent\Models;

use Illuminate\Database\Eloquent\Model;
use App\User;

class PaymentAgentTransactions extends Model
{
    protected $guarded = [];

    public function payment_agent(){
      return $this->belongsTo(User::class, 'payment_agent_id', 'user_id');
    }

}
