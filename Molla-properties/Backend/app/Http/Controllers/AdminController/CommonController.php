<?php

namespace App\Http\Controllers\AdminController;

use App\Http\Controllers\Controller;
use App\Models\HomeContent;
use Exception;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;

class CommonController extends Controller
{
    public function UpdateUserInfo(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'project_image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:51200',
        ]);

        if (!$validator->fails()) {
            $id = $request->input("id");
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

            return response()->json(["status" => true, "msg" => "Information updated"]);
        } else {
            return response()->json(["status" => false, "msg" => $validator->errors()]);
        }

    }
}
