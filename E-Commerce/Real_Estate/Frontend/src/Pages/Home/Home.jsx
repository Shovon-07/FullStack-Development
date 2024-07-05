import React, { lazy } from "react";

//___ Css __//
import "./Home.css";

//___ Components ___//
import Loader from "../../Components/Loader/Loader";
const My_Carousel = lazy(() =>
  import("../../Components/My_Carousel/My_Carousel")
);

const Home = () => {
  return (
    <div className="Home">
      <div className="homeImg d-flex">
        <div className="overlay"></div>
        <div className="txt d-flex">
          <h1>রেডি প্লট</h1>
          {/* <h2>
            Lets work together <span>...</span>
          </h2> */}
          <p>আমরা দিচ্ছি সর্বোচ্চ সুযোগ সুবিধা সহ রেডি প্লট</p>
        </div>
      </div>

      <div className="content">
        <div className="latestProject">
          <h3 className="pageTitle">Our latest projects</h3>
          <My_Carousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
