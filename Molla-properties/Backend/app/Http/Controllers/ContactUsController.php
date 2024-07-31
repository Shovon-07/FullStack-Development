<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactUsController extends Controller
{
    public function SendMail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        if (!$validator->fails()) {
            $mailData = [
                "name" => $request->input("name"),
                "email" => $request->input("email"),
                "subject" => $request->input("subject"),
                "message" => $request->input("message"),
                "appName" => env("APP_NAME"),
            ];
            $email = Mail::to("mollaproperties@gmail.com")->send(new ContactUsMail($mailData));
            if ($email) {
                return response()->json(["status" => true, "msg" => "Email sent successful",]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong !"]);
            }
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
}
