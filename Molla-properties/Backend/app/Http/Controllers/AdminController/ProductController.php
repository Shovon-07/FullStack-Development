<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Exception;
use App\Models\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    //___ Projects start ___//
    public function Projects()
    {
        $projects = Projects::latest("id")->get();
        if ($projects) {
            return response()->json(["status" => true, "data" => $projects]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function AddProject(Request $request)
    {
        try {
            $request->validate([
                'project_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:51200',
            ]);

            $title = $request->input("title");
            $project_name = $request->input("project_name");
            $developer = $request->input("developer");
            $location = $request->input("location");
            $land_area = $request->input("land_area");
            $total_plot = $request->input("total_plot");
            $contact_no = $request->input("contact_no");
            $features = $request->input("features");
            $project_map = $request->input("project_map");
            $project_status = $request->input("project_status");

            $project_image = $request->file("project_image");
            $projectImgName = "Projects/" . time() . "_" . rand() . "." . $project_image->getClientOriginalExtension();

            // // $project_image->move(public_path("/Images/Projects"), $projectImgName);
            // return response()->json(["status" => true, "msg" => $request->all()]);

            $store = Projects::create([
                "Title" => $title,
                "Project_name" => $project_name,
                "Developer" => $developer,
                "Location" => $location,
                "Land_area" => $land_area,
                "Total_plot" => $total_plot,
                "Contact_no" => $contact_no,
                "Features" => $features,
                "Project_map" => $project_map,
                "Status" => $project_status,
                "Image" => $projectImgName,
            ]);

            if ($store) {
                $project_image->move(public_path("/Images/Projects"), $projectImgName);
                return response()->json(["status" => true, "msg" => "New project uploaded"]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong"]);
            }
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }
    //___ Projects end ___//

    public function AddGalleryImage(Request $request)
    {
        $images = $request->file("gallery_image");
        $imageName = "";

        foreach ($images as $image) {
            $new_name = time() . "_" . rand() . "." . $image->getClientOriginalExtension();
            $image->move(public_path("/Images/Gallery"), $new_name);
            $imageName = $imageName . $new_name . ",";
        }
        $imageDB = $imageName;
        return response()->json(["status" => true, "msg" => "Image uploaded successfull", "Images" => $imageDB]);
    }
}

// $file->store("GalleryImages");