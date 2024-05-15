import React, { useContext, useState } from "react";
import html2canvas from "html2canvas";

//___ Additional utility ___//
import { ContextApiForGetImgData } from "../CreateInvoice/CreateInvoice";

const GetScreenShoot = (props) => {
  const useContextApi = useContext(ContextApiForGetImgData);

  const { dressImgName, btnImgName, nakImgName, pktImgName, hndImgName } =
    props;
  const [msg, setMsg] = useState("فعل الصورة");

  const handleScreenShoot = () => {
    let capture = document.getElementById("capture");
    setMsg("تم التفعيل");
    html2canvas(capture)
      .then((canvas) => {
        let image = canvas.toDataURL("image/png");
        useContextApi.setGetImgData({
          Image: image,
          DressImgName: dressImgName,
          BtnImgName: btnImgName,
          NakImgName: nakImgName,
          PktImgName: pktImgName,
          HndImgName: hndImgName,
        });
        console.log(image);

        setInterval(() => {
          setMsg("فعل الصورة");
        }, 2000);
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
          className={msg === "فعل الصورة" ? "d-none" : ""}
          style={{ color: "#6ffd52", marginRight: "10px" }}
        >
          &#10004;
        </span>
        {msg == null ? "فعل الصورة" : msg}{" "}
      </button>
    </div>
  );
};

export default GetScreenShoot;
