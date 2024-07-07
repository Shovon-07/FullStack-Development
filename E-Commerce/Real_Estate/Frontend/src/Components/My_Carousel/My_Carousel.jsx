import React, { Component } from "react";
import Slider from "react-slick";
import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Css ___//
import "./My_Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";

import b from "../../assets/Images/lagestProject/latestProject-1.jpg";

function My_Carousel(props) {
  const { data } = props;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // false
    autoplaySpeed: 5000,
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
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container My_Carousel">
      <Slider {...settings}>
        {data.map((items, index) => {
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
                  <button className="readMoreBtn btn c_pointer">
                    Read more
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default My_Carousel;
