<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function SignUp(Request $request)
    {
        $name = $request->input("name");
        $email = $request->input("email");
        $password = $request->input("password");

        return response()->json(["name" => $name, "email" => $email, "password" => $password]);
    }

    public function SignIn(Request $request) {
        return "sign in";
    }
}
