import { lazy, Suspense, useState } from "react";
import { Link, NavLink } from "react-router-dom";

//___ Css ___//
import "./Header.css";

//___ Icons ___//
import { MdDashboard } from "react-icons/md";
import { IoLogOutOutline, IoMoonSharp } from "react-icons/io5";
// import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings, IoIosArrowForward, IoMdSunny } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

//___ Additional utilitis ___//
import { imgPath } from "../../assets/Js/Data";

//___ Components ___//
import Loader from "../Loader/Loader";
const EmailNotify = lazy(() => import("../EmailNotify/EmailNotify"));

const Header = (props) => {
  const { user, setToggleVal, theme, setTheme, SetToken } = props;

  const [profileDropdownVal, setProfileDropdownVal] = useState(false);
  const [messageDropdownVal, setMessageDropdownVal] = useState(false);
  const [notificationDropdownVal, setNotificationDropdownVal] = useState(false);

  const handleProfileDropdown = () => {
    setProfileDropdownVal((prev) => !prev);
    if (messageDropdownVal == true || notificationDropdownVal == true) {
      setMessageDropdownVal(false);
      setNotificationDropdownVal(false);
    }
  };
  // const handleMessageDropdown = () => {
  //   setMessageDropdownVal((prev) => !prev);
  //   if (profileDropdownVal == true || notificationDropdownVal == true) {
  //     setProfileDropdownVal(false);
  //     setNotificationDropdownVal(false);
  //   }
  // };

  const handleNotificationDropdown = () => {
    setNotificationDropdownVal((prev) => !prev);
    if (profileDropdownVal == true || messageDropdownVal == true) {
      setProfileDropdownVal(false);
      setMessageDropdownVal(false);
    }
  };

  const closeAllDropdown = () => {
    setProfileDropdownVal(false);
    setMessageDropdownVal(false);
    setNotificationDropdownVal(false);
  };

  document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
      closeAllDropdown();
    }
  };

  const handleLogout = () => {
    SetToken(null);
    localStorage.removeItem("USER");
    localStorage.removeItem("UID");
    localStorage.removeItem("UIMG");
  };

  return (
    <div className="Header d-flex">
      <div className="left">
        <a>
          <FaBarsStaggered
            size={25}
            className="c_pointer"
            onClick={() => {
              setToggleVal((prev) => !prev);
            }}
          />
        </a>
      </div>
      <div className="right d-flex gap-30">
        <div>
          <NavLink to="/">
            <MdDashboard size={28} onClick={closeAllDropdown} />
          </NavLink>
        </div>

        {/* Message start */}
        {/* <div className="message dorwpDownParent">
          <a>
            <AiFillMessage
              size={26}
              className="c_pointer"
              onClick={handleMessageDropdown}
            />
            <span className="count" style={{ right: "-22px" }}>
              {messageData.length}
            </span>
          </a>
          <ul
            className={
              messageDropdownVal != false ? "dorpdown show" : "dorpdown"
            }
          >
            <p className="dropdownTitle">Messages</p>
            {messageData.map((items, index) => {
              return (
                <li className="c_pointer" key={index}>
                  <a>
                    <img src={items.img} alt="" className="msgUserPic" />
                    <div>
                      <h4 className="title">
                        {items.title.length > 25
                          ? items.title.slice(0, 25) + "..."
                          : items.title}
                      </h4>
                      <p className="description">
                        {items.description.length > 50
                          ? items.description.slice(0, 50) + "..."
                          : items.description}
                      </p>
                      <p
                        className="time"
                        style={{ fontSize: "0.8rem", textAlign: "right" }}
                      >
                        {items.time}
                      </p>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </div> */}
        {/* Message end */}

        {/* Notification start */}
        <Suspense fallback={<Loader />}>
          <EmailNotify
            handleNotificationDropdown={handleNotificationDropdown}
            notificationDropdownVal={notificationDropdownVal}
          />
        </Suspense>
        {/* Notification end */}

        {/* Theme start */}
        <div className="c_pointer">
          <a>
            <IoMdSunny
              size={28}
              className={!theme ? "" : "d-none"}
              onClick={() => {
                setTheme((prev) => !prev);
                localStorage.setItem("THEME", true);
              }}
            />
            <IoMoonSharp
              size={28}
              className={theme ? "" : "d-none"}
              onClick={() => {
                setTheme((prev) => !prev);
                localStorage.removeItem("THEME");
              }}
            />
          </a>
        </div>
        {/* Theme end */}

        {/* Profile start */}
        <div
          className="profile d-flex gap-10 c_pointer dorwpDownParent"
          onClick={handleProfileDropdown}
        >
          <a className="d-flex gap-10">
            <img src={`${imgPath}${localStorage.getItem("UIMG")}`} alt="" />
            <span>{user.length > 15 ? user.slice(0, 15) + "..." : user}</span>
            <IoIosArrowForward
              className={profileDropdownVal != false ? "arrow fliped" : "arrow"}
            />
          </a>
          <ul
            className={
              profileDropdownVal != false ? "dorpdown show" : "dorpdown"
            }
          >
            <li>
              <Link to="/profile">
                <FaUser size={15} /> Profile
              </Link>
            </li>
            {/* <li>
              <Link to="/settings">
                <IoMdSettings size={19} /> Settings
              </Link>
            </li> */}
            <li>
              <a onClick={handleLogout}>
                <IoLogOutOutline size={19} /> Logout
              </a>
            </li>
          </ul>
        </div>
        {/* Profile end */}
      </div>
    </div>
  );
};

export default Header;
