<?php

namespace App\Http\Controllers;

use App\Models\Images;
use Illuminate\Http\Request;

class ProcessImgController extends Controller
{
    function ProcessImg(Request $request) {
    	$img = $request->input('imageData');
    	
    	if(!$img) {
    		return "No image found";
    	} else {
			// For not replace image
			$imgName = "Captured_".md5(time()).".png";

			// For replace image
			// $imgName = "Captured".".png";

			$source = fopen($img,"r");
			$destination = fopen("images/ScreenShoot/".$imgName,"w");
			stream_copy_to_stream($source,$destination);
			fclose($source);
			fclose($destination);

            // Save database
            Images::create(["Image"=>$imgName]);
			return $img;
    	}
    }

	function GetProcessedImg() {
        $data = Images::all();
		return $data;
	}
}
