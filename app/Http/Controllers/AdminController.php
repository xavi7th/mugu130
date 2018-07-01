<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Game;
use App\Earning;
use App\Message;
use App\Question;
use App\Referral;
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

    public function getDashboardPageDetails(){
      // Cache::flush();
      return  [
        'details' => [
                    'num_of_admins' => User::remember(120)->where('role_id', env('ADMIN_ROLE_ID'))->count(),
                    'num_of_questions' => Question::remember(120)->count(),
                    'num_of_messages' => Message::where('read', false)->remember(30)->count(),
                    'admin_message_status' => Message::remember(30)->find(1)->read,
                    'total_referrals' => Referral::remember(120)->count('referral_id'),
                    'total_referrers' => Referral::distinct()->remember(240)->count('user_id'),
                    'top_referrer' => Referral::select(DB::raw('count(referral_id) as referral_count, user_id'))->groupBy('user_id')->orderBy('referral_count', 'DESC')->remember(240)->first()->load(['user' => function ($q) { $q->remember(240); }]),
                    'active_subscribers' => User::where('available_units', '>', 35)->remember(120)->count(),
                    'verified_accounts' => User::where('verified', true)->remember(240)->count(),
                    'suspended_accounts' => User::where('useraccstatus', 'suspended')->remember(240)->count(),
                    'total_approved_withdrawals' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->remember(120)->count(),
                    'total_pending_withdrawals' => Transaction::totalNumberOfRequests(),
                    'no_of_cash_approved_withdrawals' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '>', (1000 - env('TRANSACTION_FEE')))->remember(120)->count(),
                    'no_of_airtime_approved_withdrawals' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '<=', (1000 - env('TRANSACTION_FEE')))->remember(120)->count(),
                    'total_cash_approved_withdrawals_amount' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '>', (1000 - env('TRANSACTION_FEE')))->remember(120)->sum('amount'),
                    'total_airtime_approved_withdrawals_amount' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '<=', (1000 - env('TRANSACTION_FEE')))->remember(120)->sum('amount'),
                    'total_amount_withdrawn' => Transaction::totalAmountWithdrawn(),
                    'total_wallet_amount' => User::totalWalletAmount(),
                    'total_wallet_funding' => Transaction::totalWalletFundingAmount(),
                    'total_number_of_wallet_funding' => Transaction::totalWalletFundingCount(),
                    'total_number_of_online_wallet_fundings' => Transaction::totalOnlineWalletFundingCount(),
                    'total_number_of_offline_wallet_fundings' => Transaction::totalOfflineWalletFundingCount(),
                    'total_all_time_user_earnings' => Earning::totalUserEarnings(),
                    'total_user_untransferred_earnings' => Earning::totalUserUntransferredEarnings(),
                    'total_user_transferred_earnings' => Earning::totalUserTransferredEarnings(),
                    'total_all_time_admin_earnings' => Earning::totalAdminEarnings(),
                    'total_admin_untransferred_earnings' => Earning::totalAdminUntransferredEarnings(),
                    'total_admin_transferred_earnings' => Earning::totalAdminTransferredEarnings(),
                    'admin_month_earnings' => Earning::totalAdminMonthEarnings(),
                    'admin_previous_month_earnings' => Earning::totalAdminPrevMonthEarnings(),
                    'total_valid_games_played' => Game::validGamesCount(),
                    'total_users_in_all_games' => Game::totalUsersInAllGames(),
                    'top_player' => UserGameSession::remember(60)->groupBy('user_id')->orderBy('games_count', 'desc')->select('user_id', DB::raw('count(user_id) as games_count'), DB::raw('sum(earning) as user_earnings'))->first()->load(['user' => function ($q) { $q->remember(240); }]),
                    'top_winner' => UserGameSession::remember(60)->groupBy('user_id')->orderBy('user_earnings', 'desc')->select('user_id', DB::raw('count(user_id) as games_count'), DB::raw('sum(earning) as user_earnings'))->first()->load(['user' => function ($q) { $q->remember(240); }]),
                ]
      ];
    }


    public function getProfilePageDetails(){
        return [
          'questions' => Question::latest()->get()
        ];
    }

    public function getQuestionsPageDetails(){
        return [
          'details' => Question::latest()->remember(10)->paginate(env('ROWS_PER_PAGE'))
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
        'details' => Game::latest()->remember(10)->paginate(env('ROWS_PER_PAGE')),

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
          'new_users' => User::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->count(),
          // 'new_referrals' => Referral::with('user')->whereMonth('created_at', Carbon::parse(request('details'))->month)->get(),
          'top_ganer' => UserGameSession::with('user')->select(DB::raw('count(*) as gamer_count, user_id'))->whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first(),
          'online_payments' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->where('trans_type', 'wallet funding')->where('channel', 'online')->count(),
          'offline_payments' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->where('trans_type', 'wallet funding')->where('channel', 'offline')->count(),
          'payments_by_earnings' => Earning::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->where('id', '!=', 0)->count(),
          'number_of_games' => Game::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->count(),
          'total_num_of_players' => UserGameSession::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->count(),
          'online_payments_amount' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->where('trans_type', 'wallet funding')->where('channel', 'online')->sum('amount'),
          'offline_payments_amount' => Transaction::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->where('trans_type', 'wallet funding')->where('channel', 'offline')->sum('amount'),
          'admin_payments_by_earnings' => Earning::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->where('id', 0)->count(),
        ]
      ];
    }

    public function getDailyStatistics(){
      // return ;
      return [
          'stats' => [
            'date' => Carbon::parse(request('details'))->day,
            // 'new_users' => User::whereDay('created_at', Carbon::parse(request('details'))->day)->whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->count(),
            'new_users' => User::whereDate('created_at', Carbon::parse(request('details')))->count(),
            // 'new_referrals' => Referral::with('user')->whereDay('created_at', Carbon::parse(request('details'))->day)->get(),
            'top_ganer' => UserGameSession::with('user')->select(DB::raw('count(*) as gamer_count, user_id'))->whereDate('created_at', Carbon::parse(request('details')))->groupBy('user_id')->orderBy('gamer_count', 'DESC')->first(),
            'online_payments' => Transaction::whereDay('created_at', Carbon::parse(request('details'))->day)->where('trans_type', 'wallet funding')->where('channel', 'online')->count(),
            'offline_payments' => Transaction::whereDay('created_at', Carbon::parse(request('details'))->day)->where('trans_type', 'wallet funding')->where('channel', 'offline')->count(),
            'number_of_games' => Game::whereDay('created_at', Carbon::parse(request('details'))->day)->count(),
            'total_num_of_players' => UserGameSession::whereDate('created_at', Carbon::parse(request('details')))->count(),
            'online_payments_amount' => Transaction::whereDate('created_at', Carbon::parse(request('details')))->where('trans_type', 'wallet funding')->where('channel', 'online')->sum('amount'),
            'offline_payments_amount' => Transaction::whereDate('created_at', Carbon::parse(request('details')))->where('trans_type', 'wallet funding')->where('channel', 'offline')->sum('amount'),
            'payments_by_earnings' => Earning::whereDate('created_at', Carbon::parse(request('details')))->where('user_id', '!=', 0)->count(),
            'admin_payments_by_earnings' => Earning::whereDate('created_at', Carbon::parse(request('details')))->where('user_id', 0)->count(),
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
        'details' => Transaction::with(['user' => function ($q) { $q->remember(10); },])->latest()->remember(10)->paginate(env('ROWS_PER_PAGE'))
      ];
    }

    public function createTransaction(){
      // return request()->all();

      $user = User::find(request()->input('details.id'));

      $user->available_units = $user->available_units + request()->input('details.units');
      $user->units_purchased = $user->units_purchased + request()->input('details.units');
      $user->save();

      $trans = new Transaction;

      $trans->trans_type = 'wallet funding';
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
        // 'details.phone1' => 'required'
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

      $user = User::find(request()->input('details.id'));
      $user->verified = true;
      $user->save();

      TransactionalMail::sendWelcomeMail($user->firstname, $user->email);

      return [
        'status' => true
      ];
    }

    public function getUsersPageDetails(){
      return [
        'details' => User::with(['untransferred_earnings' => function ($q) { $q->remember(10); }, 'referrals' => function ($q) { $q->remember(10); } ])->where('role_id', env("USER_ROLE_ID"))->latest()->remember('10')->paginate(env('ROWS_PER_PAGE'))
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

      if (request()->input('details.id') == env('USER_ROLE_ID')) {
          return response()->json(['message' => 'You really don\'t want to delete this message. Trust me' ], 409);
      }

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
        'details' => Earning::with(['user' => function ($q) { $q->remember(10); }])->where('user_id', '!=', env('ADMIN_ROLE_ID'))->latest()->remember(10)->paginate(env('ROWS_PER_PAGE')),
      ];
    }

    public function getAllAdminEarnings(){
      return [
        'details' => Earning::where('user_id', env('ADMIN_ROLE_ID'))->latest()->remember(10)->paginate(env('ROWS_PER_PAGE')),
        'extras' => [
          'total_transferred' => Earning::with(['user' => function ($q) { $q->remember(10); }])->where('user_id', env('ADMIN_ROLE_ID'))->where('transferred', true)->remember(10)->sum('amount'),
          'total_untransferred' => Earning::with(['user' => function ($q) { $q->remember(10); }])->where('user_id', env('ADMIN_ROLE_ID'))->where('transferred', false)->remember(10)->sum('amount'),
        ]
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
      // return request()->all();
      return [
        'earnings' => Earning::with('user')->where('game_id', request()->input('game'))->where('user_id', '!=', env("ADMIN_ROLE_ID"))->get()
      ];
    }

}
