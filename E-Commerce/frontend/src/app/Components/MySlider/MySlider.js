import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

//___ Css ___//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.css";

//___ Data ___//
// import { carouselData } from "@/assets/js/Data";
// import s from "@/assets/images/banner_1.jpg";
// import GetSliderData from "./GetSliderData";

const MySlider = async () => {
  // const data = await GetSliderData();
  // console.log(data.data.data);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* {data.data.data.map((items, index) => {
          return (
            <Link href={`/banner/${items.id}`} key={index}>
              <Image
                src={items.Gallery_img}
                alt="banners"
                width={100}
                height={100}
              />
            </Link>
          );
        })} */}
      </Slider>
    </div>
  );
};

export default MySlider;
