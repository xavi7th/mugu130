<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Game;
use App\Role;
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

	/**
	 * All Admin routes
	 *
	 * @return return type
	 */
	public static function routes()
	{
		$c = 'AdminController@';

		Route::group(['prefix' => 'api'], function () use ($c) {

			Route::post('/get-dashboard-page-details', $c . 'getDashboardPageDetails');

			Route::post('/get-questions-page-details', $c . 'getQuestionsPageDetails');

			Route::post('/get-profile-page-details', $c . 'getProfilePageDetails');

			Route::post('/get-admins-page-details', $c . 'getAdminsPageDetails');

			Route::get('/get-users-page-details', $c . 'getUsersPageDetails');

			Route::post('/update-user-details', $c . 'updateUserDetails');

			Route::get('/get-questions-page-details', $c . 'getQuestionsPageDetails');

			Route::post('/edit-question', $c . 'editQuestion');

			Route::post('/delete-question', $c . 'deleteQuestion');

			Route::post('/create-question', $c . 'createQuestion');

			Route::post('/edit-admin', $c . 'editAdmin');

			Route::post('/delete-admin', $c . 'deleteAdmin');

			Route::post('/create-admin', $c . 'createAdmin');

			Route::post('/remove-admin', $c . 'removeAdmin');

			Route::post('/get-live-game-session', $c . 'getLiveGameSession');

			Route::get('/get-all-games', $c . 'getAllGames');

			Route::post('/get-game-records', $c . 'getGameRecords');

			Route::post('/get-logs-by-day', $c . 'getLogsByDay');

			Route::post('/get-profile-page-details', $c . 'confirmWithdrawal');

			Route::get('/get-all-transactions', $c . 'getAllTransactions');

			Route::post('/create-transaction', $c . 'createTransaction');

			Route::post('/mark-transaction-as-paid', $c . 'markTransactionAsPaid');

			Route::post('/get-all-user-earnings', $c . 'getAllUserEarnings');

			Route::post('/get-user-referrals', $c . 'getUserReferrals');

			Route::post('/get-monthly-statistics', $c . 'getMonthlyStatistics');

			Route::post('/get-daily-statistics', $c . 'getDailyStatistics');

			Route::post('/send-broadcast', $c . 'sendBroadcast');

			Route::post('/send-message', $c . 'sendMessage');

			Route::post('/get-referrals-by-user', $c . 'getReferralsByUser');

			Route::post('/get-unverified-users-count', $c . 'getUnverifiedUsersCount');

			Route::post('/edit-user', $c . 'editUser');

			Route::post('/delete-user', $c . 'deleteUser');

			Route::post('/suspend-user', $c . 'suspendUser');

			Route::post('/activate-user', $c . 'activateUser');

			Route::post('/verify-user', $c . 'verifyUser');

			Route::put('/verify-all-users', $c . 'verifyAllUsers');

			Route::post('/database-search/{resource}', $c . 'databaseSearch');

			Route::post('/get-all-messages', $c . 'getAllMessages');

			Route::post('/reply-message', $c . 'replyMessage');

			Route::post('/mark-message-as-read', $c . 'markMessageAsRead');

			Route::post('/delete-message', $c . 'deleteMessage');

			Route::get('/get-all-users-earnings', $c . 'getAllUsersEarnings');

			Route::get('/get-earnings-by-users-page-details', $c . 'getEarningsByUsersPageDetails');

			Route::get('/get-all-admin-earnings', $c . 'getAllAdminEarnings');

			Route::post('/withdraw-admin-earnings', $c . 'withdrawAdminEarnings');

			Route::get('/get-all-user-earnings', $c . 'getAllUserEarnings');

			Route::get('/get-all-game-earnings', $c . 'getAllGameEarnings');

		});

		Route::get('/{subcat?}', $c . 'showDashboard')
			->where('subcat', '^((?!(agents|anotherWordInCase)).)*') //Matches all routes except routes that start with the list provided.
			->name('admin.dashboard');
	}

	public function showDashboard()
	{
        // Cache::flush();

		if (!Auth::user()->isAdmin()) {
			return redirect()->route('dashboard');
		}
		return view('admin');
	}

	public function getDashboardPageDetails()
	{
      // Cache::flush();
		return [
			'details' => [
				'num_of_admins' => User::where('role_id', Role::admin_id())->count(),
				'num_of_questions' => Question::count(),
				'num_of_messages' => Message::where('read', false)->count(),
				'admin_message_status' => Message::find(1)->read,
				'total_referrals' => Referral::count('referral_id'),
				'total_referrers' => Referral::distinct()->count('user_id'),
				'top_referrer' => Referral::select(DB::raw('count(referral_id) as referral_count, user_id'))->groupBy('user_id')->orderBy('referral_count', 'DESC')->first()->load(['user']),
				'active_subscribers' => User::where('available_units', '>', 35)->count(),
				'verified_accounts' => User::where('verified', true)->count(),
				'suspended_accounts' => User::where('useraccstatus', 'suspended')->count(),
				'total_approved_withdrawals' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->count(),
				'total_pending_withdrawals' => Transaction::totalNumberOfRequests(),
				'amount_pending_withdrawals' => Transaction::totalSumOfPendingRequests(),
				'no_of_cash_approved_withdrawals' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '>', (1000 - env('TRANSACTION_FEE')))->count(),
				'no_of_airtime_approved_withdrawals' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '<=', (1000 - env('TRANSACTION_FEE')))->count(),
				'total_cash_approved_withdrawals_amount' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '>', (1000 - env('TRANSACTION_FEE')))->sum('amount'),
				'total_airtime_approved_withdrawals_amount' => Transaction::where('trans_type', 'withdrawal')->where('status', 'completed')->where('amount', '<=', (1000 - env('TRANSACTION_FEE')))->sum('amount'),
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
				'top_player' => UserGameSession::groupBy('user_id')->orderBy('games_count', 'desc')->select('user_id', DB::raw('count(user_id) as games_count'), DB::raw('sum(earning) as user_earnings'))->first()->load(['user']),
				'top_winner' => UserGameSession::groupBy('user_id')->orderBy('user_earnings', 'desc')->select('user_id', DB::raw('count(user_id) as games_count'), DB::raw('sum(earning) as user_earnings'))->first()->load(['user']),
			]
		];
	}


	public function getProfilePageDetails()
	{
		return [
			'questions' => Question::latest()->get()
		];
	}

	public function getQuestionsPageDetails()
	{
		$paginator = Question::latest()->paginate(env('ROWS_PER_PAGE'));
		$data = $paginator->getCollection();
		$data->makeVisible('correct_option');
		$paginator->setCollection($data);
		return [
			'details' => $paginator
		];
	}

	public function editQuestion()
	{
		return [
			'status' => Question::find(request()->input('details.id'))->update(request()->input('details'))
		];
	}

	public function deleteQuestion()
	{
		return [
			'status' => Question::find(request()->input('details.id'))->delete()
		];
	}

	public function createQuestion()
	{
		$rules = [
			'details.question' => 'required|string',
			'details.option_1' => 'required|string',
			'details.option_2' => 'required|string',
			'details.option_3' => 'required|string',
			'details.option_4' => 'required|string',
			'details.correct_option' => 'required|string',
		];

		$validator = Validator::make(request()->all(), $rules);

		if ($validator->fails()) {
			return response()->json(['errors' => $validator->messages()], 422);
		}

		return [
			'status' => Question::create(request()->input('details'))
		];
	}







	public function getAdminsPageDetails()
	{
		return [
			'admins' => User::where('role_id', Role::admin_id())->get()
		];
	}

	public function editAdmin()
	{
		$this->validate(request(), [
			'details.email' => 'required',
			'details.phone1' => 'required'
		]);
		return [
			'status' => User::find(request()->input('details.id'))->update(request()->input('details'))
		];
	}

	public function deleteAdmin()
	{
		if (!Auth::user()->isSuperAdmin()) {
			return response()->json(['message' => 'Action denied. Super Admin only'], 410);
		}
		if (User::adminDeletable()) {
			return [
				'status' => User::find(request()->input('details.id'))->delete()
			];
		} else {
			return response()->json(['message' => 'Last Admin not deletable'], 410);
		}

	}

	public function createAdmin()
	{

		if (!Auth::user()->isSuperAdmin()) {
			return response()->json(['message' => 'Action denied. Super Admin only'], 410);
		}
		User::unguard();
		return [
			'status' => User::find(request()->input('details.id'))->update([
				'role_id' => Role::admin_id()
			])
		];
	}

	public function removeAdmin()
	{
		if (!Auth::user()->isSuperAdmin()) {
			return response()->json(['message' => 'Action denied. Super Admin only'], 410);
		}
		User::unguard();

		return [
			'status' => User::find(request()->input('details.id'))->update([
				'role_id' => Role::user_id()
			])
		];
	}

	public function getLiveGameSession()
	{
		return [
			'live_session' => optional(optional(Game::active())->user_game_sessions)->load('user')
		];
	}

	public function getAllGames()
	{
		return [
			'details' => Game::latest()->paginate(env('ROWS_PER_PAGE')),

		];
	}

	public function getGameRecords()
	{
		return [
			'games_records' => UserGameSession::with('user')->where('game_id', request()->input('details.id'))->get()
		];
	}

	public function getLogsByDay()
	{
		$grouped = UserGameSession::whereDate('created_at', Carbon::parse(request()->input('details')))->get()->mapToGroups(function ($item, $key) {
			return [$item['game_id'] => $item];
		});

		return [
			'daily_log' => $grouped
		];
	}

	public function getMonthlyStatistics()
	{
		return [
			'stats' => [
				'new_users' => User::whereMonth('created_at', Carbon::parse(request('details'))->month)->whereYear('created_at', Carbon::parse(request('details'))->year)->count(),
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

	public function getDailyStatistics()
	{
		return [
			'stats' => [
				'date' => Carbon::parse(request('details'))->day,
				'new_users' => User::whereDate('created_at', Carbon::parse(request('details')))->count(),
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

	public function confirmWithdrawal($id)
	{
		return [
			'status' => Transaction::find($id)->update([
				'status' => 'paid'
			])
		];
	}

	public function getAllTransactions()
	{
		return [
			'details' => Transaction::with(['user'])->latest()->paginate(env('ROWS_PER_PAGE'))
		];
	}

	public function createTransaction()
	{
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

	public function markTransactionAsPaid()
	{
      // return request()->input('details');
		$user = User::find(request()->input('details.user.id'));
		TransactionalMail::sendWithdrawalProcessedMail($user, request()->input('details.amount'), request()->input('details.trans_type'), request()->input('details.charges'), request()->input('details.amount') + request()->input('details.charges'));
		return [
			'status' => Transaction::find(request()->input('details.id'))->update([
				'status' => 'completed'
			])
		];
	}

	public function getReferralsByUser($id)
	{
		return Referral::where('user_id', $id)->with('user', 'referred');
	}

	public function getUnverifiedUsersCount()
	{

		return [
			'unverified_users' => User::where('verified', false)->count()
		];
	}

	public function editUser()
	{
      // return request()->all();
		$this->validate(request(), [
			'details.email' => 'required'
		]);

		return [
			'status' => User::find(request()->input('details.id'))->update(array_only(request()->input('details'), ['firstname', 'lastname', 'acct_no', 'password']))
		];
	}

	public function deleteUser()
	{
		return [
			'status' => User::find(request()->input('details.id'))->delete()
		];
	}

	public function suspendUser()
	{
		User::unguard();

		return [
			'status' => User::find(request()->input('details.id'))->update([
				'useraccstatus' => 'suspended'
			])
		];
	}

	public function activateUser()
	{
		User::unguard();

		return [
			'status' => User::find(request()->input('details.id'))->update([
				'useraccstatus' => 'active'
			])
		];
	}

	public function verifyUser()
	{

		$user = User::find(request()->input('details.id'));
		$user->verified = true;
		$user->save();

      // TransactionalMail::sendWelcomeMail($user->firstname, $user->email);

		return [
			'status' => true
		];
	}

	public function verifyAllUsers()
	{
		return [
			'status' => $user = User::where('verified', false)->update(['verified' => true])
		];
	}

	public function getUsersPageDetails()
	{
		return [
			'details' => User::with(['untransferred_earnings', 'referrals'])->where('role_id', Role::user_id())->latest()->paginate(env('ROWS_PER_PAGE'))
		];
	}

	public function updateUserDetails()
	{

		$this->validate(request(), [
			'details.email' => 'required',
			'details.phone1' => 'required'
		]);
		return [
			'status' => Auth::user()->updateUserDetails(),
		];
	}

	public function databaseSearch($resource)
	{
      // return $resource;
		$searchPhrase = request()->input('details');
		$results = [];

		switch ($resource) {
			case 'user':
				$results = User::with(['transactions', 'earnings', 'games', 'referrals'])
					->where('firstname', 'like', '%' . $searchPhrase . '%')
					->orWhere('lastname', 'like', '%' . $searchPhrase . '%')
					->orWhere('email', 'like', '%' . $searchPhrase . '%')
					->paginate(env('ROWS_PER_PAGE'));
				break;

			case 'transaction':
				$results = Transaction::pendingCashouts();
				break;

			default:
				break;
		}


		return [
			'details' => $results
		];
	}





	public function getAllMessages()
	{
		return [
			'messages' => Message::where('user_id', Role::admin_id())->orWhere('sender_id', Role::user_id())->get()
		];
	}

	public function replyMessage()
	{

		Message::fromAdmin();

		return [
			'status' => true
		];
	}

	public function markMessageAsRead()
	{
		return [
			'status' => Message::find(request()->input('details.id'))->update([
				'read' => true
			])
		];
	}

	public function deleteMessage()
	{

		if (request()->input('details.id') == Role::user_id()) {
			return response()->json(['message' => 'You really don\'t want to delete this message. Trust me'], 409);
		}
		return [
			'status' => Message::find(request()->input('details.id'))->delete()
		];
	}

	public function sendBroadcast()
	{
		Cache::flush();
		Message::toAll();
		return [
			'status' => true
		];
	}

	public function sendMessage()
	{
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




	public function getAllUsersEarnings()
	{
		return [
			'details' => Earning::with(['user'])->where('user_id', '!=', Role::admin_id())->latest()->paginate(env('ROWS_PER_PAGE')),
		];
	}

	public function getAllAdminEarnings()
	{
		return [
			'details' => Earning::where('user_id', Role::admin_id())->latest()->paginate(env('ROWS_PER_PAGE')),
			'extras' => [
				'total_transferred' => Earning::with(['user'])->where('user_id', Role::admin_id())->where('transferred', true)->sum('amount'),
				'total_untransferred' => Earning::with(['user'])->where('user_id', Role::admin_id())->where('transferred', false)->sum('amount'),
			]
		];
	}

	public function withdrawAdminEarnings()
	{
		return [
			'status' => Earning::where('user_id', Role::admin_id())->update(['transferred' => true])
		];
	}

	public function getEarningsByUsersPageDetails()
	{
		Cache::flush();
		return [
			'details' => User::with(['earnings'])->where('role_id', Role::user_id())->latest()->paginate(env('ROWS_PER_PAGE'))
		];
	}

	public function getAllUserEarnings()
	{
		return [
			'earnings' => Earning::where('user_id', request()->input('details.id'))->get()
		];
	}

	public function getUserReferrals()
	{
		return [
			'referrals' => User::find(request('details'))->referrals()->with('referral')->get()
		];
	}

	public function getAllGameEarnings()
	{
		return [
			'earnings' => Earning::with('user')->where('game_id', request()->input('game'))->where('user_id', '!=', Role::admin_id())->get()
		];
	}

}
