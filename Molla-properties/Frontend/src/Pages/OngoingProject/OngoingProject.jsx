import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const OngoingProject = () => {
  const [setLoader] = useOutletContext();

  const [ongoingProjectData, setOngoingProjectData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(3);
  const slicedData = ongoingProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getOnGoingProjectData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/on-going-projects").then((res) => {
        if (res.data.status == true) {
          // console.log(res.data.data);
          setOngoingProjectData(res.data.data);
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
    getOnGoingProjectData();
  }, []);

  return (
    <div className="OngoingProject page content">
      <div className="d-flex pageTitle">
        <h3>Ongoing Projects</h3>
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
        className={ongoingProjectData.length > 3 ? "" : "d-none"}
        style={{ textAlign: "center", marginTop: "100px" }}
      >
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default OngoingProject;
