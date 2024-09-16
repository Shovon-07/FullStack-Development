import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";

//___ Css ___//
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MySlider.css";

//___ Data ___//
import { carouselData } from "@/assets/Data";

const MySlider = () => {
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
        {carouselData.map((items) => {
          return (
            <Link href={`/banner/${items.id}`} key={items.id}>
              <Image src={items.img} alt="banners" width={100} height={100} />
            </Link>
          );
        })}
      </Slider>
    </div>
  );
};

export default MySlider;
