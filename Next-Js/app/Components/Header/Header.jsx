import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

//___ Icons ___//
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { FaAngleDown, FaUserAlt } from "react-icons/fa";

import { FaGear } from "react-icons/fa6";

//___ Images ___//
import ProfilePic from "@/app/images/web-page.jpg";

//___ Css ___//
import "./Header.css";

//___ Components ___//
const SearchModal = dynamic(
  () => import("@/app/Components/Modal/SearchModal"),
  {
    loading: () => "",
  }
);
const LogoutBtn = dynamic(() => import("@/app/Components/Header/LogoutBtn"), {
  loading: () => "",
});

const Header = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;

  const [notificationVal, setNotificationVal] = useState(false);
  const [profileVal, setProfileVal] = useState(false);
  const [searchDropVal, setSearchDropVal] = useState(false);

  useEffect(() => {
    window.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        setSearchDropVal((prev) => (prev = false));
        setNotificationVal((prev) => (prev = false));
        setProfileVal((prev) => (prev = false));
      }
    };
  }, []);

  return (
    <header className="header">
      <div className="left">
        <div
          className="toggler"
          id="openSideNav"
          onClick={() => {
            setToggleSideNav((prev) => !prev);
            console.log("Toggled");
          }}
        >
          <HiBars3BottomLeft />
        </div>
      </div>
      <ul className="right">
        {/* <!-- Search start --> */}
        <li className="search">
          <SearchModal
            ModalOpenBtnTitle={
              <IoSearch
                className="search-icon"
                size={25}
                onClick={() => {
                  setSearchDropVal((prev) => !prev);
                  setNotificationVal((prev) => (prev = false));
                  setProfileVal((prev) => (prev = false));
                }}
              />
            }
            slug="# Search"
          />
        </li>
        {/* <!-- Search end --> */}
        {/* <!-- Notification start --> */}
        <li
          className={`notification ${
            notificationVal == true ? "activeNotification" : ""
          }`}
        >
          <IoNotificationsSharp
            className="notification_icon"
            onClick={() => {
              setNotificationVal((prev) => !prev);
              // setSearchDropVal((prev) => (prev = false));
              setProfileVal((prev) => (prev = false));
            }}
          />
          <span>10</span>
          <ul className="header_dropdown">
            <div className="corner"></div>
            <li>
              <a href="" className="nitify_link">
                <h3 className="nitify_title">Notification 1 ...</h3>
                <p className="notify_desc">
                  Lorem ipsum dolor sit amet conse adipisicing elit ...
                </p>
              </a>
            </li>
            <li>
              <a href="" className="nitify_link">
                <h3 className="nitify_title">Notification 2 ...</h3>
                <p className="notify_desc">
                  Lorem ipsum dolor sit amet conse adipisicing elit ...
                </p>
              </a>
            </li>
            <li>
              <a href="" className="nitify_link">
                <h3 className="nitify_title">Notification 3 ...</h3>
                <p className="notify_desc">
                  Lorem ipsum dolor sit amet conse adipisicing elit ...
                </p>
              </a>
            </li>
          </ul>
        </li>
        {/* <!-- Notification end --> */}
        {/* <!-- Profile start --> */}
        <li className={`profile ${profileVal == true ? "activeProfile" : ""}`}>
          <div
            onClick={() => {
              setProfileVal((prev) => !prev);
              // setSearchDropVal((prev) => (prev = false));
              setNotificationVal((prev) => (prev = false));
            }}
          >
            <Image src={ProfilePic} alt="profile pic" />
            <p className="user_name">Al jubair sho...</p>
          </div>
          <FaAngleDown className="profile_right_icon" />
          <ul className="header_dropdown">
            <div className="corner"></div>
            <li>
              <Link href="/profile">
                <FaUserAlt />
                Profile
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <FaGear /> Settings
              </Link>
            </li>
            <li>
              <a>
                {/* <i className="fa-solid fa-right-from-bracket"></i>
                Logout */}
                <LogoutBtn />
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
