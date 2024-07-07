import React, { Suspense, lazy, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Images __//
import Banner from "../../assets/Images/Banner.jpg";

//___ Css __//
import "./Home.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import { latestProject } from "../../assets/Js/Data";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";
const My_Carousel = lazy(() =>
  import("../../Components/My_Carousel/My_Carousel")
);

const Home = () => {
  // const [c, setC] = useState(0);
  useEffect(() => {
    // setC((prev) => (prev += 1));
  });
  return (
    <div className="Home page">
      <div className="homeImg d-flex">
        <LazyLoadImage
          src={Banner}
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
          <h3 className="pageTitle">Our latest projects</h3>
          <Suspense fallback={<Loader />}>
            <My_Carousel data={latestProject} />
          </Suspense>
        </section>

        <section className="ourLocation">
          <h3 className="pageTitle">Our location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.05586754641!2d88.62525289999999!3d24.414126599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbef9a89d36a4f%3A0xa3d190c128125221!2z4Kau4KeL4Kay4KeN4Kay4Ka-IOCmrOCmvuCnnOCmvyAtIE1vbGxhIEJhcmk!5e0!3m2!1sen!2sbd!4v1720317903670!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{
              border: "0",
              outline: "0",
              borderRadius: "12px",
              boxShadow: "var(--shadow)",
            }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default Home;
