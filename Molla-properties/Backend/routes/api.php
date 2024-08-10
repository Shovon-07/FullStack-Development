<?php

//___ Basic panel Controllers ___//
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\PlotController;
use App\Http\Controllers\CommonController;
use App\Http\Controllers\ContactUsController;

//___ Admin panel Controllers ___//
use App\Http\Controllers\AdminController\AuthController;
use App\Http\Controllers\AdminController\ProductController;
use App\Http\Controllers\AdminController\MailForDbController;
use App\Http\Controllers\AdminController\AdminCommonController;

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

            // Home content
            Route::get("/home-content", "GetHomeContent");
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

        //___ After Authentiction ___//
        Route::middleware(["ApiKeyVerify"])->group(function () {
            Route::post("/get-user-info", "GetUserInfo");
            Route::post("/update-password", "UpdatePass");
            Route::post("/update-user-info", "UpdateUserInfo");
        });
    });

    Route::controller(ProductController::class)->group(function () {
        Route::middleware(["ApiKeyVerify"])->group(function () {
            // Project
            Route::get("/projects", "Projects");
            Route::post("/add-project", "AddProject");
            Route::post("/project-details", "ProjectDetails");
            Route::get("/projects-name", "ProjectsName");
            Route::post("/delete-project", "DeleteProject");
            Route::post("/update-project", "UpdateProject");

            // Plot
            Route::post("/add-plot", "AddPlot");
            Route::post("/get-plots", "GetPlots");
            Route::post("/delete-plot", "DeletePlot");

            // Gallery
            Route::get("/gallery-img", "GalleryImg");
            Route::post("/add-gallery-img", "AddGalleryImage");
            Route::post("/get-project-gallery", "GetProjectGallery");
            Route::post("/delete-img", "DeleteImg");

            // Honorable Client
            Route::get("/get-hon-client", "GetHonClient");
            Route::post("/add-hon-client", "AddHonClient");
            Route::post("/delete-client", "DeleteClient");

            // News and event
            Route::get("/get-news-event", "GetNewsEvent");
            Route::post("/add-news-event", "AddNewsEvent");
            Route::post("/delete-news", "DeleteNews");

            // Blog
            Route::get("/get-blog", "GetBlog");
            Route::post("/add-blog", "AddBlog");
            Route::post("/delete-blog", "DeleteBlog");
        });
    });

    Route::controller(MailForDbController::class)->group(function () {
        Route::middleware(["ApiKeyVerify"])->group(function () {
            Route::get("/get-mails", "GetMails");
            Route::post("/get-single-mail", "GetSingleMail");
            Route::post("/delete-email", "DeleteEmail");
            Route::get("/get-unread-email", "GetUnreadEmail");
            Route::post("/mark-as-read", "MarkAsRead");
            Route::post("/mark-as-unread", "MarkAsUnread");
        });
    });

    Route::controller(AdminCommonController::class)->group(function () {
        Route::middleware(["ApiKeyVerify"])->group(function () {
            Route::get("/home-content", "GetHomeContent");
            Route::post("/update-banner", "UpdateBanner");
            Route::post("/update-mission-vission", "UpdateMissionVission");

            Route::get("/get-about-us", "GetAboutUs");
            Route::get("/update-about-us", "UpdateAboutUs");
        });
    });
});