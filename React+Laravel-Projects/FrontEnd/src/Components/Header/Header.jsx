import { NavLink } from "react-router-dom";

//___ Css ___//
import "./Header.css";

//___ Icons ___//
import { MdDashboard } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings, IoIosArrowForward } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

//___ Images ___//
import User from "../../assets/Images/User.jpg";
import { useState } from "react";

const Header = (props) => {
  const { setToggleVal } = props;
  const [userName, setUserName] = useState("Al jubair shovon");
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

  return (
    <div className="Header d-flex">
      <div className="left">
        <FaBarsStaggered
          size={25}
          className="c_pointer"
          onClick={() => {
            setToggleVal((prev) => !prev);
          }}
        />
      </div>
      <div className="right d-flex gap-20">
        <div>
          <NavLink to="/dashboard">
            <MdDashboard size={23} onClick={closeAllDropdown} />
          </NavLink>
        </div>

        {/* Message start */}
        <div className="message dorwpDownParent">
          <AiFillMessage
            size={22}
            className="c_pointer"
            onClick={handleMessageDropdown}
          />
          <ul
            className={
              messageDropdownVal != false ? "dorpdown show" : "dorpdown"
            }
          >
            <p className="dropdownTitle">Messages</p>
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
          </ul>
        </div>
        {/* Message end */}

        {/* Notification start */}
        <div className="notification dorwpDownParent">
          <IoNotifications
            size={23}
            className="c_pointer"
            onClick={handleNotificationDropdown}
          />
          <ul
            className={
              notificationDropdownVal != false ? "dorpdown show" : "dorpdown"
            }
          >
            <p className="dropdownTitle">Notifications</p>
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
          </ul>
        </div>
        {/* Notification end */}

        {/* Settings start */}
        <div>
          <NavLink to="/settings">
            <IoMdSettings
              size={23}
              className="c_pointer"
              onClick={closeAllDropdown}
            />
          </NavLink>
        </div>
        {/* Settings end */}

        {/* Profile start */}
        <div
          className="profile d-flex gap-10 c_pointer dorwpDownParent"
          onClick={handleProfileDropdown}
        >
          <img src={User} alt="" />
          <span>
            {userName.length > 13 ? userName.slice(0, 13) + "..." : userName}
          </span>
          <IoIosArrowForward
            className={profileDropdownVal != false ? "arrow fliped" : "arrow"}
          />
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
          </ul>
        </div>
        {/* Profile end */}
      </div>
    </div>
  );
};

export default Header;
