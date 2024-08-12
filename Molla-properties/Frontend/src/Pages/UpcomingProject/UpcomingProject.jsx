import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Helmet } from "react-helmet";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const UpcomingProject = () => {
  const [setLoader] = useOutletContext();

  const [upComingProjectData, setUpComingProjectData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(3);
  const slicedData = upComingProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getUpComingProjectData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/up-coming-projects").then((res) => {
        if (res.data.status == true) {
          setUpComingProjectData(res.data.data);
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
    getUpComingProjectData();
  }, []);

  return (
    <div className="UpcomingProject page content">
      <Helmet>
        <title>Upcoming Projects</title>
        <meta
          name="description"
          content="রাজশাহীতে সুলভ মুল্যে প্লট আকারে জমি বিক্রয় চলিতেছে"
        />
        <meta name="keywords" content="রাজশাহীতে প্লট ও জমি বিক্রয়" />
      </Helmet>

      <div className="d-flex pageTitle">
        <h1>Upcoming Projects</h1>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="cardWrapper d-flex gap-20">
        {slicedData.map((items, index) => {
          return (
            <div className="card" key={index}>
              <LazyLoadImage
                src={`${imgPath}${items.Image}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />

              <div className="txt d-flex">
                <h3 className="title">
                  {items.Title.length > 70
                    ? items.Title.slice(0, 70) + "..."
                    : items.Title}
                </h3>
                <div style={{ textAlign: "center" }}>
                  <NavLink
                    to={`/project-details/${items.id}`}
                    className="readMoreBtn btn c_pointer"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className={upComingProjectData.length > 3 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default UpcomingProject;
