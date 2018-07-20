<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class DemoGameSession extends Model{

	// use SoftDeletes;

  protected $guarded = [];

	protected $appends = [
		 'duration'
	];

  protected $dates = ['deleted_at', 'ended_at'];

  public static function new(){

		session(['demo_id' => str_random(190)]);

   	return self::create([
			'session_id' => session('demo_id'),
			'game_id' => 1
		]);
  }

	public function getDurationAttribute() {
		return Carbon::parse($this->created_at)->diffInMinutes(Carbon::parse($this->ended_at));
	}

}
