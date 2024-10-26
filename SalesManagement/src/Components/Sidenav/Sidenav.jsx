//___ Icons ___//
import { IoClose } from "react-icons/io5";
import {
  FaHouse,
  FaGear,
  FaListUl,
  FaTag,
  FaBoxOpen,
  FaNoteSticky,
  FaAngleDown,
} from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";

//___ Css ___//
import "./Sidenav.css";

const Sidenav = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;

  return (
    <div className={`side-nav ${toggleSideNav == true ? "active" : ""}`}>
      <div className="brand">
        <h2>Admin</h2>
        <div
          className={`toggler ${toggleSideNav == true ? "show" : ""}`}
          onClick={() => {
            setToggleSideNav((prev) => !prev);
          }}
        >
          <IoClose />
        </div>
      </div>
      <ul className="side-menu">
        <li>
          <a href="">
            <div className="d-flex">
              <FaHouse className="icon" size={18} />
              <p>Dashboard</p>
            </div>
          </a>
        </li>
        <p className="indicate-section">Accessibility</p>
        <li>
          <a href="">
            <div className="d-flex">
              <FaUserAlt className="icon" size={16} />
              <p>Profile</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="d-flex">
              <FaGear className="icon" size={18} />
              <p>Settings</p>
            </div>
          </a>
        </li>
        <p className="indicate-section">Products</p>
        <li className="side-nav-dropdown-parent">
          <a>
            <div className="d-flex">
              <FaListUl className="icon" size={16} />
              <p>Categories</p>
            </div>
            <i className="fa-solid fa-angle-down right-icon"></i>
            <FaAngleDown className="right-icon" />
          </a>
          <ul className="side-nav-dropdown">
            <li>
              <a href="">
                <div>
                  <i className="fa-solid fa-file"></i>Categories Item 1
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i className="fa-solid fa-file"></i>Categories Item 2
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="side-nav-dropdown-parent">
          <a>
            <div className="d-flex">
              <FaTag className="icon" size={20} />
              <p>Brands</p>
            </div>
            <FaAngleDown className="right-icon" />
          </a>
          <ul className="side-nav-dropdown">
            <li>
              <a href="">
                <div>
                  <i className="fa-solid fa-file"></i>Brands item 1
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i className="fa-solid fa-file"></i>Brands item 2
                </div>
              </a>
            </li>
          </ul>
        </li>
        <li className="side-nav-dropdown-parent">
          <a>
            <div className="d-flex">
              <FaBoxOpen className="icon" size={20} />
              <p>Products</p>
            </div>
            <FaAngleDown className="right-icon" />
          </a>
          <ul className="side-nav-dropdown">
            <li>
              <a href="">
                <div>
                  <i className="fa-solid fa-file"></i>Products Item 1
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div>
                  <i className="fa-solid fa-file"></i>Products Item 2
                </div>
              </a>
            </li>
          </ul>
        </li>
        <p className="indicate-section">Featured</p>
        <li>
          <a href="">
            <div className="d-flex">
              <FaNoteSticky className="icon" size={18} />
              <p>Item 1</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="d-flex">
              <FaNoteSticky className="icon" size={18} />
              <p>Item 2</p>
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div className="d-flex">
              <FaNoteSticky className="icon" size={18} />
              <p>Item 3</p>
            </div>
          </a>
        </li>
      </ul>
      <div className="bottom-box">
        <button className="d-flex">
          Logout
          <LuLogOut className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
