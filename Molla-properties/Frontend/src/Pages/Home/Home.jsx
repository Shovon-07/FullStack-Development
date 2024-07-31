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
const My_Carousel = lazy(() =>
  import("../../Components/My_Carousel/My_Carousel")
);
const OurMissionVission = lazy(() =>
  import("../../Components/OurMissionVission/OurMissionVission")
);

const Home = () => {
  const [setLoader] = useOutletContext();

  const [latestProjectData, setLatestProjectData] = useState([]);
  const getLatestProjectData = async () => {
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

  useEffect(() => {
    getLatestProjectData();
  }, []);

  return (
    <div className="Home page">
      <div className="homeImg d-flex">
        <LazyLoadImage
          src={`${imgPath}Utility/Banner.jpg`}
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          height={500}
          className="bannerImg"
        />
        <div className="overlay"></div>
        <div className="txt d-flex">
          <h1>মোল্লা প্রপার্টিস</h1>
          <p>আমরা দিচ্ছি সর্বোচ্চ সুযোগ সুবিধা সহ রেডি প্লট</p>
          {/* <p>{c}</p> */}
        </div>
      </div>

      <div className="content">
        <section className="latestProject">
          <div className="d-flex pageTitle">
            <h3>Latest Projects</h3>
          </div>
          <Suspense fallback={<Loader />}>
            <My_Carousel
              latestProjectData={latestProjectData}
              imgPath={imgPath}
            />
          </Suspense>
        </section>

        <section className="ourLocation">
          <div className="d-flex pageTitle">
            <h3>Our location</h3>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd"
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
        <Suspense fallback={<Loader />}>
          <OurMissionVission />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
