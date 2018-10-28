<?php

namespace App\Modules\PaymentAgent\Models;

use App\User;
use App\Modules\PaymentAgent\Models\PaymentAgentTransactions;
use Illuminate\Database\Eloquent\Model;

class PaymentAgent extends Model
{
    protected $table = 'users';

    public function agent_transactions(){
      return $this->hasMany(PaymentAgentTransactions::class);
    }

}
