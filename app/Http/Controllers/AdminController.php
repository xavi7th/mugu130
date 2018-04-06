<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use App\Question;
use App\UserGameSession;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('before');
        $this->middleware('auth');
        $this->middleware('admin');
        $this->middleware('suspended');
    }

    public function showDashboard(){
        // Cache::flush();

        if (!Auth::user()->role_id == env('ADMIN_ROLE_ID')) {
          return redirect()->route('dashboard');
        }
        return view('admin');
    }

    public function getProfilePageDetails(){

      return [
        'page_details' => Auth::user()->load('transactions', 'earnings', 'games')
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

    public function getQuestionsPageDetails(){
        return [
          'questions' => Question::latest()->get()
        ];
    }

    public function editQuestion(){
        return [
          'status' => Question::find(request()->input('details.id'))->update(request()->input('details'))
        ];
    }

    public function deleteQuestion(){
        return [
          'status' => Question::find(request()->input('details.id'))->delete()
        ];
    }

    public function createQuestion(){
        return [
          'status' => Question::create(request()->input('details'))
        ];
    }

    public function getAdminsPageDetails(){
        return [
          'admins' => Admin::latest()->get()
        ];
    }

    public function editAdmin(){
        $this->validate(request(), [
          'details.email' => 'required',
          'details.phone1' => 'required'
        ]);
        return [
          'status' => Admin::find(request()->input('details.id'))->update(request()->input('details'))
        ];
    }

    public function deleteAdmin(){
        return [
          'status' => Admin::find(request()->input('details.id'))->delete()
        ];
    }

    public function createAdmin(){
        return [
          'status' => Admin::create(request()->input('details'))
        ];
    }

    public function getLiveGameSession(){
        return [
          'live_session' => optional(Game::active())->user_game_sessions->load('user')
        ];
    }

    public function getAllGames(){
      return [
        'games' => Game::all()
      ];
    }

    public function getGameRecords($game_id){
      return [
        'games' => UserGameSession::where('game_id', $game_id)->get()->with('user')
      ];
    }

    public function getLogsByDay($date){
      $grouped = UserGameSession::whereDate('created_at', $date)->mapToGroups(function ($item, $key) {
          return [$item['game_id'] => $item];
      });

        return [
          'games' => $grouped
        ];
    }

    public function confirmWithdrawal($id){
      return [
        'status' => Transaction::find($id)->update([
                      'status' => 'paid'
                    ])
      ];
    }

    public function getAllTransactions(){
      return [
        'transactions' => Transaction::all()
      ];
    }

    public function createTransaction($type = null, $amount, $status = null, $user_id){

      $user = User::find($user_id);

      $user->available_units = $user->available_units + $amount;
      $user->save();

      $trans = Transaction::new();

      $trans->trans_type = 'Admin Correction';
      $trans->amount = $amount;
      $trans->status = 'done';
      $trans->user_id = $user_id;
      $trans->save();


      return [
        'status' => true
      ];
    }

    public function getAllUserEarnings(){
      return [
        'earnings' => Earning::all()
      ];
    }

    public function getMonthlyStatistics(){
      return [
        'new_users' => User::whereMonth('created_at', Carbon::now()->month)->count(),
        'new_referrals' => Referral::with('user')->whereMonth('created_at', Carbon::now()->month)->get(),
        'top_ganer' => UserGameSession::select(DB::raw('count(*) as gamer_count, user_id'))->whereMonth('created_at', Carbon::now()->month)->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first(),
        'online_payments' => Transaction::whereMonth('created_at', Carbon::now()->month)->where('trans_type', 'purchase')->where('channel', 'online')->count(),
        'offline_payments' => Transaction::whereMonth('created_at', Carbon::now()->month)->where('trans_type', 'purchase')->where('channel', 'offline')->count(),
        'payments_by_earnings' => Earning::whereMonth('created_at', Carbon::now()->month)->where('id', '!=', 0)->count(),
        'number_of_games' => Game::whereMonth('created_at', Carbon::now()->month)->count(),
        'total_num_of_players' => UserGameSession::whereMonth('created_at', Carbon::now()->month)->count(),
        'online_payments_amount' => Transaction::whereMonth('created_at', Carbon::now()->month)->where('trans_type', 'purchase')->where('channel', 'online')->sum('amoumt'),
        'offline_payments_amount' => Transaction::whereMonth('created_at', Carbon::now()->month)->where('trans_type', 'purchase')->where('channel', 'offline')->sum('amoumt'),
        'admin_payments_by_earnings' => Earning::whereMonth('created_at', Carbon::now()->month)->where('id', 0)->count(),

      ];
    }

    public function getDailyStatistics(){
      return [
        'new_users' => User::whereDay('created_at', Carbon::now()->day)->count(),
        'new_referrals' => Referral::with('user')->whereDay('created_at', Carbon::now()->day)->get(),
        'top_ganer' => UserGameSession::select(DB::raw('count(*) as gamer_count, user_id'))->whereDay('created_at', Carbon::now()->day)->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first(),
        'online_payments' => Transaction::whereDay('created_at', Carbon::now()->day)->where('trans_type', 'purchase')->where('channel', 'online')->count(),
        'offline_payments' => Transaction::whereDay('created_at', Carbon::now()->day)->where('trans_type', 'purchase')->where('channel', 'offline')->count(),
        'payments_by_earnings' => Earning::whereDay('created_at', Carbon::now()->day)->where('id', '!=', 0)->count(),
        'number_of_games' => Game::whereDay('created_at', Carbon::now()->day)->count(),
        'total_num_of_players' => UserGameSession::whereDay('created_at', Carbon::now()->day)->count(),
        'online_payments_amount' => Transaction::whereDay('created_at', Carbon::now()->day)->where('trans_type', 'purchase')->where('channel', 'online')->sum('amoumt'),
        'offline_payments_amount' => Transaction::whereDay('created_at', Carbon::now()->day)->where('trans_type', 'purchase')->where('channel', 'offline')->sum('amoumt'),
        'admin_payments_by_earnings' => Earning::whereDay('created_at', Carbon::now()->day)->where('id', 0)->count(),

      ];
    }

    public function sendBroadcast(){
      Message::toAll();
      return [
        'status' => true
      ];
    }

    public function sendMessage(){
      Message::create([
        'user_id' => request()->input('details.id'),
        'sender_id' => 0,
        'senderusername' => 'Admin',
        'message' => request()->input('details.message'),
        'subject' => request()->input('details.subject'),
      ]);
      return [
        'status' => true
      ];
    }

    public function getReferralsByUser($id){
      return Referral::where('user_id', $id)->with('user', 'referred');
    }

    public function editUser(){
      return [
        'status' => User::find(request()->input('details.id'))->update(request()->input('details'))
      ];
    }

    public function deleteUser(){
      return [
        'status' => User::find(request()->input('details.id'))->delete()
      ];
    }

    public function suspendUser(){
      return [
        'status' => User::find(request()->input('details.id'))->update([
          'useraccstatus' => 'suspended'
        ])
      ];
    }

    public function verifyUser(){
      return [
        'status' => User::find(request()->input('details.id'))->update([
          'verified' => true
        ])
      ];
    }


}
