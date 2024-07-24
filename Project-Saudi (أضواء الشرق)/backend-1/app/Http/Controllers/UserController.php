<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function UserData(Request $request)
    {
        $userData = User::all();
        return $userData;
    }

    public function Login(Request $request)
    {
        try {
            $email = $request->input("email");
            $password = $request->input("password");

            $data = User::where("Email", $email)->where("Password", $password)->first();
            if ($data) {
                $token = $data->Role.md5($email);
                return response()->json(["status" => true, "msg" => "Login successfull", "token" => $token, "role" => $data->Role]);
            } else {
                return response()->json(["status" => false, "msg" => "Invalid user",]);
            }
        } catch (Exception $e) {
            return response()->json(["status" => false, "msg" => $e,]);
        }
    }
}

// Admin : token = Adminedb0e96701c209ab4b50211c856c50c4; role = Admin

// Worker : token = worker95c265b2580de762ec1f66e99b7dbc93; role = worker