<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\HomeContent;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class AdminCommonController extends Controller
{
    public function GetHomeContent(Request $request)
    {
        try {
            $homeContent = HomeContent::get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $homeContent]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function UpdateBanner(Request $request)
    {
        try {
            $id = 1;
            $data = HomeContent::find($id);

            if ($request->input("banner_title")) {
                $banner_title = $request->input("banner_title");
                HomeContent::where("id", $id)->update([
                    "BannerTitle" => $banner_title,
                ]);
            }

            if ($request->input("banner_moto")) {
                $banner_moto = $request->input("banner_moto");
                HomeContent::where("id", $id)->update([
                    "BannerMoto" => $banner_moto,
                ]);
            }

            if ($request->hasfile("banner_img")) {
                $previesImgPath = public_path("Images/" . $data->BannerImage);
                if (file_exists($previesImgPath)) {
                    File::delete($previesImgPath);
                }

                $banner_img = $request->file("banner_img");
                $userImgName = "Utility/" . time() . "_" . rand() . "." . $banner_img->getClientOriginalExtension();
                $banner_img->move(public_path("/Images/Utility"), $userImgName);

                HomeContent::where("id", $id)->update([
                    "BannerImage" => $userImgName,
                ]);
            }

            return response()->json(["status" => true, "msg" => "Updated succesfull"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }
    public function UpdateMissionVission(Request $request)
    {
        try {
            $id = 1;
            $data = HomeContent::find($id);

            if ($request->input("vission_txt")) {
                $vission_txt = $request->input("vission_txt");
                HomeContent::where("id", $id)->update([
                    "OurVission" => $vission_txt,
                ]);
            }

            if ($request->input("mission_txt")) {
                $mission_txt = $request->input("mission_txt");
                HomeContent::where("id", $id)->update([
                    "OurMission" => $mission_txt,
                ]);
            }

            if ($request->input("investus_txt")) {
                $investus_txt = $request->input("investus_txt");
                HomeContent::where("id", $id)->update([
                    "InvestWithUs" => $investus_txt,
                ]);
            }

            return response()->json(["status" => true, "msg" => "Updated succesfull"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }

    public function GetAboutUs(Request $request)
    {
        try {
            $aboutUsTxt = HomeContent::select("AboutUsTxt")->get();
            return response()->json(["status" => true, "msg" => "Data founded", "data" => $aboutUsTxt]);

        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => "No Data founded"]);
        }
    }
    public function UpdateAboutUs(Request $request)
    {
        try {
            $id = 1;
            $aboutus_txt = $request->input("aboutus_txt");
                HomeContent::where("id", $id)->update([
                    "AboutUsTxt" => $aboutus_txt,
                ]);
            return response()->json(["status" => true, "msg" => "Updated succesfull"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }
}
