import React, { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet";

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
      <Helmet>
        <meta name="robots" content="index,follow" />
        <title>Image Gallery</title>
        <meta name="description" content="এগুলো সব মোল্লা প্রোপারটির ছবি" />
        <meta name="keywords" content="মোল্লা প্রোপারটির ছবি" />
      </Helmet>

      <div className="d-flex pageTitle">
        <h1>Image Gallery</h1>
      </div>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]}>
        {galleryData.map((items, index) => {
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
    </div>
  );
};

export default Gallery;
