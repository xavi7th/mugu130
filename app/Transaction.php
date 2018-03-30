<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Watson\Rememberable\Rememberable;
use App\User;

class Transaction extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	// public $rememberFor = 5;

	 public function user(){
			 return $this->belongsTo(User::class);
	 }
}
