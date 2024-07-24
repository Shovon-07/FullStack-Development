<?php

namespace App\Http\Controllers;

use App\Models\LatestProject;
use Exception;
use Illuminate\Http\Request;

class LatestProjectController extends Controller
{
    public function LatestProject()
    {
        try {
            $data = LatestProject::all();
            return response()->json(["status" => true, "data" => $data]);
        } catch (Exception $e) {
            return response()->json(["status" => false, "msg" => $e]);
        }
    }

    public function CreateLatestProject(Request $request)
    {
        try {
            $img = $request->file("image");
            $imgName = time() . "_" . md5(time()) . "_" . $img->getClientOriginalName() . "." . $img->getClientOriginalExtension();

            $create = LatestProject::create(["Title" => $request->input("title"), "Description" => $request->input("description"), "Image" => $imgName]);

            if ($create) {
                $img->move(public_path("Images/Latest_project"), $imgName);
                return response()->json(["status" => true, "msg" => "New project successfully added", "img" => $imgName]);
            }
        } catch (Exception $e) {
            return response()->json(["status" => false, "msg" => $e]);
        }
    }
}
