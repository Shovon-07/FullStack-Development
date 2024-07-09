import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import { OngoingProjectData } from "../../assets/Js/Data";

const OngoingProject = () => {
  return (
    <div className="OngoingProject page content">
      <h3 className="pageTitle">Ongoing Projects</h3>
      <div className="cardWrapper d-flex gap-20">
        {OngoingProjectData.map((items, index) => {
          return (
            <div className="card">
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
                  <NavLink className="readMoreBtn btn c_pointer">
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div class="clearfix"></div>
    </div>
  );
};

export default OngoingProject;
