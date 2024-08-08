<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Http\Helper\JwtToken;
use App\Models\AdminAuth;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
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
                return response()->json(["status" => true, "message" => "Login successfull", "userName" => $data->Name, "userId" => $data->id, "userImg" => $data->Image, "token" => $token]);
            } else {
                return response()->json(["status" => false, "message" => "Invalid user"]);
            }
        } catch (Exception $e) {
            return response()->json(["status" => false, "message" => $e]);
        }
    }
    // public function Logout(Request $request)
    // {
    // }

    public function UpdatePass(Request $request)
    {
        $validator = validator::make($request->all(), [
            'id' => 'required',
            'prev_pass' => 'required',
            'new_pass' => 'required',
        ]);

        if (!$validator->fails()) {
            $id = $request->input("id");
            $prev_pass = $request->input("prev_pass");
            $new_pass = $request->input("new_pass");

            $data = AdminAuth::find($id);

            if ($prev_pass == $data->Password) {
                AdminAuth::where("id", $id)->update([
                    "Password" => $new_pass
                ]);
                return response()->json(["status" => true, "msg" => "Password updated"]);
            } else {
                return response()->json(["status" => false, "msg" => "Old password not valid"]);
            }
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    public function UpdateUserInfo(Request $request)
    {
        try {
            $id = $request->input("id");
            $data = AdminAuth::find($id);

            if ($request->input("user_name")) {
                $user_name = $request->input("user_name");
                AdminAuth::where("id", $id)->update([
                    "Name" => $user_name,
                ]);
            } else if ($request->hasfile("user_img")) {
                $previesImgPath = public_path("Images/" . $data->Image);
                if (file_exists($previesImgPath)) {
                    File::delete($previesImgPath);
                }

                $user_img = $request->file("user_img");
                $userImgName = "Utility/" . time() . "_" . rand() . "." . $user_img->getClientOriginalExtension();
                $user_img->move(public_path("/Images/Utility"), $userImgName);

                AdminAuth::where("id", $id)->update([
                    "Image" => $userImgName,
                ]);
            }

            return response()->json(["status" => true, "msg" => "Information updated"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }
}