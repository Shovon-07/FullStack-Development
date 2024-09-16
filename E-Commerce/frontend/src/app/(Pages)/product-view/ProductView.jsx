import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

//___ Icons ___//
import { CiHeart } from "react-icons/ci";
import { IoMdShare, IoMdTimer } from "react-icons/io";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoLocationOutline, IoShieldOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { BsCash } from "react-icons/bs";

//___ Images ___//
import Product_1 from "/images/product-1.jpg";
import Product_2 from "/images/product-2.jpg";
import Product_3 from "/images/product-3.jpg";

//___ CSS ___//
import "./ProductView.scss";

//___ Data ___//
import { productsData } from "../../Data";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import RattingComponent from "../../Components/RattingComponent/RattingComponent";
import Reviews from "../../Components/Reviews/Reviews";

const ProductView = () => {
  const { id } = useParams();

  const [quentity, setQuentity] = useState(1);

  const handleChange = (e) => {
    setQuentity(e.target.value);
  };

  const handleMinus = () => {
    setQuentity((prev) => prev - 1);
  };

  const handlePlus = () => {
    setQuentity((prev) => prev + 1);
  };

  return (
    <>
      <Header />
      <div className="ProductView container">
        <div className="content d-flex gap-20">
          <div className="left">
            <img src={Product_1} alt="" className="mainImg" />
            <div className="imgBtn d-flex gap-10">
              <img src={Product_1} alt="" />
              <img src={Product_2} alt="" />
              <img src={Product_3} alt="" />
            </div>
          </div>
          <div className="middle">
            <h2 className="productTitle">
              Rectangular White MC Stan Sunglasses For Men
            </h2>
            <div className="rate d-flex">
              <div>
                <div className="d-flex">
                  <RattingComponent value={3} />
                  <span style={{ margin: "0 8px" }}>|</span>
                  <Link>11 Answered Questions</Link>
                </div>
                <div className="brand">
                  <span>
                    Brand:<Link>No Brand</Link>
                  </span>{" "}
                  |{" "}
                  <span>
                    <Link>More Eyewear from No Brand</Link>
                  </span>
                </div>
              </div>
              <div className="d-flex gap-10">
                <IoMdShare size={25} className="cursor icon" />
                <CiHeart size={30} className="cursor icon" />
              </div>
            </div>
            <div className="price">
              <h3>
                <FaBangladeshiTakaSign /> 500
              </h3>
              <div className="discount d-flex gap-10">
                <s>
                  <FaBangladeshiTakaSign /> 700
                </s>
                <span>-50%</span>
              </div>
            </div>
            <div className="Quentity">
              <span>Quentity</span>
              <button className="minus cursor" onClick={handleMinus}>
                -
              </button>
              <input type="text" value={quentity} onChange={handleChange} />
              <button className="plus cursor" onClick={handlePlus}>
                +
              </button>
            </div>
            <div className="d-flex gap-10">
              <button className="buy button">Buy Now</button>
              <button className="cart button">Add to Cart</button>
            </div>
          </div>
          <div className="right">
            <div className="topTitle d-flex">
              <p>Delivery</p>
              <AiOutlineExclamationCircle className="cursor" />
            </div>
            <div className="location d-flex flex-start rightSection">
              <div
                className="d-flex gap-10 flex-start"
                style={{ flexBasis: "80%" }}
              >
                <IoLocationOutline size={30} />{" "}
                <p>Dhaka, Dhaka North, Banani Road No. 12 - 19</p>
              </div>
              <div style={{ textAlign: "end", flexBasis: "20%" }}>
                <Link>CHANGE</Link>
              </div>
            </div>
            <div className="deleveryCharge d-flex flex-start rightSection">
              <div
                className="d-flex gap-10 flex-start"
                style={{ flexBasis: "80%" }}
              >
                <GoRocket size={30} />
                <p> Standard Delivery 29 Mar - 3 Apr 5 - 10 day(s)</p>
              </div>
              <div style={{ textAlign: "end", flexBasis: "20%" }}>
                <FaBangladeshiTakaSign /> 50
              </div>
            </div>
            <div className="d-flex gap-10 flex-start  rightSection">
              <BsCash size={22} /> <p>Cash on Delivery Available</p>
            </div>
            <div className="topTitle d-flex">
              <p>Services</p>
              <AiOutlineExclamationCircle className="cursor" />
            </div>
            <div className="d-flex gap-10 flex-start rightSection">
              <div>
                <IoMdTimer size={22} />
              </div>
              <div>
                <p>7 Day Return</p>
                <p>Change of mind applicable</p>
              </div>
            </div>
            <div className="d-flex gap-10 flex-start  rightSection">
              <IoShieldOutline size={22} />
              <p>Warranty not available</p>
            </div>
            <div className="sellerPoint d-flex gap-10 flex-start rightSection">
              <div>
                <p>Positive Seller Ratings</p>
                <p className="percent">78%</p>
              </div>
              <div>
                <p>Ship on Time</p>
                <p className="percent">100%</p>
              </div>
              <div>
                <p>Chat Response Rate</p>
                <p className="percent">65%</p>
              </div>
            </div>
          </div>
        </div>
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default ProductView;
