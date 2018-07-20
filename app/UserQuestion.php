<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class UserQuestion extends Model{

	use SoftDeletes;

  protected $guarded = [];
  protected $dates = ['deleted_at'];

	 public function user(){
			 return $this->belongsTo(User::class);
	 }

	 public function question(){
			 return $this->belongsTo(Question::class);
	 }

	 public function game(){
			 return $this->belongsTo(Game::class);
	 }

  public static function createUserQuestions(){

		$questions = Question::inRandomOrder()->take(11);

		var_dump($questions); exit;
   	return self::create([

		]);
  }



}
