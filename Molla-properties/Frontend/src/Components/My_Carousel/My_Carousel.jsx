import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./My_Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

function My_Carousel(props) {
  const { dbData, imgPath } = props;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // false
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container My_Carousel">
      <Slider {...settings}>
        {dbData.map((items, index) => {
          return (
            // <div className="card" key={index}>
            //   <div className="img">
            //     <LazyLoadImage
            //       src={`${imgPath}${items.Image}`}
            //       effect="blur"
            //       wrapperProps={{
            //         style: { transitionDelay: "1s" },
            //       }}
            //     />
            //   </div>
            //   <div className="txt d-flex">
            //     <h3 className="title">
            //       {items.Title.length > 70
            //         ? items.Title.slice(0, 70) + " ..."
            //         : items.Title}
            //     </h3>
            //     <div style={{ textAlign: "center" }}>
            //       <NavLink
            //         to={`/project-details/${items.id}`}
            //         className="readMoreBtn btn c_pointer"
            //       >
            //         Read more
            //       </NavLink>
            //     </div>
            //   </div>
            // </div>
            <div className="card" key={index}>
              <div className="img">
                <LazyLoadImage
                  src={`${imgPath}${items.Gallery_img}`}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default My_Carousel;
