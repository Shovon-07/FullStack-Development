<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\HonorableClient;
use App\Models\NewsAndEvent;
use Exception;
use App\Models\Projects;
use App\Models\Gallery;
use App\Models\Plot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

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

    public function DeleteProject(Request $request)
    {
        try {
            $id = $request->input("project_id");

            // Gallery
            $galleryData = Gallery::where("Project_id", $id)->get();
            $eachGalleryImagePath = [];

            foreach ($galleryData as $eachGalleryData) {
                $galleryImagePath = public_path("Images/" . $eachGalleryData->Gallery_img);
                $eachGalleryImagePath[] = $galleryImagePath;
                File::delete($eachGalleryImagePath);
            }

            // Honorable Client
            $honClientData = HonorableClient::where("Project_id", $id)->get();
            $eachHonClientImagePath = [];

            foreach ($honClientData as $eachHonClientData) {
                $honClientImagePath = public_path("Images/" . $eachHonClientData->HonorableClient_img);
                $eachHonClientImagePath[] = $honClientImagePath;
                File::delete($eachHonClientImagePath);
            }

            // News and event
            $newsData = NewsAndEvent::where("Project_id", $id)->get();
            $eachNewsImagePath = [];

            foreach ($newsData as $eachNewsData) {
                $newsImagePath = public_path("Images/" . $eachNewsData->News_img);
                $eachNewsImagePath[] = $newsImagePath;
                File::delete($eachNewsImagePath);
            }

            // Projects
            $projectData = Projects::find($id);
            $projectImagePath = public_path("Images/" . $projectData->Image);
            if (file_exists($projectImagePath)) {
                File::delete($projectImagePath);
            }

            // Delete from database
            Plot::where("Project_id", $id)->delete();
            Gallery::where("Project_id", $id)->delete();
            HonorableClient::where("Project_id", $id)->delete();
            NewsAndEvent::where("Project_id", $id)->delete();
            Projects::find($projectData->id)->delete();

            return response()->json(["status" => true, "msg" => "Project deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function UpdateProject(Request $request)
    {
        $id = $request->input("project_id");
        $projectData = Projects::find($id);

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

        if ($request->hasfile("project_image")) {
            $previesImgPath = public_path("Images/" . $projectData->Image);
            if (file_exists($previesImgPath)) {
                File::delete($previesImgPath);
            }
            // 1722997323_1805323441.jpg
            $project_image = $request->file("project_image");
            $projectImgName = "Projects/" . time() . "_" . rand() . "." . $project_image->getClientOriginalExtension();
            $project_image->move(public_path("/Images/Projects"), $projectImgName);

            Projects::where("id", $id)->update([
                "Image" => $projectImgName,
            ]);
        }

        $update = Projects::where("id", $id)->update([
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
        ]);

        if ($update) {
            return response()->json(["status" => true, "msg" => "Project updated"]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    //___ Projects end ___//

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
    public function GetPlots(Request $request)
    {
        try {
            $Project_id = $request->input("project_id");
            $plot = Plot::where("Project_id", $Project_id)->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $plot]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function DeletePlot(Request $request)
    {
        try {
            $project_id = $request->input("project_id");
            $plot_id = $request->input("plot_id");

            // Delete from database
            Plot::where("id", $plot_id)->where("Project_id", $project_id)->delete();

            return response()->json(["status" => true, "msg" => "Plot deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Plot end ___//

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

            foreach ($images as $key => $image) {
                $new_name = "Gallery/" . $key . "_" . time() . "_" . rand() . "."
                    . $image->getClientOriginalExtension();
                $image->move(public_path("/Images/Gallery"), $new_name);

                $imageData[] = [
                    "Project_id" => $id,
                    "Gallery_img" => $new_name
                ];
            }

            Gallery::insert($imageData);
            return response()->json([
                "status" => true,
                "msg" => "Image uploaded successfull",
                "Images" => $imageData
            ]);
            // return response()->json(["status" => true, "msg" => $imageData]);
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    public function GetProjectGallery(Request $request)
    {
        try {
            $Project_id = $request->input("project_id");
            $gallery = Gallery::where("Project_id", $Project_id)->latest("id")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $gallery]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function DeleteImg(Request $request)
    {
        try {
            $project_id = $request->input("project_id");
            $img_id = $request->input("img_id");

            $galleryData = Gallery::where("id", $img_id)->where("Project_id", $project_id)->first();

            $galleryImagePath = public_path("Images/" . $galleryData->Gallery_img);
            File::delete($galleryImagePath);

            // Delete from database
            Gallery::where("id", $img_id)->where("Project_id", $project_id)->delete();

            return response()->json(["status" => true, "msg" => "Image deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Gallery end ___//

    //___ Honorable Client start ___//
    public function GetHonClient()
    {
        $honClient = HonorableClient::latest("id")->get();
        if ($honClient) {
            return response()->json(["status" => true, "data" => $honClient]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function AddHonClient(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'honClient_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:51200',
        ]);

        if (!$validator->fails()) {
            $Project_id = $request->input("project_id");
            $honClient_name = $request->input("honClient_name");

            $honClient_image = $request->file("honClient_image");
            $honClientImageName = "HonorableClient/" . time() . "_" . rand() . "." . $honClient_image->getClientOriginalExtension();

            $store = HonorableClient::create([
                "Project_id" => $Project_id,
                "HonorableClientName" => $honClient_name,
                "HonorableClient_img" => $honClientImageName,
            ]);

            if ($store) {
                $honClient_image->move(public_path("/Images/HonorableClient"), $honClientImageName);
                return response()->json(["status" => true, "msg" => "New client added"]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong"]);
            }
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    public function DeleteClient(Request $request)
    {
        try {
            $project_id = $request->input("project_id");
            $client_id = $request->input("client_id");

            $clientData = HonorableClient::where("id", $client_id)->where("Project_id", $project_id)->first();

            $clientImagePath = public_path("Images/" . $clientData->HonorableClient_img);
            File::delete($clientImagePath);

            // Delete from database
            HonorableClient::where("id", $client_id)->where("Project_id", $project_id)->delete();

            return response()->json(["status" => true, "msg" => "Client deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Honorable Client end ___//

    //___ News and event start ___//
    public function GetNewsEvent()
    {
        $newsEvent = NewsAndEvent::latest("id")->get();
        if ($newsEvent) {
            return response()->json(["status" => true, "data" => $newsEvent]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function AddNewsEvent(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'newsEvent_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:51200',
        ]);

        if (!$validator->fails()) {
            $Project_id = $request->input("project_id");

            $newsEvent_image = $request->file("newsEvent_image");
            $newsEventImageName = "News/" . time() . "_" . rand() . "." . $newsEvent_image->getClientOriginalExtension();

            $store = NewsAndEvent::create([
                "Project_id" => $Project_id,
                "News_img" => $newsEventImageName,
            ]);

            if ($store) {
                $newsEvent_image->move(public_path("/Images/News"), $newsEventImageName);
                return response()->json(["status" => true, "msg" => "News and event added"]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong"]);
            }
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    public function DeleteNews(Request $request)
    {
        try {
            $project_id = $request->input("project_id");
            $news_id = $request->input("news_id");

            $newsData = NewsAndEvent::where("id", $news_id)->where("Project_id", $project_id)->first();

            $newsImagePath = public_path("Images/" . $newsData->News_img);
            File::delete($newsImagePath);

            // Delete from database
            NewsAndEvent::where("id", $news_id)->where("Project_id", $project_id)->delete();

            return response()->json(["status" => true, "msg" => "News deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ News and event end ___//

    //___ Blog start ___//
    public function GetBlog()
    {
        $blogs = Blog::latest("id")->get();
        if ($blogs) {
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $blogs]);
        } else {
            return response()->json(["status" => false, "msg" => "Something went wrong"]);
        }
    }
    public function AddBlog(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'blog_link' => 'required',
        ]);

        if (!$validator->fails()) {
            $blog_link = $request->input("blog_link");

            $store = Blog::create([
                "Blog_video" => $blog_link,
            ]);

            if ($store) {
                return response()->json(["status" => true, "msg" => "New blog added"]);
            } else {
                return response()->json(["status" => false, "msg" => "Something went wrong"]);
            }
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }
    }
    public function DeleteBlog(Request $request)
    {
        try {
            $blog_id = $request->input("blog_id");

            // Delete from database
            Blog::where("id", $blog_id)->delete();

            return response()->json(["status" => true, "msg" => "Blog deleted"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    //___ Blog end ___//
}
