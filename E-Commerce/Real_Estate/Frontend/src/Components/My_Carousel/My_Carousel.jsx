import React, { Component } from "react";
import Slider from "react-slick";

//___ Css ___//
import "./My_Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function My_Carousel(props) {
  const { data } = props;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false, // true
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
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
        {data.map((items, index) => (
          <div className="card" key={index}>
            <div className="img">
              <img src={items.img} alt="" />
            </div>
            <div className="txt">
              <h3 className="title">
                {items.title.length > 33
                  ? items.title.slice(0, 33) + " ..."
                  : items.title}
              </h3>
              <p className="description">
                {items.description.length > 150
                  ? items.description.slice(0, 150) + " ..."
                  : items.description}
              </p>
              <div style={{ textAlign: "center" }}>
                <button className="readMoreBtn btn c_pointer">Read more</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default My_Carousel;
