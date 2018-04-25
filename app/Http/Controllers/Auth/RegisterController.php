<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use App\Mail\AccountCreated;
use App\Mail\TransactionalMail;
use App\Referral;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Carbon\Carbon;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    // protected $redirectTo = '/dashboard';
    protected function redirectTo(){
      session(['NEW_REG' => true]);
      return route('register.success');
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
      // _dd($data); exit;
        return Validator::make($data, [
            'terms' => 'required|accepted',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|min:4|max:255|confirmed',
            'firstname' => 'required|string|username|max:255',
            'lastname' => 'required|string|username|max:255',
            'referrer_email' => 'sometimes|nullable|string|email|max:100|exists:users,email'
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
      // dd(request()->input());
      $token = str_random( 100 );
      TransactionalMail::sendverificationMail($token);

      DB::beginTransaction();

        $user = User::create([
          'password'=> request()->input('password'),
          'email'=> request()->input('email'),
          'firstname'=> request()->input('firstname'),
          'lastname'=> request()->input('lastname'),

          // 'created_at'=> Carbon::now(),
          // 'confirmation_token' => $token,
        ]);

        // Create a record for this referrer
        if (request()->input('referrer_id')) {
          Referral::new(request()->input('referrer_id'), $user->id );
        }

      DB::commit();

        return $user;
    }
}
