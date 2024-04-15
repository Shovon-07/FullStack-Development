<?php

namespace App\Http\Controllers;

use App\Models\CapturedImg;
use App\Models\Images;
use Illuminate\Http\Request;

class ProcessImgController extends Controller
{
	function ProcessImg(Request $request) {
		$buttonName = $request->input("ButtonName") ?? "";
		$neckName = $request->input("NeckName") ?? "";
		$pocketName = $request->input("PocketName") ?? "";
		$handName = $request->input("HandName") ?? "";
		$img = $request->input('imageData') ?? "";
		
		if(!$img) {
			return "No image found";
		} else {
			// For not replace image
			// $imgName = "Captured_".md5(time()).".png";

			// For replace image
			$imgName = "Captured".".png";

			$source = fopen($img,"r");
			$destination = fopen("images/ScreenShoot/".$imgName,"w");
			stream_copy_to_stream($source,$destination);
			fclose($source);
			fclose($destination);

			// Save database
			CapturedImg::where("id","=",1)->update([
				"ButtonName"=>$buttonName,
				"NeckName"=>$neckName,
				"PocketName"=>$pocketName,
				"HandName"=>$handName,
				"Image"=>$imgName
			]);
			return $img;
		}
	}

	function GetProcessedImg() {
      $data = CapturedImg::first();
		return $data;
	}
}
