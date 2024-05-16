<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function UserData(Request $request) {
        $userData = User::all();
        return $userData;
    }

    public function Login(Request $request)
    {
        $email = $request->input("email");
        $password = $request->input("password");
        $status = 1;

        $adminEmail = "admin@mail.com";
        $adminPassword = "admin";

        $workerEmail = "worker@mail.com";
        $workerPassword = "worker";

        if ($email === $adminEmail && $password === $adminPassword) {
            $data = array($email, $password, $status);
            return $data;
        } if ($email === $workerEmail && $password === $workerPassword) {
            $data = array($email, $password, $status);
            return $data;
        } else {
            return "Invalid user";
        }

        // $userData = User::where('Email','=', $email)->where('Password','=', $password)->first();
        // $userEmail = $userData->Email;

        // try {
        //     if($userData != null) {
        //         return response()->json([
        //             "status" => "admin",
        //             "message" => "Login succesfull",
        //             "email" => $userEmail,
        //             "token" => md5($userEmail)
        //         ]);
        //     }
        //     // else if($userEmail === 'worker@mail.com') {
        //     //     return response()->json([
        //     //         "status" => "worker",
        //     //         "message" => "Login succesfull",
        //     //         "token" => md5($userEmail)
        //     //     ]);
        //     // }
        //     else {
        //         return response()->json([
        //             "status" => "failed",
        //             "message" => "User Not found",
        //             "email" => "Not found",
        //             "token" => "No token added"
        //         ]);
        //     }
        // } catch (Exception $exception) {
        //     return response()->json([
        //         "status" => "failed",
        //         "message" => $exception,
        //         "email" => "Not found",
        //         "token" => "No token added"
        //     ]);
        // }
    }
}
