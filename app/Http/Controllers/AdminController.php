<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

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
}
