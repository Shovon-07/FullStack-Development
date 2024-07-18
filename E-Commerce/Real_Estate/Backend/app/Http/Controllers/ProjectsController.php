<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Carbon\Carbon;
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
            $upComingProject = Projects::where("ProjectType", "=", "upcoming")->where("Status", "=", "Not available")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $upComingProject]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function CompletedProject()
    {
        try {
            $completedProject = Projects::where("ProjectType", "=", "completed")->where("Status", "=", "Sold")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $completedProject]);

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
    public function LatestProject()
    {
        try {
            $oneYearAgo = Carbon::now()->subYear();
            $latestProject = Projects::where('Updated_at', '>=', $oneYearAgo)->where("ProjectType", "=", "ongoing")->where("Status", "=", "Available")->get();
            return response()->json(["status" => true, "msg" => $oneYearAgo, "data" => $latestProject]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
}
