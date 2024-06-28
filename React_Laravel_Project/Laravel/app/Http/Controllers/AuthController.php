<?php

namespace App\Http\Controllers;

use App\Http\Helper\JwtToken;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function SignUp(Request $request)
    {
        try {
            User::create(["Name" => $request->input("name"), "Email" => $request->input("email"), "Password" => $request->input("password")]);

            return response()->json(["status" => true, "message" => "Registration successfull"]);
        } catch (Exception $e) {
            return response()->json(["status" => false, "message" => $e]);
        }
    }
    public function Login(Request $request)
    {
        try {
            $data = User::where("Email", $request->input("email"))->where("Password", $request->input("password"))->first();

            if ($data) {
                $token = JwtToken::CreateToken(1, "shovon");
                return response()->json(["status" => true, "message" => "Login successfull", "userName" => $data->Name, "token" => $token])->cookie("ACCESS_TOKEN", $token);
            } else {
                return response()->json(["status" => false, "message" => "Invalid user"]);
            }
        } catch (Exception $e) {
            return response()->json(["status" => false, "message" => $e]);
        }
    }
    public function Logout(Request $request)
    {
    }
}
