import React, { useContext, useState } from "react";
import html2canvas from "html2canvas";

//___ Additional utility ___//
// import AxiosConfig from "../../assets/AxiosConfig";
import { ContextApiForGetImgData } from "../Invoice/Invoice";

const GetScreenShoot = (props) => {
  const useContextApi = useContext(ContextApiForGetImgData);

  const { btnImgName, nakImgName, pktImgName, hndImgName } = props;
  // const { http } = AxiosConfig();
  const [msg, setMsg] = useState("Generate Image");

  const handleScreenShoot = () => {
    let capture = document.getElementById("capture");
    setMsg("Generated");
    html2canvas(capture)
      .then((canvas) => {
        let image = canvas.toDataURL("image/png");
        // console.log(image);
        // document.getElementById(
        //   "viewCaptured"
        // ).innerHTML = `<img src="${image}" alt="" />`;
        // localStorage.setItem("img", image);

        useContextApi.setGetImgData({
          Image: image,
          BtnImgName: btnImgName,
          NakImgName: nakImgName,
          PktImgName: pktImgName,
          HndImgName: hndImgName,
        });

        setInterval(() => {
          setMsg("Generate Image");
        }, 2000);
      })
      .catch((err) => {
        console.error("We can't capture" + err);
      });
  };

  // const show = () => {
  //   useContextApi.setGetImgData({
  //     // Image: image,
  //     BtnImgName: "btnImgName",
  //     NakImgName: "nakImgName",
  //     PktImgName: "pktImgName",
  //     HndImgName: "hndImgName",
  //   });
  // };

  return (
    <div className="">
      <button
        className="button genImgBtn"
        style={{ padding: "0 20px", width: "100%" }}
        onClick={handleScreenShoot}
      >
        <span
          className={msg === "Generate Image" ? "d-none" : ""}
          style={{ color: "#6ffd52", marginRight: "10px" }}
        >
          &#10004;
        </span>
        {msg == null ? "Generate Image" : msg}{" "}
      </button>
      {/* <button onClick={show}>Show</button> */}
    </div>
  );
};

export default GetScreenShoot;
