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
    public function GetUnreadEmail()
    {
        $emailStatus = MailForDb::where("Status", 1)->count();
        if ($emailStatus) {
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $emailStatus]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function MarkAsRead(Request $request)
    {
        $email_id = $request->input("email_id");
        $markRead = MailForDb::where("id", $email_id)->update([
            "Status" => 0
        ]);
        if ($markRead) {
            return response()->json(["status" => true, "msg" => "Marked as read",]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function MarkAsUnread(Request $request)
    {
        $email_id = $request->input("email_id");
        $markUnread = MailForDb::where("id", $email_id)->where("Status", 0)->update([
            "Status" => 1
        ]);
        if ($markUnread) {
            return response()->json(["status" => true, "msg" => "Marked as unread",]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
}
