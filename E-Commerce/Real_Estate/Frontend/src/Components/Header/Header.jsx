import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

//___ Icons __//
import { GoSearch } from "react-icons/go";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

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

  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const fetchSearchData = (value) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      const result = res.data.filter((user) => {
        return (
          value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
      setSearchResult(result);
    });
  };
  const handleSearchInput = (value) => {
    setSearchInput(value);
    fetchSearchData(value);
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
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ongoing-project"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Ongoing Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/upcoming-project"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Upcoming Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/completed-project"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Completed Project
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/honorable-client"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Honorable client
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/news-event"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              News and Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              About us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? "isActive" : "")}
              onClick={closeToggle}
            >
              Contact us
            </NavLink>
          </li>
        </ul>

        <div className="lastChild d-flex gap-30">
          <li onClick={closeToggle} className="search d-flex">
            <GoSearch
              size={20}
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
                <input
                  type="text"
                  placeholder="Search district"
                  onChange={(e) =>
                    handleSearchInput(e.target.value.toLocaleLowerCase())
                  }
                />
              </div>
              <div className="resultBox d-flex">
                <h3>Search result</h3>
                {searchResult.map((items, index) => {
                  return (
                    <div className="result" key={index}>
                      {items.name}
                    </div>
                  );
                })}

                {/* <Link className="result">Dhaka</Link>
                <Link className="result">Chittagong</Link>
                <Link className="result">Comilla</Link>
                <Link className="result">Khulna</Link>
                <Link className="result">Barisal</Link> */}
              </div>
            </div>
          </li>

          <li style={{ zIndex: 999, position: "sticky" }}>
            <div
              className={`toggler c_pointer ${
                searchDropDownVal == true ? "z-index-1" : ""
              }`}
              onClick={handleNavToggle}
            >
              <FaBars size={25} className={toggle == false ? "" : "d-none"} />
              <RxCross2 size={30} className={toggle == true ? "" : "d-none"} />
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Header;