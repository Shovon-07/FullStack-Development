<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
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

            $project_image = $request->file("project_image")->store("Projects");

            return response()->json(["status" => true, "msg" => $request->all()]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }

    public function AddGalleryImage(Request $request)
    {
        $name = $request->input("name");

        $images = $request->file("gallery_image");
        $imageName = "";

        foreach ($images as $image) {
            $new_name = time() . "_" . rand() . "." . $image->getClientOriginalExtension();
            $image->move(public_path("/Images/Gallery"), $new_name);
            $imageName = $imageName . $new_name . ",";
        }
        $imageDB = $imageName;
        return response()->json(["status" => true, "msg" => "Image uploaded successfull", "Name" => $name, "Images" => $imageDB]);
    }
}

// $file->store("GalleryImages");