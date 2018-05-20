<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Game;
use App\Earning;
use App\Message;
use App\Question;
use App\Transaction;
use App\UserGameSession;
use App\Mail\TransactionalMail;
use Carbon\Carbon;

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
      $rules = [
              				'details.question' => 'required|string',
              				'details.option_1' => 'required|string',
              				'details.option_2' => 'required|string',
              				'details.option_3' => 'required|string',
              				'details.option_4' => 'required|string',
              				'details.correct_option' => 'required|string',
              			];

              			$validator = Validator::make(request()->all(), $rules);

              			if($validator->fails()){
                      return response()->json(['errors' => $validator->messages() ], 422);
              			}

        return [
          'status' => Question::create(request()->input('details'))
        ];
    }







    public function getAdminsPageDetails(){
        return [
          'admins' => User::where('role_id', env('ADMIN_ROLE_ID'))->get()
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
      if (Auth::user()->role_id !== env('SUPER_ADMIN_ROLE_ID')) {
        return response()->json(['message' => 'Action denied. Super Admin only' ], 410);
      }
      if (User::adminDeletable()) {
        return [
          'status' => User::find(request()->input('details.id'))->delete()
        ];
      }
      else {
        return response()->json(['message' => 'Last Admin not deletable' ], 410);
      }

    }

    public function createAdmin(){

      if (Auth::user()->role_id !== env('SUPER_ADMIN_ROLE_ID')) {
        return response()->json(['message' => 'Action denied. Super Admin only' ], 410);
      }
      User::unguard();
        return [
          'status' => User::find(request()->input('details.id'))->update([
            'role_id' => env('ADMIN_ROLE_ID')
          ])
        ];
    }

    public function removeAdmin(){
      if (Auth::user()->role_id !== env('SUPER_ADMIN_ROLE_ID')) {
        return response()->json(['message' => 'Action denied. Super Admin only' ], 410);
      }
      User::unguard();

        return [
          'status' => User::find(request()->input('details.id'))->update([
            'role_id' => 1
          ])
        ];
    }






    public function getLiveGameSession(){
        return [
          'live_session' => optional(optional(Game::active())->user_game_sessions)->load('user')
        ];
    }

    public function getAllGames(){
      return [
        'games' => Game::all()
      ];
    }

    public function getGameRecords(){
      return [
        'games_records' => UserGameSession::with('user')->where('game_id', request()->input('details.id'))->get()
      ];
    }

    public function getLogsByDay(){
      // return Carbon::parse(request()->input('details'));
      $grouped = UserGameSession::whereDate('created_at', Carbon::parse(request()->input('details')))->get()->mapToGroups(function ($item, $key) {
          return [$item['game_id'] => $item];
      });

        return [
          'daily_log' => $grouped
        ];
    }

    public function getMonthlyStatistics(){
      return [
        'stats' => [
          'new_users' => User::whereMonth('created_at', Carbon::parse(request('details'))->month)->count(),
          // 'new_referrals' => Referral::with('user')->whereMonth('created_at', Carbon::parse(request('details'))->month)->get(),
          'top_ganer' => UserGameSession::with('user')->select(DB::raw('count(*) as gamer_count, user_id'))->whereMonth('created_at', Carbon::parse(request('details'))->month)->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first(),
          'online_payments' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->where('trans_type', 'purchase')->where('channel', 'online')->count(),
          'offline_payments' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->where('trans_type', 'purchase')->where('channel', 'offline')->count(),
          'payments_by_earnings' => Earning::whereMonth('created_at', Carbon::parse(request('details'))->month)->where('id', '!=', 0)->count(),
          'number_of_games' => Game::whereMonth('created_at', Carbon::parse(request('details'))->month)->count(),
          'total_num_of_players' => UserGameSession::whereMonth('created_at', Carbon::parse(request('details'))->month)->count(),
          'online_payments_amount' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->where('trans_type', 'purchase')->where('channel', 'online')->sum('amount'),
          'offline_payments_amount' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->where('trans_type', 'purchase')->where('channel', 'offline')->sum('amount'),
          'admin_payments_by_earnings' => Earning::whereMonth('created_at', Carbon::parse(request('details'))->month)->where('id', 0)->count(),
        ]
      ];
    }

    public function getDailyStatistics(){
      // return ;
      return [
          'stats' => [
            'date' => Carbon::parse(request('details'))->day,
            'new_users' => User::whereDay('created_at', Carbon::parse(request('details'))->day)->count(),
            // 'new_referrals' => Referral::with('user')->whereDay('created_at', Carbon::parse(request('details'))->day)->get(),
            'top_ganer' => UserGameSession::with('user')->select(DB::raw('count(*) as gamer_count, user_id'))->whereDay('created_at', Carbon::parse(request('details'))->day)->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first(),
            'online_payments' => Transaction::whereDay('created_at', Carbon::parse(request('details'))->day)->where('trans_type', 'purchase')->where('channel', 'online')->count(),
            'offline_payments' => Transaction::whereDay('created_at', Carbon::parse(request('details'))->day)->where('trans_type', 'purchase')->where('channel', 'offline')->count(),
            'number_of_games' => Game::whereDay('created_at', Carbon::parse(request('details'))->day)->count(),
            'total_num_of_players' => UserGameSession::whereDay('created_at', Carbon::parse(request('details'))->day)->count(),
            'online_payments_amount' => Transaction::whereDay('created_at', Carbon::parse(request('details'))->day)->where('trans_type', 'purchase')->where('channel', 'online')->sum('amount'),
            'offline_payments_amount' => Transaction::whereDay('created_at', Carbon::parse(request('details'))->day)->where('trans_type', 'purchase')->where('channel', 'offline')->sum('amount'),
            'payments_by_earnings' => Earning::whereDay('created_at', Carbon::parse(request('details'))->day)->where('user_id', '!=', 0)->count(),
            'admin_payments_by_earnings' => Earning::whereDay('created_at', Carbon::parse(request('details'))->day)->where('user_id', 0)->count(),
          ]
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
        'transactions' => Transaction::with('user')->get()
      ];
    }

    public function createTransaction(){
      // return request()->all();

      $user = User::find(request()->input('details.id'));

      $user->available_units = $user->available_units + request()->input('details.units');
      $user->save();

      $trans = new Transaction;

      $trans->trans_type = 'purchase';
      $trans->channel = request()->input('details.trans_type');
      $trans->amount = request()->input('details.units');
      $trans->status = 'completed';
      $trans->user_id = request()->input('details.id');
      $trans->save();

      $rsp = TransactionalMail::sendAdminCreditMail(request()->input('details.units'), request()->input('details.trans_type'), $user->available_units, request()->input('details.firstname'), $user->email);

      return [
        'status' => true
      ];
    }

    public function markTransactionAsPaid(){
      // return request()->input('details');
      $user = User::find(request()->input('details.user.id'));
      TransactionalMail::sendWithdrawalProcessedMail($user, request()->input('details.amount'), request()->input('details.trans_type'), request()->input('details.charges'), request()->input('details.amount') + request()->input('details.charges'));
      return [
        'status' => Transaction::find(request()->input('details.id'))->update([
          'status' => 'completed'
        ])
      ];
    }






    public function getReferralsByUser($id){
      return Referral::where('user_id', $id)->with('user', 'referred');
    }

    public function editUser(){
      // return request()->all();
      $this->validate(request(), [
        'details.email' => 'required',
        'details.phone1' => 'required'
      ]);
      return [
        'status' => User::find(request()->input('details.id'))->update(array_except(request()->input('details'), ['id', 'created_at', 'DOB', 'refcode', 'referral_Link', 'total_withdrawals', 'num_of_withdrawals', 'units_purchased', 'old_password', 'password_confirmation', 'earnings', 'referrals'] ))
      ];
    }

    public function deleteUser(){
      return [
        'status' => User::find(request()->input('details.id'))->delete()
      ];
    }

    public function suspendUser(){
      User::unguard();

      return [
        'status' => User::find(request()->input('details.id'))->update([
          'useraccstatus' => 'suspended'
        ])
      ];
    }

    public function activateUser(){
      User::unguard();

      return [
        'status' => User::find(request()->input('details.id'))->update([
          'useraccstatus' => 'active'
        ])
      ];
    }

    public function verifyUser(){
      User::unguard();

      User::find(request()->input('details.id'))->update([
        'verified' => true
      ]);

      User::reguard();

      return [
        'status' => true
      ];
    }

    public function getUsersPageDetails(){
      return [
        'users' => User::with(['earnings', 'referrals'])->where('role_id', '!=', env("ADMIN_ROLE_ID"))->get()
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







    public function getAllMessages(){
      return [
        'messages' => Message::where('user_id', env('ADMIN_ROLE_ID'))->orWhere('sender_id', env('USER_ROLE_ID'))->get()
      ];
    }

    public function replyMessage(){

      Message::fromAdmin();

      return [
        'status' => true
      ];
    }

    public function markMessageAsRead(){
      return [
        'status' => Message::find(request()->input('details.id'))->update([
          'read' => true
        ])
      ];
    }

    public function deleteMessage(){
      return [
        'status' => Message::find(request()->input('details.id'))->delete()
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



    public function getAllUsersEarnings(){
      return [
        'earnings' => Earning::with('user')->where('user_id', '!=', env('ADMIN_ROLE_ID'))->get()
      ];
    }

    public function getAllAdminEarnings(){
      return [
        'earnings' => Earning::where('user_id', env('ADMIN_ROLE_ID'))->get()
      ];
    }

    public function withdrawAdminEarnings(){
      return [
        'status' => Earning::where('user_id', env('ADMIN_ROLE_ID'))->update([ 'transferred' => true ])
      ];
    }

    public function getAllUserEarnings(){
      return [
        'earnings' => Earning::where('user_id', request()->input('details.id'))->get()
      ];
    }

    public function getUserReferrals(){
      // return request()->all();
      return [
        'referrals' => User::find(request('details'))->referrals()->with('referral')->get()
      ];
    }

    public function getAllGameEarnings(){
      return [
        'earnings' => Earning::with('user')->where('game_id', request()->input('details.id'))->where('user_id', '!=', env("ADMIN_ROLE_ID"))->get()
      ];
    }

}
