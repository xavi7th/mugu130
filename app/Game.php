<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Watson\Rememberable\Rememberable;
use Carbon\Carbon;

class Game extends Model{

	use SoftDeletes;
	use Rememberable;

  protected $guarded = [];
  protected $dates = ['deleted_at', 'ended_at'];
	// public $rememberFor = 5;
	 //
	//  public function user(){
	// 		 return $this->belongsTo(User::class, 'sender_id');
	//  }

  public static function new(){

		//end previous game if any
		self::where('status', true)->update([
			'status' => false,
			'ended_at' => Carbon::now(),
			'deleted_at' => Carbon::now()
		]);

		//create new game
		return self::create([

		]);
  }



  public static function end(){
		self::where('status', true)->update([
			'status' => false,
			'ended_at' => Carbon::now(),
		]);
  }



  public static function active(){


		$games = self::where('status', true)->get();

		if ($games->count() > 1) {
			return 'Too many active games';
		}

		else if ($games->count() < 1) {
			return false;
		}

		else {
			return $games[0];
		}

  }



}
