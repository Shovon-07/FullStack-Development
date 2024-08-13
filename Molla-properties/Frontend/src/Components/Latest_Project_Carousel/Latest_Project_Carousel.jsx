import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
  };

  return (
    <div className="slider-container Latest_Project_Carousel">
      <Slider {...settings}>
        {dbData.map((items, index) => {
          return (
            <div className="Latest_Project_Carousel_card" key={index}>
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
                <h3 className="title">
                  {items.Title.length > 70
                    ? items.Title.slice(0, 70) + " ..."
                    : items.Title}
                </h3>
                <p
                  className="description"
                  dangerouslySetInnerHTML={{
                    __html:
                      items.Features.length > 300
                        ? items.Features.slice(0, 300) + " ......"
                        : items.Features,
                  }}
                ></p>
                <div style={{ textAlign: "center" }}>
                  <Link
                    to={`/project-details/${items.id}`}
                    className="readMoreBtn btn c_pointer"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Latest_Project_Carousel;
