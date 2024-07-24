<?php

namespace App\Http\Controllers;

use App\Models\Plot;
use Exception;
use Illuminate\Http\Request;

class PlotController extends Controller
{
    public function Plots(Request $request)
    {
        try {
            $Project_id = $request->input("project_id");
            $plot = Plot::where("Project_id", $Project_id)->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $plot]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
}
