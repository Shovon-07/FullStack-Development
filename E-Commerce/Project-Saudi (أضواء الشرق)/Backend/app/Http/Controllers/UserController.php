<?php

namespace App\Http\Controllers;

use App\Models\Images;
use App\Models\User;
use Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function UserData(Request $request) {
        $userData = User::all();
        return $userData;
    }
    // function CreateUser(Request $request) {
    //     User::create([
    //     'Name' => $request->input('name'),
    //     'Email' => $request->input('email'),
    //     'Password' => Hash::make($request->input('password'))
    //     ]);
    //     return "User created";
    // }

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
    }
}
