<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProcessImgController extends Controller
{
    function ProcessImg(Request $request) {
    	$img = $request->input('imageData');
    	
    	if(!$img) {
    		return "No image found";
    	} else {
				// For not replace image
				// $imgName = "Captured_".time().".png";

				// For replace image
				$imgName = "Captured".".png";

				$source = fopen($img,"r");
				// $destination = fopen("ScreenShoot/".$imgName,"w");
				
				// Save out of backend project
				$destination = fopen("ScreenShoot/".$imgName,"w");
				
				stream_copy_to_stream($source,$destination);
				fclose($source);
				fclose($destination);
				return $img;
    	}
    }

		function DummyGetApi() {
			$data = ["Image"=>"Captured_1712120209.png"];
			return $data;
		}
}

/***
 * ==> Controller
 * > $destination = fopen("frontend folder path/".$imgName,"w");
 * 
 * ==> Route
 * use App\Http\Controllers\Frontend\ProcessImgController;
 * Route::prefix('/')->group(function () {    
			Route::controller(ProcessImgController::class)->group(function () {
					Route::post('/process-img', 'ProcessImg');
			});
	});

	* ==> Folder for image
	* At public folder -> create "ScreenShoot" folder.
 ***/
