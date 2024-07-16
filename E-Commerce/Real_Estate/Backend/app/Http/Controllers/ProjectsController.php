<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Exception;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    public function OnGoingProject()
    {
        try {
            $onGoingProject = Projects::where("ProjectType", "=", "ongoing")->where("Status", "=", "Available")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $onGoingProject]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function UpComingProject()
    {
        try {
            $onGoingProject = Projects::where("ProjectType", "=", "upcoming")->where("Status", "=", "Not available")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $onGoingProject]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function CompletedProject()
    {
        try {
            $onGoingProject = Projects::where("ProjectType", "=", "Completed")->where("Status", "=", "Sold")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $onGoingProject]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function ProjectView(Request $request)
    {
        try {
            $id = $request->input("id");
            $projectView = Projects::where("id", $id)->first();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $projectView]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
}
