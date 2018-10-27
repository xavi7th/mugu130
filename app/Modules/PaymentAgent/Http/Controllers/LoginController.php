<?php

namespace App\Modules\PaymentAgent\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/agent';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    static function routes(){

      Route::get('login', 'LoginController@showLoginForm')->name('agent.login');
      Route::post('login', 'LoginController@login');
      Route::post('logout', 'LoginController@logout')->name('agent.logout');

      // // Registration Routes...
      // Route::get('register', 'RegisterController@showRegistrationForm')->name('register');
      // Route::post('register', 'RegisterController@register');
      //
      // // Password Reset Routes...
      // Route::get('password/reset', 'ForgotPasswordController@showLinkRequestForm')->name('password.request');
      // Route::post('password/email', 'ForgotPasswordController@sendResetLinkEmail')->name('password.email');
      // Route::get('password/reset/{token}', 'ResetPasswordController@showResetForm')->name('password.reset');
      // Route::post('password/reset', 'ResetPasswordController@reset');

    }

    /**
    * Show the application's login form.
    *
    * @return \Illuminate\Http\Response
    */
    public function showLoginForm(){
      return view('paymentagent::login');
    }

    /**
     * Validate the user login request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return void
     */
    protected function validateLogin(Request $request){
      dd($request->all());
        $this->validate($request, [
            $this->username() => 'required|string',
            'password' => 'required|string',
        ]);
    }

    /**
     * The user has been authenticated. We can redirect them to where we want or leave empty for the redirectto property to handle
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user){
      return redirect()->route('agent.home');
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function username(){
        return 'email';
    }

    /**
     * Log the agent out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();

        $request->session()->invalidate();

        return redirect()->route('agent.login');
    }

}
