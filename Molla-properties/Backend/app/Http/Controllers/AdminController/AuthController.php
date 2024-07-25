<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Http\Helper\JwtToken;
use App\Models\AdminAuth;
use Exception;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function SignUp(Request $request)
    {
        try {
            AdminAuth::create(["Name" => $request->input("name"), "Email" => $request->input("email"), "Password" => $request->input("password")]);

            return response()->json(["status" => true, "message" => "Registration successfull"]);
        } catch (Exception $e) {
            return response()->json(["status" => false, "message" => $e]);
        }
    }
    public function SignIn(Request $request)
    {
        try {
            $data = AdminAuth::where("Email", $request->input("email"))->where("Password", $request->input("password"))->first();

            if ($data) {
                $token = JwtToken::CreateToken(1, $request->input("email"));
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
