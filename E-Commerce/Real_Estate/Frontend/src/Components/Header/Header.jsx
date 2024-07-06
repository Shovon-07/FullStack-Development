import { Suspense, lazy, useState } from "react";
import { NavLink } from "react-router-dom";

//___ Images __//
import Logo from "../../assets/Images/logo.svg";

//___ Icons __//
import { GoSearch } from "react-icons/go";

//___ Css __//
import "./Header.css";

//___ Components ___//
import Loader from "../Loader/Loader";
const My_Modal = lazy(() => import("../Search_Modal/Search_Modal"));

const Header = (props) => {
  const { toggle, setToggle } = props;
  const [searchDropDownVal, setSearchDropDownVal] = useState(false);

  const handleNavToggle = () => {
    setToggle((prev) => !prev);
  };
  const closeToggle = () => {
    setToggle((prev) => (prev = false));
  };
  const closePopUp = () => {
    setSearchDropDownVal(false);
  };

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
      isEscape = evt.key === "Escape" || evt.key === "Esc";
    } else {
      isEscape = evt.keyCode === 27;
    }
    if (isEscape) {
      closeToggle();
      closePopUp();
    }
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
          <li onClick={closeToggle}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/buy"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Buy
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/sell"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Sell
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/rent"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Rent
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/news"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              News & Insights
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/manage-rentals"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Manage rentals
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/advertise"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Advertise
            </NavLink>
          </li>
          <li onClick={closeToggle} className="search d-flex">
            <GoSearch
              size={25}
              className="c_pointer"
              onClick={() => {
                setSearchDropDownVal((prev) => !prev);
              }}
            />
            <div
              id="overlay"
              className={searchDropDownVal == true ? "overlay" : ""}
              onClick={closePopUp}
            ></div>
            <div
              className={`searchDropDown ${
                searchDropDownVal == true ? "active" : ""
              }`}
            >
              <div className="inputBox">
                <label>Search</label>
                <input type="text" placeholder="Search hear" />
              </div>
              <div className="resultBox">
                <p>Search result</p>
              </div>
            </div>
          </li>
        </ul>
        <div className="toggler c_pointer" onClick={handleNavToggle}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
