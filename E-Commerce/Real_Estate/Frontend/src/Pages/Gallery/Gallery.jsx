import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";
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
import AxiosClient from "../../assets/Js/AxiosClient";
import { imgPath } from "../../assets/Js/Data";

const Gallery = () => {
  const [setLoader] = useOutletContext();

  const [galleryData, setGalleryData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(4);
  const slicedData = galleryData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getGalleryData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-galleries-img").then((res) => {
        if (res.data.status == true) {
          setGalleryData(res.data.data);
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
    getGalleryData();
  }, []);

  const onInit = () => {
    // console.log("lightGallery has been initialized");
  };

  return (
    <div className="Gallery page content">
      <h3 className="pageTitle">Gallery</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {slicedData.map((items, index) => {
          return (
            <a href={`${imgPath}${items.Gallery_img}`} key={index}>
              <LazyLoadImage
                alt={items.Gallery_img}
                src={`${imgPath}${items.Gallery_img}`}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "1s" },
                }}
              />
              <div className="overlay"></div>
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
