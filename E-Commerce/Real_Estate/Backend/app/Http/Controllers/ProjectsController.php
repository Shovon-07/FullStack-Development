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
            $projectType = "ongoing";
            $onGoingProject = Projects::where("ProjectType", "=", $projectType)->get();
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
