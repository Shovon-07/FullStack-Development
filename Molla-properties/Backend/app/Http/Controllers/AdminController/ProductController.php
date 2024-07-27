<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function AddProject(Request $request)
    {
        // $request->validate([
        //     "title" => "required",
        //     "project_name" => "required",
        //     "developer" => "required",
        //     "location" => "required",
        //     "land_area" => "required",
        //     "total_plot" => "required",
        //     "contact_no" => "required",
        //     "project_map" => "required",
        //     "features" => "required",
        //     "status" => "required",
        // ], ["title.required" => "Title is required", "project_name.required" => "Project name is required", "developer.required" => "Developer is required", "location.required" => "Location is required", "land_area.required" => "Land area is required", "total_plot.required" => "Total plot is required", "contact_no.required" => "Contact no is required", "project_map.required" => "Project map is required", "features.required" => "Features is required", "status.required" => "Status is required",]);

        $title = $request->input("title");
        $project_name = $request->input("project_name");
        $developer = $request->input("developer");
        $location = $request->input("location");
        $land_area = $request->input("land_area");
        $total_plot = $request->input("total_plot");
        $contact_no = $request->input("contact_no");
        $project_map = $request->input("project_map");
        $features = $request->input("features");
        $status = $request->input("status");

        $project_image = $request->file("project_image");
        $projectImgName = time() . "_" . md5(time()) . "_" . $project_image->getClientOriginalName() . "." . $project_image->getClientOriginalExtension();

        // $ = $request->input("");
        return response()->json(["status" => true, "msg" => $projectImgName]);
    }
}
