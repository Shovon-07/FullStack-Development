<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function SendMessage() {
        event(new MessageSent("Shovon","I love you"));
        return response()->json(["msg"=>"Success"]);
    }
}
