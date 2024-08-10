<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use App\Models\HomeContent;
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
            $gallery = Gallery::where("Project_id", $Project_id)->latest("id")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $gallery]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function AllGallerysImg()
    {
        try {
            $gallery_img = Gallery::latest("id")->get();
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
            $honorableClient = HonorableClient::latest("id")->get();
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
            $news = NewsAndEvent::latest("id")->get();
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
            $blogs = Blog::latest("id")->get();
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

    //___ Home content start ___//
    public function GetHomeContent()
    {
        try {
            $homeContent = HomeContent::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $homeContent]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Home content end ___//

//___ About us content start ___//
    public function GetAboutUs(Request $request)
    {
        try {
            $aboutUsTxt = HomeContent::select("AboutUsTxt")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $aboutUsTxt]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ About us content end ___//
}
