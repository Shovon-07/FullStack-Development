<?php

use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::controller(MaterialController::class)->group(function(){
    // Get material data
    Route::get('/home','index');

    // Post material data
    Route::post('/store','store');

    // Updae stock data
    Route::post('/updateStock','updateStock');

    // update deduct
    Route::post('/updateDeduct','updateDeduct');

    // price
    Route::get('/price','price');
    Route::post('/updatePrice','updatePrice');
});
    
// Invoice
Route::controller(InvoiceController::class)->group(function(){
    Route::get('/get-material','GetMaterial');
    Route::post('/store-sell','store');

    Route::post('/order-details','orderDetails');

    // For pending order page
    Route::get('/pending-order','pendingOrders');

    // For complete order page
    Route::get('/complete-order','completeOrders');
    
    Route::post('/update-completeOrder','updateCompleteOrder');
    Route::post('/complete-pendingOrder','completePendingOrders');
    Route::post('/cancel-sell','cancel');

    // Delivered order (For history page)
    Route::get('/delivery-order','deliveryOrders');
    
    // Statistics
    Route::get('/statisticSold','statisticSold');
    Route::get('/statisticBuy','statisticBuy');
    Route::get('/balance','balance');
});

Route::controller(UserController::class)->group(function(){
    Route::get('/userData','UserData');
    Route::post('/login', 'Login');
});