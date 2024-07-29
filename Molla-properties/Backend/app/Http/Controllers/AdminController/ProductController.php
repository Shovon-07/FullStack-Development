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
        try {
            // $request->validate([
            //     'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg'
            // ]);

            // $images = array();
            if ($files = $request->file('gallery_image')) {
                foreach ($files as $file) {
                    $name = $file->getClientOriginalName();
                    $file->store("GalleryImages");
                    // $images[] = $name;
                }
            }
            return response()->json(["status" => true, "msg" => "Image upload successfull"]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }
}
