<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;

class DemoQuestion extends Model{

  protected $guarded = [];
  protected $dates = ['deleted_at'];

	 public function user($ses_id){
			 return $this->belongsTo(User::class, 'admin_id');
	 }

}
