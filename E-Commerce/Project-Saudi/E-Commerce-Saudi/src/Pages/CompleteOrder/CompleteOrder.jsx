import React, { useEffect } from "react";
import AxiosConfig from "../../assets/AxiosConfig";
// import dress from "../../../../../../../Backend-Projects/Laravel-Project/E-commerce/public/ScreenShoot/Captured_1712120434.png";
import dress from "/images/Captured.png";

const CompleteOrder = () => {
  const { http } = AxiosConfig();

  let img = undefined;
  useEffect(() => {
    http.get("/api/dummy-get-api").then((res) => {
      img = res.data.Image;
      console.log(img);
      document.getElementById("viewCapturedImg").innerHTML = `<img
      src="/images/${img}"
      alt=""
      />`;
      // return { img };
    });
    // return { img };
  }, []);

  return (
    <div>
      CompleteOrder
      <div id="viewCapturedImg"></div>
      <button className="button" style={{ fontSize: "20px", padding: "10px" }}>
        Preview Image
      </button>
    </div>
  );
};

export default CompleteOrder;
