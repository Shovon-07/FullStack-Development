<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use Exception;
use App\Models\Projects;
use App\Models\Gallery;
use App\Models\Plot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

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
        $validator = Validator::make($request->all(), [
            'project_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:51200',
        ]);

        if (!$validator->fails()) {
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
                return response()->json(["status" => true, "msg" => "New project created"]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong"]);
            }
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    public function DeleteProject(Request $request)
    {
        try {
            $id = $request->input("project_id");
            $data = Projects::find($id);
            $imagePath = public_path("Images/" . $data->Image);

            if (file_exists($imagePath)) {
                unlink($imagePath);
            }
            Projects::find($data->id)->delete();

            return response()->json(["status" => true, "msg" => $data]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function ProjectDetails(Request $request)
    {
        try {
            $id = $request->input("id");
            $projects = Projects::where("id", $id)->first();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $projects]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function ProjectsName()
    {
        $projects = Projects::select("id", "Project_name")->get();
        if ($projects) {
            return response()->json(["status" => true, "data" => $projects]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    //___ Projects end ___//

    //___ Gallery start ___//
    public function GalleryImg()
    {
        $images = Gallery::latest("id")->get();
        if ($images) {
            return response()->json(["status" => true, "data" => $images]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function AddGalleryImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'project_id' => 'required',
            'gallery_image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
        ]);

        if (!$validator->fails()) {
            $id = $request->input("project_id");
            $images = $request->file("gallery_image");
            $imageData = [];

            foreach ($images as $image) {
                $new_name = "Gallery/" . time() . "_" . rand() . "." . $image->getClientOriginalExtension();
                $image->move(public_path("/Images/Gallery"), $new_name);

                $imageData[] = [
                    "Project_id" => $id,
                    "Gallery_img" => $new_name
                ];
            }

            Gallery::insert($imageData);
            return response()->json(["status" => true, "msg" => "Image uploaded successfull", "Images" => $id]);
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    //___ Gallery end ___//

    //___ Plot start ___//
    public function AddPlot(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'project_id' => 'required',
            'plot.*' => 'required',
        ]);

        if (!$validator->fails()) {
            $project_id = $request->input('project_id');
            $plots = $request->input('plot');

            foreach ($plots as $EachPlot) {
                Plot::create([
                    "Plot" => $EachPlot,
                    "Project_id" => $project_id,
                ]);
            }
            return response()->json(["status" => true, "msg" => "Plots added succesfully"]);
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    //___ Plot end ___//
}
