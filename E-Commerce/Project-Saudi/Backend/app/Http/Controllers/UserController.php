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
    function CreateUser(Request $request) {
        User::create([
        'Name' => $request->input('name'),
        'Email' => $request->input('email'),
        'Password' => Hash::make($request->input('password'))
        ]);
        return "User created";
    }

    // function GetImage(Request $request) {
    //     // return response()->json([
    //     //     Images::all()
    //     // ]);
    //     $images = Images::all();
    //     return $images;
    // }
    // function CreateImage(Request $request) {
    //     if($request->has("image")) {
    //         $image = $request->file("image");
    //         $imageName = time().".".$image->getClientOriginalName();
    //         $image->move("images/",$imageName);
    //         Images::create([
    //             "Image"=>$imageName,
    //         ]);
    //         return response()->json([
    //             "status"=>1,
    //             "msg"=>"Image uploaded"
    //         ]);
    //     } else {
    //         return response()->json([
    //             "status"=>0,
    //             "msg"=>"Please try again !"
    //         ]);
    //     }
    // }
}
