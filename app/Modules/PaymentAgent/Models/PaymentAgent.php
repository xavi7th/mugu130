<?php

namespace App\Modules\PaymentAgent\Models;

use App\User;
use App\Modules\PaymentAgent\Models\PaymentAgentTransactions;
use App\Earning;
use Illuminate\Database\Eloquent\Model;

class PaymentAgent extends User
{
    protected $table = 'users';

    protected $appends = ['total_user_fundings', 'total_untransferred_earnings'];

    protected $guarded = ['total_user_fundings', 'total_untransferred_earnings', 'agent_transactions'];

    public function agent_transactions(){
      return $this->hasMany(PaymentAgentTransactions::class)->latest();
    }

    public function getTotalUserFundingsAttribute(){
      return $this->agent_transactions->count();
    }

    public function getTotalUntransferredEarningsAttribute(){
      return (float)$this->hasMany(Earning::class, 'user_id')->where('transferred', false)->sum('amount');
    }

}
