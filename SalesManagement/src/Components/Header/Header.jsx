import { LazyLoadImage } from "react-lazy-load-image-component";

//___ Icons ___//
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
//___ Images ___//
import ProfilePic from "../../assets/images/web-page.jpg";

//___ Css ___//
import "./Header.css";
import "react-lazy-load-image-component/src/effects/blur.css";

const Header = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;

  return (
    <header>
      <div className="left">
        <div
          className="toggler"
          id="openSideNav"
          onClick={() => {
            setToggleSideNav((prev) => !prev);
          }}
        >
          <HiBars3BottomLeft />
        </div>
        {/* <!-- <div className="search-box">
          <input type="text" placeholder="Searh hear" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div> --> */}
      </div>
      <ul className="right">
        {/* <!-- Search start --> */}
        <li className="search">
          <IoSearch className="search-icon" />
          <ul className="header-dropdown">
            <div className="corner"></div>
            <div className="search-box">
              <div className="inp-box">
                <input type="text" placeholder="Searh hear" />
                <IoSearch className="search-icon" />
              </div>
              <ul>
                <li>
                  <a href="">Item 1</a>
                </li>
                <li>
                  <a href="">Item 2</a>
                </li>
                <li>
                  <a href="">Item 3</a>
                </li>
              </ul>
            </div>
          </ul>
        </li>
        {/* <!-- Search end --> */}
        {/* <!-- Notification start --> */}
        <li className="notification">
          <IoNotificationsSharp className="notification-icon" />
          <span>10</span>
          <ul className="header-dropdown">
            <div className="corner"></div>
            <li>
              <a href="" className="nitify-link">
                <h3 className="nitify-title">Notification 1 ...</h3>
                <p className="notify-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus dolores quo non placeat eius ...
                </p>
              </a>
            </li>
            <li>
              <a href="" className="nitify-link">
                <h3 className="nitify-title">Notification 2 ...</h3>
                <p className="notify-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus dolores quo non placeat eius ...
                </p>
              </a>
            </li>
            <li>
              <a href="" className="nitify-link">
                <h3 className="nitify-title">Notification 3 ...</h3>
                <p className="notify-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus dolores quo non placeat eius ...
                </p>
              </a>
            </li>
          </ul>
        </li>
        {/* <!-- Notification end --> */}
        {/* <!-- Profile start --> */}
        <li className="profile">
          <div>
            <LazyLoadImage
              alt={"profile pic"}
              effect="blur"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
              src={ProfilePic}
            />
            <p>Al jubair sho...</p>
          </div>
          <FaAngleDown className="profile-right-icon" />
          <ul className="header-dropdown">
            <div className="corner"></div>
            <li>
              <a href="">
                <i className="fa-solid fa-user"></i>Profile
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-gear"></i> Settings
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-right-from-bracket"></i>Logout
              </a>
            </li>
          </ul>
        </li>
        {/* <!-- Profile end --> */}
      </ul>
    </header>
  );
};

export default Header;
