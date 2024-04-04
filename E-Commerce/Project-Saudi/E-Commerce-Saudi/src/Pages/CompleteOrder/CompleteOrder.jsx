import React, { useEffect, useState } from "react";
import AxiosConfig from "../../assets/AxiosConfig";
// import dress from "../../../../../../../Backend-Projects/Laravel-Project/E-commerce/public/ScreenShoot/Captured_1712120434.png";
import dress from "/images/Captured.png";

const CompleteOrder = () => {
  const { http } = AxiosConfig();

  const [capturedImage, setCapturedImage] = useState();

  const getCapturedImg = async () => {
    await http.get("/get-processed-img").then((response) => {
      // console.log(response.data.Image);
      setCapturedImage(response.data[0].Image);
      console.log(capturedImage);
    });
  };

  useEffect(() => {
    getCapturedImg();
  }, []);

  return (
    <div>
      CompleteOrder
      <div id="viewCapturedImg" style={{ width: "200px", height: "auto" }}>
        <img
          src={"http://localhost:8000/images/ScreenShoot/" + capturedImage}
          alt=""
        />
        <button
          className="button"
          style={{ fontSize: "20px", padding: "10px" }}
        >
          Preview Image
        </button>
      </div>
    </div>
  );
};

export default CompleteOrder;
