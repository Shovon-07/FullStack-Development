import React from "react";
import html2canvas from "html2canvas";
import AxiosConfig from "../../assets/AxiosConfig";

//___ Additional utility ___//

const GetScreenShoot = (props) => {
  const { btnTitle } = props;
  const { http } = AxiosConfig();

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

        http.post("/api/process-img", { imageData: image }).then((res) => {
          console.log(res.data);
        });
      })
      .catch((err) => {
        console.error("We can't capture" + err);
      });
  };

  return (
    <>
      {/* <div id="viewCaptured"></div> */}
      <button className="button genImgBtn" onClick={handleScreenShoot}>
        {btnTitle}
      </button>
    </>
  );
};

export default GetScreenShoot;
// export { imageUrl };
