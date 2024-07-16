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

const Gallery = () => {
  const [setLoader] = useOutletContext();

  const [upComingProjectData, setUpComingProjectData] = useState([]);
  const [numberOfElement, setNumberOfElement] = useState(8);
  const slicedData = upComingProjectData.slice(0, numberOfElement);
  const loadMore = () => {
    setNumberOfElement((prev) => prev * 2);
  };

  const getOnGoingData = async () => {
    try {
      setLoader(true);
      await AxiosClient.get("/all-galleries-img").then((res) => {
        if (res.data.status == true) {
          console.log(res.data.data);
          setUpComingProjectData(res.data.data);
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
            <a href={`http://localhost:8000/${items.Gallery_img}`} key={index}>
              <LazyLoadImage
                alt={items.Gallery_img}
                src={`http://localhost:8000/${items.Gallery_img}`}
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
