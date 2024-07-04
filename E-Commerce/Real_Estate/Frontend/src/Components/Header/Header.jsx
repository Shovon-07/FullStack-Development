import React from "react";

//___ Images __//
import Logo from "../../assets/Images/logo.svg";

//___ Icons __//
import { GoSearch } from "react-icons/go";

//___ Css __//
import "./Header.css";

const Header = () => {
  return (
    <div className="Header d-flex">
      <div className="logo">
        {/* <img src={Logo} alt="" /> */}
        <p>
          Real <span>Estate</span>
        </p>
      </div>
      <ul className="d-flex">
        <li>
          <a href="">Buy</a>
        </li>
        <li>
          <a href="">Sell</a>
        </li>
        <li>
          <a href="">Rent</a>
        </li>
        <li>
          <a href="">Mortgage</a>
        </li>
        <li>
          <a href="">Find realtor</a>
        </li>
        <li>
          <a href="">News & Insights</a>
        </li>
      </ul>
      <ul className="d-flex">
        <li className="search d-flex">
          <GoSearch size={25} className="c_pointer" />
        </li>
        <li>
          <a href="">Manage rentals</a>
        </li>
        <li>
          <a href="">Advertise</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
