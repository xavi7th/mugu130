<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\Game;

class UserGameSession extends Model{

	use SoftDeletes;

  protected $guarded = [];

	protected $appends = [
		 'duration', 'duration_secs'
	];

  protected $dates = ['deleted_at', 'ended_at'];

	 public function user(){
			 return $this->belongsTo(User::class);
	 }


	 public function userWithTrashed(){
			 return $this->belongsTo(User::class)->withTrashed();
	 }

	 public function game(){
			 return $this->belongsTo(Game::class);
	 }

  public static function sendAdminMessage($senderid, $senderusername, $message){
   	return self::create([

		]);
  }

	public function getDurationAttribute() {
		return Carbon::parse($this->created_at)->diffInMinutes(Carbon::parse($this->ended_at));
	}

	public function getDurationSecsAttribute() {
		return Carbon::parse($this->created_at)->diffInSeconds(Carbon::parse($this->ended_at));
	}



}
