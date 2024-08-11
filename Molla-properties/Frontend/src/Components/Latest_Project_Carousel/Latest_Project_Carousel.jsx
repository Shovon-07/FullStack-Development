import React, { Component } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
// import { Carousel } from "react-responsive-carousel";

//___ Css ___//
import "./Latest_Project_Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-lazy-load-image-component/src/effects/blur.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

function My_Carousel(props) {
  const { dbData, imgPath } = props;

  const settings = {
    dots: true,
    lazyLoad: true,
    autoplay: true,
    speed: 1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

    // autoplaySpeed: 2000,
    // cssEase: "linear",
  };

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true, // false
  //   autoplaySpeed: 3000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 1600,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         initialSlide: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="slider-container Latest_Project_Carousel">
      <Slider {...settings}>
        {dbData.map((items, index) => {
          return (
            <div className="card" key={index}>
              <div className="img">
                <LazyLoadImage
                  src={`${imgPath}${items.Image}`}
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
              <div className="txt d-flex">
                <h3 className="title">
                  {items.Title.length > 70
                    ? items.Title.slice(0, 70) + " ..."
                    : items.Title}
                </h3>
                <div style={{ textAlign: "center" }}>
                  <NavLink
                    to={`/project-details/${items.id}`}
                    className="readMoreBtn btn c_pointer"
                  >
                    Read more
                  </NavLink>
                </div>
              </div>
            </div>

            // <div className="card" key={index}>
            //   <div className="img">
            //     <LazyLoadImage
            //       src={`${imgPath}${items.Gallery_img}`}
            //       effect="blur"
            //       wrapperProps={{
            //         style: { transitionDelay: "1s" },
            //       }}
            //     />
            //   </div>
            // </div>
          );
        })}
      </Slider>
    </div>

    // <Carousel
    //   autoPlay
    //   infiniteLoop
    //   interval={1000}
    //   centerMode
    //   centerSlidePercentage={30}
    // >
    //   {dbData.map((items, index) => {
    //     return (
    //       <div className="card" key={index}>
    //         <div className="img">
    //           <LazyLoadImage
    //             src={`${imgPath}${items.Image}`}
    //             effect="blur"
    //             wrapperProps={{
    //               style: { transitionDelay: "1s" },
    //             }}
    //           />
    //         </div>
    //         <div className="txt d-flex">
    //           <h3 className="title">
    //             {items.Title.length > 70
    //               ? items.Title.slice(0, 70) + " ..."
    //               : items.Title}
    //           </h3>
    //           <div style={{ textAlign: "center" }}>
    //             <NavLink
    //               to={`/project-details/${items.id}`}
    //               className="readMoreBtn btn c_pointer"
    //             >
    //               Read more
    //             </NavLink>
    //           </div>
    //         </div>
    //       </div>

    //       // <div className="card" key={index}>
    //       //   <div className="img">
    //       //     <LazyLoadImage
    //       //       src={`${imgPath}${items.Gallery_img}`}
    //       //       effect="blur"
    //       //       wrapperProps={{
    //       //         style: { transitionDelay: "1s" },
    //       //       }}
    //       //     />
    //       //   </div>
    //       // </div>
    //     );
    //   })}
    // </Carousel>
  );
}

export default My_Carousel;
