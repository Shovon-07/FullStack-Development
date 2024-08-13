import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./Latest_Project_Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

function Latest_Project_Carousel(props) {
  const { dbData, imgPath } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="slider-container Latest_Project_Carousel">
      <Slider {...settings}>
        {dbData.map((items, index) => {
          return (
            <div className="Latest_Project_Carousel_card">
              <div className="left">
                <LazyLoadImage
                  src={`${imgPath}${items.Image}`}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
              <div className="right">
                <h1>This is right</h1>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Latest_Project_Carousel;
