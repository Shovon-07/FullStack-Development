import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./Gallery.css";
import "react-lazy-load-image-component/src/effects/blur.css";

//___ Additional utilitis ___//
import { ProjectData } from "../../assets/Js/Data";

const Gallery = () => {
  const [numberOfElement, setNumberOfElement] = useState(8);

  const slicedData = ProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };
  return (
    <div className="Gallery page content">
      <h3 className="pageTitle">Gallery</h3>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
