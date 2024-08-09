import React, { Suspense, lazy, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";

//___ Css __//
import "./Home.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";
const Latest_Project_Carousel = lazy(() =>
  import("../../Components/Latest_Project_Carousel/Latest_Project_Carousel")
);
const My_Carousel = lazy(() =>
  import("../../Components/My_Carousel/My_Carousel")
);
const OurMissionVission = lazy(() =>
  import("../../Components/OurMissionVission/OurMissionVission")
);

const Home = () => {
  const [setLoader] = useOutletContext();

  // Get home content
  const [homeContent, setHomeContent] = useState([]);
  const GetHomeContent = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/home-content").then((res) => {
        if (res.data.status == true) {
          setHomeContent(res.data.data[0]);
          console.log(res.data.data[0].BannerImage);

          setLoader(false);
        } else {
          console.log(res.data.msg);
          setLoader(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Get latest project
  const [latestProjectData, setLatestProjectData] = useState([]);
  const GetLatestProjectData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/latest-project").then((res) => {
        if (res.data.status == true) {
          setLatestProjectData(res.data.data);
          setLoader(false);
        } else {
          console.log(res.data.msg);
          setLoader(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  // Get gallery data
  const [imagesData, setImagesData] = useState([]);
  const GetImagesData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-galleries-img").then((res) => {
        if (res.data.status == true) {
          setImagesData(res.data.data);
          setLoader(false);
        } else {
          console.log(res.data.msg);
          setLoader(false);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    GetHomeContent();
    GetLatestProjectData();
    GetImagesData();
  }, []);

  return (
    <div className="Home page">
      <div className="homeImg d-flex">
        <LazyLoadImage
          src={`${imgPath}${homeContent.BannerImage}`}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          height={500}
          className="bannerImg"
        />
        <div className="overlay"></div>
        <div className="txt d-flex">
          <h1>{homeContent.BannerTitle}</h1>
          <p>{homeContent.BannerMoto}</p>
        </div>
      </div>

      <div className="content">
        <section className="latestProject">
          <div className="d-flex pageTitle">
            <h3>Latest Projects</h3>
          </div>
          <Suspense fallback={<Loader />}>
            <Latest_Project_Carousel
              dbData={latestProjectData}
              imgPath={imgPath}
            />
          </Suspense>
        </section>

        <section className="ourLocation">
          <div className="d-flex pageTitle">
            <h3>Our location</h3>
          </div>
          <iframe
            src={homeContent.Map}
            width="100%"
            height="450"
            style={{
              border: "1px solid var(--light-2)",
              outline: "0",
              borderRadius: "12px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>

        <section className="latestProject">
          <div className="d-flex pageTitle">
            <h3>Our Images</h3>
          </div>
          <Suspense fallback={<Loader />}>
            <My_Carousel dbData={imagesData} imgPath={imgPath} />
          </Suspense>
        </section>

        <Suspense fallback={<Loader />}>
          <OurMissionVission homeContent={homeContent} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
