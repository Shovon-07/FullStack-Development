import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css __//
import "../../assets/Css/Card.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import { honorableClient } from "../../assets/Js/Data";

const HonorableClient = () => {
  const [numberOfElement, setNumberOfElement] = useState(8);

  const slicedData = honorableClient.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  return (
    <div className="HonorableClient page content">
      <h3 className="pageTitle">Honorable Client</h3>
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
                  {items.name.length > 70
                    ? items.name.slice(0, 70) + " ..."
                    : items.name}
                </h3>
                <div style={{ textAlign: "center" }}></div>
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

export default HonorableClient;
