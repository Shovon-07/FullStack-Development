<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\HonorableClient;
use App\Models\NewsAndEvent;
use App\Models\Blog;
use App\Models\Owner;
use Exception;
use Illuminate\Http\Request;

class CommonController extends Controller
{
    //___ Gallery start ___//
    public function Gallerys(Request $request)
    {
        try {
            $Project_id = $request->input("project_id");
            $gallery = Gallery::where("Project_id", $Project_id)->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $gallery]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function AllGallerysImg()
    {
        try {
            $gallery_img = Gallery::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $gallery_img]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Gallery end ___//

    //___ Honorable Clients start ___//
    public function AllHonorableClients()
    {
        try {
            $honorableClient = HonorableClient::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $honorableClient]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Honorable Clients end ___//

    //___ News And Events start ___//
    public function AllNewsAndEvents()
    {
        try {
            $news = NewsAndEvent::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $news]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ News And Events end ___//

    //___ Blogs start ___//
    public function AllBlogVideo()
    {
        try {
            $blogs = Blog::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $blogs]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Blogs end ___//

    //___ Owners start ___//
    public function Owners()
    {
        try {
            $owners = Owner::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $owners]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Owners end ___//
}
