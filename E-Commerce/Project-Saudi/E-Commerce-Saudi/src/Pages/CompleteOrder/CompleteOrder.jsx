import React, { useEffect, useState } from "react";
import AxiosConfig from "../../assets/AxiosConfig";

const CompleteOrder = () => {
  const { http } = AxiosConfig();

  const [capturedImage, setCapturedImage] = useState();

  const getCapturedImg = async () => {
    await http.get("/get-processed-img").then((response) => {
      // console.log(response.data.Image);
      if (response) {
        setCapturedImage(response.data.Image);
        console.log(capturedImage);
      }
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
        {/* <button
          className="button"
          style={{ fontSize: "20px", padding: "10px" }}
        >
          Preview Image
        </button> */}
      </div>
    </div>
  );
};

export default CompleteOrder;
