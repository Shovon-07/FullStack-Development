import React, { lazy, useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          src="/src/assets/Images/Banner.jpg"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          height={500}
          className="bannerImg"
        />
        <div className="overlay"></div>
        <div className="txt d-flex">
          <h1>রেডি প্লট</h1>
          <p>আমরা দিচ্ছি সর্বোচ্চ সুযোগ সুবিধা সহ রেডি প্লট</p>
          {/* <p>{c}</p> */}
        </div>
      </div>

      <div className="content">
        <div className="latestProject">
          <h3 className="pageTitle">Our latest projects</h3>
          <My_Carousel data={latestProject} />
        </div>
      </div>
    </div>
  );
};

export default Home;
