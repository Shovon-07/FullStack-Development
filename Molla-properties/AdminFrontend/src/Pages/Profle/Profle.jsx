import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Css ___//
import "./Profle.css";
import "react-toastify/dist/ReactToastify.css";

const Profle = () => {
  const { setLoader } = UseAuthContext();

  //___ Banner section start ___//
  const [bannerTxt, setBannerTxt] = useState("");
  const [bannerImg, setBannerImg] = useState();

  const SubmitBannerSection = async (e) => {
    e.preventDefault();

    if (bannerTxt == "" && bannerImg == null) {
      toast.error("You don't edit anything");
    } else {
      const payload = new FormData();
      payload.append("banner_txt", bannerTxt);
      payload.append("banner_img", bannerImg);

      setLoader(true);
      await AxiosClient.post("/update-banner", payload)
        .then((res) => {
          if (res.data.status == true) {
            setProjectData(res.data.msg);
            setBannerTxt("");
            setBannerImg(null);
            setLoader(false);
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((e) => {
          console.log(`Error = ${e}`);
          setLoader(false);
        });
    }
  };
  //___ Banner section start ___//

  return (
    <div className="Profle">
      <h3 className="pageTitle">Profle</h3>

      <div className="card">
        <h2 className="cardTitle">User information</h2>
        <form encType="multipart/form-data" onSubmit={SubmitBannerSection}>
          <input
            type="text"
            name="bannerTxt"
            placeholder="Enter banner text"
            value={bannerTxt}
            onChange={(e) => {
              setBannerTxt(e.target.value);
            }}
          />
          <input
            type="file"
            name="bannerImg"
            placeholder="Enter banner image"
            onChange={(e) => {
              setBannerImg(e.target.files[0]);
            }}
          />
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Profle;
