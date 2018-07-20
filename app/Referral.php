<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;
use App\Confirmation;
use Carbon\Carbon;

class Referral extends Model
{

    protected $guarded = [];

    protected $appends = [
        //  'creation_day', 'creation_month'
    ];

    public function user(){
      return $this->belongsTo(User::class);
    }

    public function referral(){
      return $this->belongsTo(User::class, 'referral_id');
    }

    public static function new($referral_id, $user_id){
      self::create([
              'user_id' => $user_id,
              'referral_id' => $referral_id,
            ]);
    }

}
