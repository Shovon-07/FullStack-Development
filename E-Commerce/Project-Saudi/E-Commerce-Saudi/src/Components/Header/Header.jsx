import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//___ Icons ___//
import { HiMenuAlt3 } from "react-icons/hi";

//___ Css ___//
import "./Header.scss";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Data ___//
// import { notificationDataLength } from "../../Data";

//___ Components ___//
// import DropdownMenu from "../DropdownMenu/DropdownMenu";

const Header = () => {
  // Props

  // States
  const [navToggler, setNavToggler] = useState(0);

  const handleNavToggler = () => {
    setNavToggler((prev) => (prev === 0 ? 1 : 0));
  };

  // Testing
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((prev) => (prev < 200 ? prev + 1 : prev));
  // });

  return (
    <header className="Header">
      <div className={`container d-flex ${navToggler === 0 ? "" : "active"}`}>
        <div className="left">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
        </div>
        <div className="right d-flex">
          <div className="menus d-flex gap-30">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/customize-image"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Customize Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sell"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Sell
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pending-orders"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Pending Orders
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/complete-order"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                Complete order
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history"
                className={({ isActive }) => (isActive ? "isActive" : "")}
              >
                History
              </NavLink>
            </li>
          </div>
          <div className="toggler cursor">
            <HiMenuAlt3 onClick={handleNavToggler} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
