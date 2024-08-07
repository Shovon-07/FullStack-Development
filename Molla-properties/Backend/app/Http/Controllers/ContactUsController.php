<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use App\Models\MailForDb;
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
            'subject' => 'required|string',
            'message' => 'required|string',
        ]);

        if (!$validator->fails()) {
            $name = $request->input("name");
            $email = $request->input("email");
            $subject = $request->input("subject");
            $message = $request->input("message");

            $mailData = [
                "name" => $name,
                "email" => $request->input("email"),
                "subject" => $subject,
                "message" => $message,
                "appName" => env("APP_NAME"),
            ];

            MailForDb::create([
                "Name" => $name,
                "Email" => $email,
                "Subject" => $subject,
                "Message" => $message,
            ]);

            $email = Mail::to("support@molla-properties.com")->send(new ContactUsMail($mailData));
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