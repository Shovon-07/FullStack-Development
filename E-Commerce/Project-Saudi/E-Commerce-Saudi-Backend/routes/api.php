<?php

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

Route::controller(UserController::class)->group(function() {
    Route::get("/user-data", "UserData");
    Route::post("/create-user", "CreateUser");

    // Route::get("/get-image", "GetImage");
    // Route::post("/create-image", "CreateImage");
});

Route::controller(ProcessImgController::class)->group(function(){
    Route::post('/process-img', 'ProcessImg');
    Route::get('/get-processed-img', 'GetProcessedImg');
});