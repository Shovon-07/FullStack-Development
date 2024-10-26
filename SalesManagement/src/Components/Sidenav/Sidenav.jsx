//___ Icons ___//
import { IoClose } from "react-icons/io5";
import { FaHouse } from "react-icons/fa6";

//___ Css ___//
import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="side-nav">
      <div className="brand">
        <h2>Admin</h2>
        <div className="toggler" id="closeSideNav">
          <IoClose />
        </div>
      </div>
      <ul className="side-menu">
        <li>
          <a href="">
            <div className="d-flex">
              <FaHouse className="icon" />
              <p>Dashboard</p>
            </div>
          </a>
        </li>
        <p className="indicate-section">Accessibility</p>
        <li>
          <a href="">
            <div>
              <i className="fa-solid fa-user"></i>Profile
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <i className="fa-solid fa-gear"></i>Settings
            </div>
          </a>
        </li>
        <p className="indicate-section">Products</p>
        <li className="side-nav-dropdown-parent">
          <a>
            <div>
              <i className="fa-solid fa-list"></i>Categories
            </div>
            <i className="fa-solid fa-angle-down right-icon"></i>
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
            <div>
              <i className="fa-solid fa-tag"></i>Brands
            </div>
            <i className="fa-solid fa-angle-down right-icon"></i>
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
            <div>
              <i className="fa-solid fa-box"></i>Products
            </div>
            <i className="fa-solid fa-angle-down right-icon"></i>
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
            <div>
              <i className="fa-solid fa-file"></i>Items
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div>
              <i className="fa-solid fa-file"></i>Items
            </div>
          </a>
        </li>
      </ul>
      <div className="bottom-box">
        <button>
          Logout<i className="fa-solid fa-right-from-bracket"></i>
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
