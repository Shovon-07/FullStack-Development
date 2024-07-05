import React, { Component } from "react";
import Slider from "react-slick";

//___ Css ___//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function My_Carousel(props) {
  const { data } = props;

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((items, index) => (
          <div className="card">
            <img src={items.img} alt="" />
            <div className="txt">
              <h2 className="title">{items.title}</h2>
              <p className="description">{items.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default My_Carousel;
