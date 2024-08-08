<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\MailForDb;
use Exception;
use Illuminate\Http\Request;

class MailForDbController extends Controller
{
    public function GetSingleMail(Request $request)
    {
        $mail = MailForDb::where("id", $request->input("id"))->first();
        if ($mail) {
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $mail]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function GetMails()
    {
        $mails = MailForDb::latest("id")->get();
        if ($mails) {
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $mails]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function DeleteEmail(Request $request)
    {
        try {
            $email_id = $request->input("email_id");

            // Delete from database
            MailForDb::where("id", $email_id)->delete();

            return response()->json(["status" => true, "msg" => "Email deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function UpdateEmailStatus()
    {
        $update = MailForDb::where("Status",1)->update([
            "Status"=>0
        ]);
        if ($update) {
            return response()->json(["status" => true, "msg" => "Data founded", "data" => 0]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
}
