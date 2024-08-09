import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Css ___//
import "./Home.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Home = () => {
  const { setLoader } = UseAuthContext();

  //___ Banner section start ___//
  const [homeContentInput, setHomeContentInput] = useState({
    banner_title: "",
    banner_moto: "",
  });
  const [bannerImg, setBannerImg] = useState();

  const HandleHomeContentInput = (e) => {
    setHomeContentInput({
      ...homeContentInput,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitBannerSection = async (e) => {
    e.preventDefault();

    if (
      homeContentInput.banner_title == "" &&
      homeContentInput.banner_moto == "" &&
      bannerImg == null
    ) {
      toast.error("You don't edit anything");
    } else {
      const payload = new FormData();
      payload.append("banner_title", homeContentInput.banner_title);
      payload.append("banner_moto", homeContentInput.banner_moto);
      payload.append("banner_img", bannerImg);

      setLoader(true);
      await AxiosClient.post("/update-banner", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setHomeContentInput({
              banner_title: "",
              banner_moto: "",
              banner_img: "",
            });
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
    <div className="Home">
      <h3 className="pageTitle">Home</h3>

      <div className="card">
        <h2 className="cardTitle">Edit banner</h2>
        <form encType="multipart/form-data" onSubmit={SubmitBannerSection}>
          <input
            type="text"
            name="banner_title"
            placeholder="Enter banner text"
            value={homeContentInput.banner_title}
            onChange={HandleHomeContentInput}
          />
          <input
            type="text"
            name="banner_moto"
            placeholder="Enter banner text"
            value={homeContentInput.banner_moto}
            onChange={HandleHomeContentInput}
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

      {/* <div className="card">
        <input type="text" name="vissionTxt" placeholder="Enter our vission" />
        <input type="text" name="missionTxt" placeholder="Enter our mission" />
        <input type="text" name="vissionTxt" placeholder="Enter our vission" />
      </div> */}

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

export default Home;
