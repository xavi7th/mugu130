<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
  public function user(){
    return $this->belongsTo(User::class);
  }
  public static function admin_id(){
    // dd(self::where('name', 'admin')->first()->id);
    return self::where('name', 'admin')->first()->id;
  }
  public static function user_id(){
    return self::where('name', 'user')->first()->id;
  }
  public static function agent_id(){
    return self::where('name', 'paymentagent')->first()->id;
  }
  // public static function user(){
  //   return self::belongsTo(User::class);
  // }
}
