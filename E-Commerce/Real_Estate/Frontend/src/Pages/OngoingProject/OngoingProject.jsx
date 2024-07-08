import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css __//
import "./OngoingProject.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import { OngoingProjectData } from "../../assets/Js/Data";

const OngoingProject = () => {
  return (
    <div className="OngoingProject page content">
      {OngoingProjectData.map((items, index) => {
        return (
          <div className="card" key={index}>
            <div className="img">
              <LazyLoadImage
                src={items.img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
            </div>
            <div className="txt d-flex">
              {/* <div className="txtBox"> */}
              <h3 className="title">
                {items.title.length > 33
                  ? items.title.slice(0, 33) + " ..."
                  : items.title}
              </h3>
              {/* <p className="description">
              {items.description.length > 150
                ? items.description.slice(0, 150) + " ..."
                : items.description}
            </p> */}
              <div style={{ textAlign: "center" }}>
                <button className="readMoreBtn btn c_pointer">Read more</button>
              </div>
              {/* </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OngoingProject;
