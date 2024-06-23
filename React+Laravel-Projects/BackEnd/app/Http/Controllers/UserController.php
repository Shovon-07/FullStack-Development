<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function SignUp(Request $request)
    {
        try {
            $name = $request->input("name");
            $email = $request->input("email");
            $password = $request->input("password");

            // User::create(["Name" => $name, "Email" => $email, "Password" => Hash::make($password)]);
            User::create(["Name" => $name, "Email" => $email, "Password" => $password]);
            return response()->json(["status" => true, "msg" => "Registration succeded"]);
        } catch (Exception $e) {
            return response()->json(["status" => false, "msg" => $e]);
        }
    }

    public function SignIn(Request $request)
    {
        try {
            $email = $request->input("email");
            $password = $request->input("password");
            // $hashedPassword = Hash::make($password);

            $data = User::where("Email", $email)->where("Password", $password)->first();

            if ($data != null) {
                return response()->json(["status" => true, "msg" => "Login successed"]);
            } else {
                return response()->json(["status" => false, "msg" => "Invalid user"]);
            }
        } catch (Exception $e) {
            return response()->json(["status" => false, "msg" => $e]);
        }
    }
}
