import { Suspense, lazy, useState } from "react";
import { NavLink } from "react-router-dom";

//___ Images __//
import Logo from "../../assets/Images/logo.svg";

//___ Css __//
import "./Header.css";

//___ Components ___//
import Loader from "../Loader/Loader";
const My_Modal = lazy(() => import("../Search_Modal/Search_Modal"));

const Header = (props) => {
  const { toggle, setToggle } = props;
  const handleNavToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="Header">
      <div className="headerContainer d-flex">
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          <p>
            ready <span>plot</span>
          </p>
        </div>
        <ul className={`d-flex ${toggle == true ? "active" : ""}`}>
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
              to="/buy"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Buy
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
              to="/rent"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Rent
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              News & Insights
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/manage-rentals"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Manage rentals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/advertise"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Advertise
            </NavLink>
          </li>
          <Suspense fallback={<Loader />}>
            <My_Modal />
          </Suspense>
        </ul>
        <div className="toggler c_pointer" onClick={handleNavToggle}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
