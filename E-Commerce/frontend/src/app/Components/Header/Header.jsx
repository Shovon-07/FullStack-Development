"use client";

import React, { useState } from "react";
import Link from "next/link";

//___ Icons ___//
import { FaUserAlt, FaHeadphonesAlt } from "react-icons/fa";
import {
  FaCartShopping,
  FaAngleDown,
  FaTruckFast,
  FaShield,
} from "react-icons/fa6";
import { IoEarth, IoSearch } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";

//___ Css ___//
import "./Header.css";

//___ Images ___//
import Logo from "@/assets/images/icons/Company_orrange.png";
// import LogoSky from "/images/logo-sky.png";
import BdFlag from "@/assets/images/bd.svg";
import UsFlag from "@/assets/images/us.svg";
import UserImg from "@/assets/images/users/web-page.jpg";
import Image from "next/image";

//___ Data ___//
// import { notificationDataLength } from "../../Data";

//___ Components ___//
// import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = (props) => {
  // Props
  // const { setColor } = props;

  // States
  // const [toggler, setToggler] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    // <div className={`Header ${toggler == true ? "active" : ""}`}>
    <div className="Header">
      <div className="headerContainer">
        <div className="firstHeader">
          <div className="d-flex">
            <div>
              <div className="menus d-flex">
                <li>
                  <Link href="/">Become a Seller</Link>
                </li>
                <li>
                  <Link href="/">Donates</Link>
                </li>
                <li className="dropDownParent">
                  <Link href="/">Help & Support</Link>
                  <div className="dropDownBox" style={{ width: "400px" }}>
                    <div className="corner"></div>
                    <Link href="/" className="d-flex gap-10 dropDownItem">
                      <FaUserAlt className="icon" />
                      Help Center
                    </Link>
                    <Link href="/" className="d-flex gap-10 dropDownItem">
                      <FaHeadphonesAlt className="icon" />
                      Chat with Us
                    </Link>
                    <Link href="/" className="d-flex gap-10 dropDownItem">
                      <FaCartShopping className="icon" /> Order
                    </Link>
                    <Link href="/" className="d-flex gap-10 dropDownItem">
                      <FaTruckFast className="icon" /> Shipping & Delivery
                    </Link>
                    <Link href="/" className="d-flex gap-10 dropDownItem">
                      <FaShield className="icon" /> CCMS- Central Complain
                      Management System
                    </Link>
                  </div>
                </li>
              </div>
            </div>
            <div className="appBtn d-flex gap-10">
              <Image src={UsFlag} alt="app logo" />
              <p>Save More on App</p>
            </div>
          </div>
          <div className="additionalSecondHeader">
            <div className="logo d-flex">
              <Image src={Logo} alt="logo" />
            </div>
            <div
              className="toggler"
              onClick={() => setToggler((prev) => !prev)}
            >
              <HiMenu size={25} />
            </div>
          </div>
        </div>
        <div className="secondHeader d-flex">
          <div className="logo d-flex">
            <Image src={Logo} alt="logo" />
          </div>
          <div className="searchBox">
            <div className="searchItem">
              <input type="text" placeholder="Search here" />
              <div className="searchBtn d-flex">
                <IoSearch size={20} />
              </div>
            </div>
          </div>
          <div className="menus d-flex gap-10">
            <li>
              <Link href="/login" className="d-flex">
                <FaUserAlt className="icon" size={17} />
                <p>Login</p>
              </Link>
            </li>
            <li>
              <Link href="/signup" className="">
                <p>Signup</p>
              </Link>
            </li>
            <li className="country dropDownParent d-flex">
              <Link href="/" className="d-flex">
                <IoEarth className="icon" size={20} />
                <p>BD</p>
                <FaAngleDown className="angle" />
              </Link>
              <div className="dropDownBox" style={{ width: "120px" }}>
                <div className="corner"></div>
                <Link href="/" className="d-flex gap-10 dropDownItem">
                  <Image src={BdFlag} alt="bd flag" /> BD
                </Link>
                <Link href="/" className="d-flex gap-10 dropDownItem">
                  <Image src={UsFlag} alt="usa flag" /> US
                </Link>
              </div>
            </li>
            <li>
              <Link href="#" className="d-flex cart">
                <FaCartShopping className="icon" size={20} />
                <span className="d-flex">10</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
