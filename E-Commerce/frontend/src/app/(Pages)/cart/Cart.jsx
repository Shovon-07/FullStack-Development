import React, { useState } from "react";
import { Link } from "react-router-dom";

//___ Icons ___//
import { AiOutlineDelete } from "react-icons/ai";
import {
  FaAngleDown,
  FaAngleRight,
  FaBangladeshiTakaSign,
} from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";

//___ Images ___//
import Product_1 from "/images/product-1.jpg";
import Product_2 from "/images/product-2.jpg";

//___ Css ___//
import "./Cart.scss";

//___ Components ___//
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Cart = () => {
  const [title, setTitle] =
    useState(`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Earum dolor aut sunt a, autem eius consequatur quisquam
  consequuntur voluptate`);

  const [quentity, setQuentity] = useState({
    product_1: "5",
    product_2: "2",
  });

  const handleChange = (e) => {
    setQuentity((prev) => {
      return {
        ...quentity,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleMinus = () => {
    // setQuentity((prev) => prev - 1);
    alert("minus");
  };

  const handlePlus = () => {
    setQuentity(...quentity);
  };

  return (
    <>
      <Header />
      <div className="Cart container">
        <div className="content d-flex">
          <div className="leftContent">
            <div className="leftTop d-flex">
              <div className="d-flex gap-10">
                <input type="checkbox" />
                <p>SELECT ALL (10 ITEM)</p>
              </div>
              <div className="deleteAll d-flex gap-10">
                <AiOutlineDelete className="icon" />
                <span>DELETE</span>
              </div>
            </div>
            <div className="item">
              <div className="itemTop d-flex">
                <div
                  className="d-flex gap-10"
                  style={{ alignItems: "flex-start" }}
                >
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <Link className="shopName d-flex">
                      Fashion Underwear Store <FaAngleRight className="icon" />
                    </Link>
                    <p style={{ fontSize: "14px" }}>
                      Buy 1 item(s) enjoy free shipping for Standard delivery
                      option
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-10 getVoucher">
                  Get Voucher <FaAngleDown />
                </div>
              </div>
              <div className="itemBottom d-flex gap-10">
                <div>
                  <img src={Product_1} alt="" />
                </div>
                <div>
                  <Link className="title d-flex">
                    {title.length > 80 ? title.substr(0, 80) + "..." : title}
                  </Link>
                  <p className="details d-flex gap-10">
                    <span>No Brand,</span>
                    <span>Color Family: White,</span>
                    <span>Size: M</span>
                  </p>
                </div>
                <div className="Price">
                  <p>
                    <FaBangladeshiTakaSign className="icon" /> 511
                  </p>
                  <p>
                    <FaBangladeshiTakaSign className="icon" /> <s>700</s>
                  </p>
                  <p>-20%</p>
                  <p className="d-flex gap-10">
                    <CiHeart className="icon" />
                    <AiOutlineDelete className="icon" />
                  </p>
                </div>
                <div className="Quentity">
                  <button className="minus cursor" onClick={handleMinus}>
                    -
                  </button>
                  <input
                    type="text"
                    name="product_1"
                    value={quentity.product_1}
                    onChange={handleChange}
                  />
                  <button className="plus cursor" onClick={handlePlus}>
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemTop d-flex">
                <div
                  className="d-flex gap-10"
                  style={{ alignItems: "flex-start" }}
                >
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div>
                    <Link className="shopName d-flex">
                      Fashion Underwear Store <FaAngleRight className="icon" />
                    </Link>
                    <p style={{ fontSize: "14px" }}>
                      Buy 1 item(s) enjoy free shipping for Standard delivery
                      option
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-10 getVoucher">
                  Get Voucher <FaAngleDown />
                </div>
              </div>
              <div className="itemBottom d-flex gap-10">
                <div>
                  <img src={Product_2} alt="" />
                </div>
                <div>
                  <Link className="title d-flex">
                    {title.length > 80 ? title.substr(0, 80) + "..." : title}
                  </Link>
                  <p className="details d-flex gap-10">
                    <span>No Brand,</span>
                    <span>Color Family: White,</span>
                    <span>Size: M</span>
                  </p>
                </div>
                <div className="Price">
                  <p>
                    <FaBangladeshiTakaSign className="icon" /> 511
                  </p>
                  <p>
                    <FaBangladeshiTakaSign className="icon" /> <s>700</s>
                  </p>
                  <p>-20%</p>
                  <p className="d-flex gap-10">
                    <CiHeart className="icon" />
                    <AiOutlineDelete className="icon" />
                  </p>
                </div>
                <div className="Quentity">
                  <button className="minus cursor" onClick={handleMinus}>
                    -
                  </button>
                  <input
                    type="text"
                    name="product_2"
                    value={quentity.product_2}
                    onChange={handleChange}
                  />
                  <button className="plus cursor" onClick={handlePlus}>
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rightContent">
            <h3>Order Summary</h3>
            <div className="d-flex subTotal">
              <p>Subtotal (0 items)</p>
              <p>
                <FaBangladeshiTakaSign /> 0
              </p>
            </div>
            <div className="voucher d-flex">
              <input type="text" placeholder="Enter voucher code" />
              <button className="button">APPLY</button>
            </div>
            <div className="d-flex total">
              <p>Total</p>
              <p>
                <FaBangladeshiTakaSign className="icon" /> 0
              </p>
            </div>
            <button className="checkout button">Checkout</button>
            {/* <div></div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
