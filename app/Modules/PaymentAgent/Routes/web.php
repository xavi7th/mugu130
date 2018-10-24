<?php
use App\Modules\PaymentAgent\Http\Controllers\PaymentAgentController;

use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => 'agent'], function(){

    PaymentAgentController::routes();

});
