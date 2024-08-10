import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UseAuthContext } from "../../Context/AuthContext";
const JoditEditor = lazy(() => import("jodit-react"));

//___ Css ___//
import "./Home.css";
import "../../assets/Css/TextEditor.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import Loader from "../../Components/Loader/Loader";
import AxiosClient from "../../assets/Js/AxiosClient";

const Home = () => {
  const { setLoader } = UseAuthContext();

  //___ Banner section start ___//
  const [homeContentInput, setHomeContentInput] = useState({
    BannerTitle: "",
    BannerMoto: "",
  });
  const [BannerImage, setBannerImg] = useState();

  const HandleHomeContentInput = (e) => {
    setHomeContentInput({
      ...homeContentInput,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitBannerSection = async (e) => {
    e.preventDefault();

    if (
      homeContentInput.BannerTitle == "" &&
      homeContentInput.BannerMoto == "" &&
      bannerImg == null
    ) {
      toast.error("You don't edit anything");
    } else {
      const payload = new FormData();
      payload.append("banner_title", homeContentInput.BannerTitle);
      payload.append("banner_moto", homeContentInput.BannerMoto);
      payload.append("banner_img", BannerImage);

      setLoader(true);
      await AxiosClient.post("/update-banner", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
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
  //___ Banner section end ___//

  //___ Mission vission section start ___//
  const editor = useRef(null);
  const [vissionTxt, setVissionTxt] = useState("");
  const [missionTxt, setMissionTxt] = useState("");
  const [investUs, setInvestUs] = useState("");

  const SubmitMissionVissionSection = async (e) => {
    e.preventDefault();

    if (vissionTxt == "" && missionTxt == "" && investUs == "") {
      toast.error("You don't edit anything");
    } else {
      const payload = new FormData();
      payload.append("vission_txt", vissionTxt);
      payload.append("mission_txt", missionTxt);
      payload.append("investus_txt", investUs);

      setLoader(true);
      await AxiosClient.post("/update-mission-vission", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
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
  //___ Mission vission section end ___//

  //___ Get home content start ___//
  const GetHomeContent = async () => {
    setLoader(true);
    await AxiosClient.get("/home-content")
      .then((response) => {
        setHomeContentInput(response.data.data[0]);
        setVissionTxt(response.data.data[0].OurVission);
        setMissionTxt(response.data.data[0].OurMission);
        setInvestUs(response.data.data[0].InvestWithUs);

        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };
  //___ Get home content end ___//

  useEffect(() => {
    GetHomeContent();
  }, []);

  return (
    <div className="Home">
      <h3 className="pageTitle">Home</h3>

      <div className="card">
        <h2 className="cardTitle" style={{ marginBottom: "30px" }}>
          Edit banner
        </h2>
        <form encType="multipart/form-data" onSubmit={SubmitBannerSection}>
          <input
            type="text"
            name="BannerTitle"
            placeholder="Enter banner title"
            value={homeContentInput.BannerTitle}
            onChange={HandleHomeContentInput}
          />
          <input
            type="text"
            name="BannerMoto"
            placeholder="Enter moto"
            value={homeContentInput.BannerMoto}
            onChange={HandleHomeContentInput}
          />
          <input
            type="file"
            name="BannerImage"
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

      <div className="card" style={{ color: "var(--dark-1)" }}>
        <form
          encType="multipart/form-data"
          onSubmit={SubmitMissionVissionSection}
        >
          <h2 className="cardTitle">Vission</h2>
          <Suspense fallback={<Loader />}>
            <JoditEditor
              ref={editor}
              value={vissionTxt}
              tabIndex={1}
              onBlur={(newContent) => setVissionTxt(newContent)}
              onChange={(newContent) => {}}
            />
          </Suspense>

          <h2 className="cardTitle">Mission</h2>
          <Suspense fallback={<Loader />}>
            <JoditEditor
              ref={editor}
              value={missionTxt}
              tabIndex={1}
              onBlur={(newContent) => setMissionTxt(newContent)}
              onChange={(newContent) => {}}
            />
          </Suspense>

          <h2 className="cardTitle">Invest with us</h2>
          <Suspense fallback={<Loader />}>
            <JoditEditor
              ref={editor}
              value={investUs}
              tabIndex={1}
              onBlur={(newContent) => setInvestUs(newContent)}
              onChange={(newContent) => {}}
            />
          </Suspense>

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

export default Home;
