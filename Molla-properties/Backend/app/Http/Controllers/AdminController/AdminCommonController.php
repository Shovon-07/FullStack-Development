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
            $id=1;
            $data = HomeContent::find($id);

            if ($request->input("banner_title")) {
                $banner_title = $request->input("banner_title");
                HomeContent::where("id",$id)->update([
                    "BannerTitle" => $banner_title,
                ]);
            }

            if ($request->input("banner_moto")) {
                $banner_moto = $request->input("banner_moto");
                HomeContent::where("id",$id)->update([
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

                HomeContent::where("id",$id)->update([
                    "BannerImage" => $userImgName,
                ]);
            }

            return response()->json(["status" => true, "msg" => "Information updated"]);
        } catch (Exception $exception) {
            return response()->json(["status" => false, "msg" => $exception]);
        }
    }
}