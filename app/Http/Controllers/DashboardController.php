<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Game;
use App\Message;
use App\UserGameSession;
use App\UserQuestion;
use Carbon\Carbon;

// Cache::flush();

class DashboardController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('before');
        $this->middleware('auth')->except('contact');
        $this->middleware('suspended')->except('suspended', 'getApiKey', 'contact');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(){
        // Cache::flush();
        if (Auth::user()->useraccstatus == 'admin') {
          # code...
          return redirect()->route('admin');
        }
        return view('dashboard');
    }

    public function getGameState(){
        return [
          'game_timer' => session('GAME_TIMER'),
          'game_state' => session('GAME_STATE') //active, waiting (for the game to end and show result), paused, loading
        ];
    }

    public function joinGame(){


      // Get id of the current active on-going game
      $game_id = Game::where('status', true)->value('id');

      //temporarily start a game if none
      // if (!$game_id) {
      //   $game_id = Game::new()->id;
      // }

      if (!$game_id) {
        return response()->json(['status' => false ], 422);
      }

      // Add the user to that current game using the game->id
      if($game_id > 0){
        Auth::user()->activeGames()->where('game_id', '!=', $game_id)->update([
          'ended_at' => Carbon::now()
        ]);
        if (Auth::user()->activeGames->isEmpty()) {
            UserGameSession::create([
              'user_id' => auth()->id(),
              'game_id' => $game_id
            ]);

        }

        return ['status' => true];
      }

      // Retrieve 11 random questions from the question pool and assign it to the user for that particular game


        return [
          'game_timer' => 600,
          'game_state' => 'active' //active, waiting (for the game to end and show result), paused, loading
        ];
    }

    public function submitExam(){

      $exam = request('details');

      // Get id of the current active on-going game
      $game_id = Game::where('status', true)->value('id');

      //loop through the answers and mark them and send to DB
      DB::beginTransaction();
        $count = 0;
        foreach ($exam as $key => $value) {
          $record = UserQuestion::find($value['id']);
          $record->answered_option = $value['answered_option'];
          if ($value['answered_option'] == $value['question']['correct_option']) {
            $value['verdict'] = 1;
            $record->verdict = 1;
            $count++;
          }
          $record->save();
          $ids[] = $record;
        }

        Auth::user()->activeGames()->update([
          'ended_at' => Carbon::now()
        ]);

      DB::commit();
      session(['GAME_STATE' => 'waiting']);


      //change the game state to waiting if timer is not up yet
      return ['status' => true, 'user_score'=>$count];

      // return game state

    }


    public function getUserQuestions(){

        return [
          'user_questions' => Auth::user()->getUserQuestions()
        ];
    }






    public function suspended()
    {
      Cache::flush();
      return view('suspended');
    }

    public function contact(){
      Message::newGuestMessage();
      return back()->withErrors('Message Sent');
    }

    public function makeDeposit(){
      // return  request()->all();

      $key = Auth::user()->makeDeposit();

      return [
        'trans_key' => $key->transaction_key
      ];
      exit;
      return back()->withErrors('Message Sent');
    }


    public function requestPayment(){
      // return  request()->all();

      return [
        'status' =>  Auth::user()->requestPayment(),
      ];

    }


    public function requestBonus(){
      // return  request()->all();

      return [
        'status' =>  Auth::user()->requestBonus(),
      ];

    }


    public function receivedPayment(){
      // return  request()->all();

      return [
        'status' =>  Auth::user()->receivedPayment(),
      ];

    }

    public function disputePayment(){
      return [
        'status' =>  Auth::user()->disputePayment(),
      ];
    }

    public function updateUserDetails(){

      $this->validate(request(), [
        'details.email' => 'required',
        'details.phone1' => 'required'
      ]);
      return [
        'status' =>  Auth::user()->updateUserDetails(),
      ];
    }

    public function sendMessage(){

      // return request()->all();

      $rules = [
        'details' => 'required|string|',
      ];

      $validator = Validator::make(request()->all(), $rules);

      if($validator->fails()){
        return response()->json([
            'error' => 'Invalid Message type',
        ], 422);
      }

      return [
        'status' =>  Auth::user()->sendMessage(),
      ];
    }


}
