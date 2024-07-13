<?php

use App\Http\Controllers\LatestProjectController;
use App\Http\Controllers\ContactUsController;
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

//___ Basic panel ___//
Route::prefix("/")->group(function () {
    Route::controller(LatestProjectController::class)->group(function () {
        Route::get("/latest-project", "LatestProject");
        Route::post("/create-latest-project", "CreateLatestProject");
    });

    Route::controller(ContactUsController::class)->group(function () {
        Route::post("send-mail", "SendMail");
    });
});

//___ Admin panel ___//
Route::prefix("/admin")->group(function () { });
