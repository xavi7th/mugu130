<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Validator;
use App\User;
use App\Message;

// Cache::flush();

class HomeController extends Controller
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
    public function index()
    {
        // Cache::flush();
        if (Auth::user()->useraccstatus == 'admin') {
          # code...
          return redirect()->route('admin');
        }
        return view('dashboard');
    }



    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function getApiKey()
    {
        return [ 'token' => Auth::user()->api_token ];
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
