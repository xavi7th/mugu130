<?php

namespace App\Modules\Admin\Models;

use App\User;
use App\Modules\Admin\Models\AdminTransactions;
use App\Earning;

class Admin extends User
{
    protected $table = 'users';

    protected $appends = ['total_untransferred_earnings'];

    public function getTotalUntransferredEarningsAttribute(){
      return (float)$this->hasMany(Earning::class, 'user_id')->where('transferred', false)->sum('amount');
    }

}
