import { useEffect, useState } from "react";
import { NavLink, useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const CompletedProject = () => {
  const [setLoader] = useOutletContext();

  const [completedProjectData, setCompletedProjectData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(8);
  const slicedData = completedProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getOnGoingData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/completed-project").then((res) => {
        if (res.data.status == true) {
          setCompletedProjectData(res.data.data);
          setLoader(false);
        } else {
          toast.error(res.data.msg);
          setLoader(false);
        }
      });
    } catch (err) {
      toast.error(err);
    }
  };

  useEffect(() => {
    getOnGoingData();
  }, []);

  return (
    <div className="CompletedProject page content">
      <h3 className="pageTitle">Completed Projects</h3>
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
                src={`http://localhost:8000/${items.Image}`}
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

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default CompletedProject;
