import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import { ProjectData } from "../../assets/Js/Data";

const UpcomingProject = () => {
  const [numberOfElement, setNumberOfElement] = useState(8);

  const slicedData = ProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  return (
    <div className="UpcomingProject page content">
      <h3 className="pageTitle">Upcoming Projects</h3>
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
                src={items.img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />

              <div className="txt d-flex">
                <h3 className="title">
                  {items.title.length > 70
                    ? items.title.slice(0, 70) + "..."
                    : items.title}
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

export default UpcomingProject;
