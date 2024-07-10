import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

//___ Css ___//
import "./Gallery.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

//___ Additional utilitis ___//
import { ProjectData } from "../../assets/Js/Data";

const Gallery = () => {
  const [numberOfElement, setNumberOfElement] = useState(100);

  const slicedData = ProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="Gallery page content">
      <h3 className="pageTitle">Gallery</h3>

      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {slicedData.map((items, index) => {
          return (
            <a href={items.img} key={index}>
              <LazyLoadImage
                alt={items.img}
                src={items.img}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
              {/* <img alt={items.img} src={items.img} /> */}
              <div className="overlay">{/* <h3>View</h3> */}</div>
            </a>
          );
        })}
      </LightGallery>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <button className="btn" onClick={loadMore}>
          Load More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
