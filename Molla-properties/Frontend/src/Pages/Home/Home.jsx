import React, { Suspense, lazy, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <title>Molla properties</title>
        <meta
          name="description"
          content="রাজশাহীতে সুলভ মুল্যে প্লট আকারে জমি বিক্রয় চলিতেছে"
        />
        <meta
          name="keywords"
          content="রাজশাহীতে প্লট ও জমি বিক্রয়,প্লট ও জমি,জমি বিক্রয়,প্লট বিক্রয়"
        />
        <meta
          name="author"
          content="Name: Al jubair shovon, Contact no: 01767692422, Email: aljubairshovon@gmail.com, Facebook: https://www.facebook.com/aljubair.shovon"
        />
        <meta property="og:title" content="প্লট আকারে জমি বিক্রয়" />
        <meta
          property="og:description"
          content="রাজশাহীতে সুলভ মুল্যে প্লট আকারে জমি বিক্রয় চলিতেছে"
        />
        <meta
          property="og:image"
          content="https://backend.molla-properties.com/public/Images/Utility/Logo.png"
        />
      </Helmet>
      <h1 className="d-none">প্লট আকারে জমি বিক্রয়</h1>
      <div className="homeImg d-flex">
        <LazyLoadImage
          src={`${imgPath}${homeContent.BannerImage}`}
          alt="Molla properties"
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
            <h1>Latest Projects</h1>
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
            <h1>Our location</h1>
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
            <h1>Our Images</h1>
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
