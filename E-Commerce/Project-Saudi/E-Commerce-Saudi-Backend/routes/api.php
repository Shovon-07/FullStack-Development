<?php

use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProcessImgController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
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
    // Route::get('/price/{id}','price');
    Route::get('/price','price');
    Route::post('/updatePrice','updatePrice');
});

// Invoice
Route::controller(InvoiceController::class)->group(function(){
    Route::get('/get-material','GetMaterial');
    Route::post('/store-sell','store');
});

Route::controller(ProcessImgController::class)->group(function(){
    Route::get('/get-processed-img', 'GetProcessedImg');
    Route::post('/process-img', 'ProcessImg');
});
