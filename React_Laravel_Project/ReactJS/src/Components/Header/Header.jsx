import { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

//___ Css ___//
import "./Header.css";

//___ Icons ___//
import { MdDashboard } from "react-icons/md";
import { IoNotifications, IoLogOutOutline, IoMoonSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings, IoIosArrowForward, IoMdSunny } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

//___ Images ___//
import User from "../../assets/Images/User.jpg";

//___ Data ___//
import { notificationData, messageData } from "../../assets/Js/Data";

const Header = (props) => {
  const { user, setToggleVal, theme, setToggleTheme } = props;
  // const [user, setUser] = useState("Al jubair shovon");
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
  const handleMessageDropdown = () => {
    setMessageDropdownVal((prev) => !prev);
    if (profileDropdownVal == true || notificationDropdownVal == true) {
      setProfileDropdownVal(false);
      setNotificationDropdownVal(false);
    }
  };
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
    sessionStorage.clear();
    localStorage.clear();
    return <Navigate to={"/login"} />;
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
      <div className="right d-flex gap-20">
        <div>
          <NavLink to="/dashboard">
            <MdDashboard size={23} onClick={closeAllDropdown} />
          </NavLink>
        </div>

        {/* Message start */}
        <div className="message dorwpDownParent">
          <a>
            <AiFillMessage
              size={22}
              className="c_pointer"
              onClick={handleMessageDropdown}
            />
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
        </div>
        {/* Message end */}

        {/* Notification start */}
        <div className="notification dorwpDownParent">
          <a>
            <IoNotifications
              size={24}
              className="c_pointer"
              onClick={handleNotificationDropdown}
            />
          </a>
          <ul
            className={
              notificationDropdownVal != false ? "dorpdown show" : "dorpdown"
            }
          >
            <p className="dropdownTitle">Notifications</p>
            {notificationData.map((items, index) => {
              return (
                <li className="c_pointer" key={index}>
                  <a>
                    <h4 className="title">
                      {items.title.length > 30
                        ? items.title.slice(0, 30) + "..."
                        : items.title}
                    </h4>
                    <p className="description">
                      {items.description.length > 55
                        ? items.description.slice(0, 55) + "..."
                        : items.description}
                    </p>
                    <p
                      className="time"
                      style={{ fontSize: "0.8rem", textAlign: "right" }}
                    >
                      {items.time}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Notification end */}

        {/* Theme start */}
        <div
          className="c_pointer"
          onClick={(e) => {
            e.preventDefault();
            setToggleTheme((prev) => !prev);
            // localStorage.setItem("THEME", theme);
          }}
        >
          <a>
            <IoMdSunny size={25} className={theme == false ? "d-none" : ""} />
            <IoMoonSharp size={25} className={theme == true ? "d-none" : ""} />
          </a>
        </div>
        {/* Theme end */}

        {/* Profile start */}
        <div
          className="profile d-flex gap-10 c_pointer dorwpDownParent"
          onClick={handleProfileDropdown}
        >
          <a className="d-flex gap-10">
            <img src={User} alt="" />
            <span>{user.length > 13 ? user.slice(0, 13) + "..." : user}</span>
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
              <a href="">
                <FaUser size={15} /> Profile
              </a>
            </li>
            <li>
              <a href="">
                <IoMdSettings size={19} /> Settings
              </a>
            </li>
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
