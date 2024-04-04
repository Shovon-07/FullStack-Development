import React, { useState } from "react";
import html2canvas from "html2canvas";
import AxiosConfig from "../../assets/AxiosConfig";

//___ Additional utility ___//

const GetScreenShoot = (props) => {
  const { btnTitle } = props;
  const { http } = AxiosConfig();
  const [msg, setMsg] = useState();

  const handleScreenShoot = () => {
    let capture = document.getElementById("capture");
    html2canvas(capture)
      .then((canvas) => {
        let image = canvas.toDataURL("image/png");
        // console.log(image);
        // document.getElementById(
        //   "viewCaptured"
        // ).innerHTML = `<img src="${image}" alt="" />`;
        // localStorage.setItem("img", image);

        http.post("/process-img", { imageData: image }).then((res) => {
          if (res) {
            setMsg(1);
          }
        });
      })
      .catch((err) => {
        console.error("We can't capture" + err);
      });
  };

  return (
    <div className="">
      <button
        className="button genImgBtn"
        style={{ padding: "0 20px", width: "100%" }}
        onClick={handleScreenShoot}
      >
        <span
          className={msg == null ? "d-none" : ""}
          style={{ color: "#6ffd52", marginRight: "10px" }}
        >
          &#10004;
        </span>
        {btnTitle}{" "}
      </button>
      {/* {msg == null ? "" : <p style={{ color: "green" }}>{msg}</p>} */}
    </div>
  );
};

export default GetScreenShoot;
// export { imageUrl };
