<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class Notice extends Model{

  protected $guarded = [];
  protected $dates = ['deleted_at'];
	protected $casts =[
		'read' => 'boolean'
	];

	 public function user(){
			 return $this->belongsTo(User::class);
	 }

}
