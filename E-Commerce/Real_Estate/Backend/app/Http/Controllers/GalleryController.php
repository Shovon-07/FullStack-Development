<?php

namespace App\Http\Controllers;

use App\Models\Gallery;
use Exception;
use Illuminate\Http\Request;

class GalleryController extends Controller
{
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
}
