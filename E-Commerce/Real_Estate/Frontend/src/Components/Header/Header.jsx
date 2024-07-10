import { lazy, Suspense, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//___ Icons __//
import { GoSearch } from "react-icons/go";

//___ Css __//
import "./Header.css";

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
            Molla <span>Properties</span>
          </p>
        </div>
        <ul className={`d-flex menus ${toggle == true ? "active" : ""}`}>
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
              to="/ongoing-project"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Ongoing Project
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/upcoming-project"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Upcoming Project
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/completed-project"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Completed Project
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Gallery
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/honorable-client"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Honorable client
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/news-event"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              News and Event
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              About us
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Blog
            </NavLink>
          </li>
          <li onClick={closeToggle}>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "isActive" : "")}
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="lastChild d-flex gap-30">
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
              <div className="resultBox d-flex">
                <h3>Search result</h3>
                <Link className="result">Rajshahi</Link>
                <Link className="result">Dhaka</Link>
                <Link className="result">Chittagong</Link>
                <Link className="result">Comilla</Link>
                <Link className="result">Khulna</Link>
                <Link className="result">Barisal</Link>
              </div>
            </div>
          </li>

          <li style={{ zIndex: 1000, position: "sticky" }}>
            <div
              className={`toggler c_pointer ${
                searchDropDownVal == true ? "z-index-1" : ""
              }`}
              onClick={handleNavToggle}
            >
              <div></div>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;
