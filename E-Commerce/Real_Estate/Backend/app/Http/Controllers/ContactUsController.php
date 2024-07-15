<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsMail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactUsController extends Controller
{
    public function SendMail(Request $request)
    {
        try {
            $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string',
            ]);

            $mailData = [
                "name" => $request->input("name"),
                "email" => $request->input("email"),
                "subject" => $request->input("subject"),
                "message" => $request->input("message"),
                "appName" => env("APP_NAME"),
            ];
            $email = Mail::to("aljubairshovon@gmail.com")->send(new ContactUsMail($mailData));
            if ($email) {
                return response()->json(["status" => true, "msg" => "Email sent successful",]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong !"]);
            }
        } catch (Exception $e) {
            return response()->json(["status" => false, "msg" => $e]);
        }


        // try {
        //     $request->validate([
        //         'name' => 'required|string|max:255',
        //         'email' => 'required|email|max:255',
        //         'message' => 'required|string',
        //     ]);

        //     $mailData = [
        //         'name' => $request->input("name"),
        //         'email' => $request->input("email"),
        //         'message' => $request->input("message"),
        //     ];

        //     Mail::to('aljubairshovon@gmail.com')->send(new ContactUsMail($mailData));

        //     return response()->json(["status" => true, "msg" => "success", "data" => $mailData]);

        //     // $details = request()->validate([
        //     //     "name" => "required|string",
        //     //     "email" => "required|email",
        //     //     "message" => "required|string",
        //     // ]);

        //     // $sent = Mail::to("aljubairshovon@gmail.com")->send(new ContactUsMail($details));
        //     // if ($sent) {
        //     //     return response()->json(["status" => true, "msg" => "success", "data" => $request->all()]);
        //     // }
        // } catch (Exception $e) {
        //     return response()->json(["status" => false, "msg" => $e]);
        // }
    }
}
