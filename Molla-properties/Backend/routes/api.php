<?php

//___ Basic panel Controllers ___//
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\PlotController;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\ContactUsController;

//___ Admin panel Controllers ___//
use App\Http\Controllers\AdminController\AuthController;
use App\Http\Controllers\AdminController\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//___ Basic panel ___//
Route::prefix("/")->group(function () {
    Route::middleware(["ApiKeyVerify"])->group(function () {
        Route::controller(ProjectsController::class)->group(function () {
            Route::get("/on-going-projects", "OnGoingProject");
            Route::get("/up-coming-projects", "UpComingProject");
            Route::get("/completed-project", "CompletedProject");
            Route::post("/project-view", "ProjectView");
            Route::get("/latest-project", "LatestProject");
        });

        Route::controller(PlotController::class)->group(function () {
            Route::post("/plots", "Plots");
        });

        Route::controller(CommonController::class)->group(function () {
            Route::post("/galleries", "Gallerys");
            Route::get("/all-galleries-img", "AllGallerysImg");
            Route::get("/all-honorable-clients", "AllHonorableClients");
            Route::get("/all-news-and-events", "AllNewsAndEvents");
            Route::get("/all-blog-video", "AllBlogVideo");
            Route::get("/owners", "Owners");
        });

        Route::controller(ContactUsController::class)->group(function () {
            Route::post("/send-mail", "SendMail");
        });
    });
});

//___ Admin panel ___//
Route::prefix("/admin")->group(function () {
    Route::controller(AuthController::class)->group(function () {
        //___ Before Authentiction ___//
        Route::post("/signup", "SignUp");
        Route::post("/signin", "SignIn");
    });

    Route::controller(ProductController::class)->group(function () {
        Route::middleware(["ApiKeyVerify"])->group(function () {
            Route::get("/home", "Home");

            // Project
            Route::get("/projects", "Projects");
            Route::post("/add-project", "AddProject");
            Route::post("/project-details", "ProjectDetails");
            Route::post("/delete-project", "DeleteProject");

            // Gallery
            Route::get("/projects-name", "ProjectsName");
            Route::get("/gallery-img", "GalleryImg");
            Route::post("/add-gallery-img", "AddGalleryImage");
        });
    });
});