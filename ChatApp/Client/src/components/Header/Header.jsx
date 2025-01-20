import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "antd";
import Skeleton from "@mui/material/Skeleton";

//__- Icons -__//
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoNotificationsSharp, IoSearch } from "react-icons/io5";
import { FaAngleDown, FaUserAlt } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

//__- Images -__//
// import ProfilePic from "../../assets/images/Prifile.png";

//__- Css -__//
import "./Header.css";

//___ Additional utility ___//
import { imgUrl } from "../../assets/js/ApiConfig";
import { GetCookie } from "../../assets/js/GetCookie";
import { Decryption, secretKey } from "../../assets/js/Encryption";
import { Notification } from "../../assets/js/Data";

//__- Components -__//
import LogoutBtn from "./LogoutBtn";
// const SearchModal = dynamic(
//   () => import("@/app/Components/Modal/SearchModal"),
//   {
//     loading: () => "",
//   }
// );
// const ThemeTogglerSwitch = dynamic(
//   () => import("@/app/Components/Switch/ThemeTogglerSwitch"),
//   {
//     loading: () => "",
//   }
// );

const Header = (props) => {
  const { setToggleSideNav } = props;
  const location = useLocation();

  // Create api headers
  var headers = "";
  try {
    headers = {
      Authorization: `Bearer ${Decryption(
        GetCookie("_Auth_AJS+c0mPanY-07@12#31_token"),
        secretKey
      )}`,
    };
  } catch (error) {
    console.log(error);
  }

  const [userRole, setUserRole] = useState(
    Decryption(GetCookie("_Role_AJS+c0mPanY-07@12#31_user"), secretKey)
  );
  const [userName, setUserName] = useState();
  const [profilePic, setProfilePic] = useState();
  const [notificationVal, setNotificationVal] = useState(false);
  const [searchDropVal, setSearchDropVal] = useState(false);

  //___ Profile dropdown ___//
  const [profileVal, setProfileVal] = useState(false);
  const handleProfileDrpDown = () => {
    setProfileVal((prev) => !prev);
    // setSearchDropVal((prev) => (prev = false));
    setNotificationVal((prev) => (prev = false));
  };

  useEffect(() => {
    window.onkeydown = function (evt) {
      evt = evt || window.event;
      if (evt.keyCode == 27) {
        setSearchDropVal((prev) => (prev = false));
        setNotificationVal((prev) => (prev = false));
        setProfileVal((prev) => (prev = false));
      }
    };

    // Get user name from cookie
    setUserName(
      Decryption(
        GetCookie("_Unme_AJS+c0mPanY-07@12#31_user") || "",
        secretKey
      ) || ""
    );

    // Get profile pic from cookie
    setProfilePic(
      Decryption(
        GetCookie("_Uimg_AJS+c0mPanY-07@12#31_user") || "",
        secretKey
      ) || ""
    );

    // console.log("From head");
    // console.log(headers);
  }, []);

  // if (
  //   Array.isArray(location.pathname.match("/invoice/")) &&
  //   location.pathname.match("/invoice/")[0] == "/invoice/"
  // ) {
  //   return "";
  // }
  return (
    <header className={`header`}>
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
      </div>
      <ul className="right">
        {/* <!-- ThemeToggler start --> */}
        {/* <li className="search">
          <ThemeTogglerSwitch
            onClick={() => {
              localStorage.setItem("Theme", true);
            }}
          />
        </li> */}
        {/* ThemeToggler end */}

        {/* Search start */}
        {/* <li className="search">
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
        </li> */}
        {/* Search end */}

        {/* Notification start */}
        <li
          className={`notification ${
            notificationVal == true ? "activeNotification" : ""
          }`}
        >
          {/* <IoNotificationsSharp
            className="notification_icon"
            onClick={() => {
              setNotificationVal((prev) => !prev);
              // setSearchDropVal((prev) => (prev = false));
              setProfileVal((prev) => (prev = false));
            }}
          />
          <span>10</span> */}
          <Badge count={Notification.length} overflowCount={999}>
            <IoNotificationsSharp
              className="notification_icon"
              onClick={() => {
                setNotificationVal((prev) => !prev);
                // setSearchDropVal((prev) => (prev = false));
                setProfileVal((prev) => (prev = false));
              }}
            />
          </Badge>
          <ul className="header_dropdown">
            <div className="corner"></div>
            <div className="header_dropdown_content">
              {Notification.map((item, index) => {
                return (
                  <li key={index}>
                    <a href="" className="nitify_link">
                      <h3 className="nitify_title">
                        {item.title.length >= 25
                          ? `${item.title.slice(0, 25)} ...`
                          : item.title}
                      </h3>
                      <p className="notify_desc">
                        {item.desc.length >= 60
                          ? `${item.desc.slice(0, 60)} ...`
                          : item.desc}
                      </p>
                    </a>
                  </li>
                );
              })}
            </div>
          </ul>
        </li>
        {/* Notification end */}
        {/* Profile start */}
        <li
          onClick={handleProfileDrpDown}
          className={`profile ${profileVal == true ? "activeProfile" : ""}`}
        >
          <div>
            {profilePic ? (
              <img src={`${imgUrl}${profilePic}`} alt="profile pic" />
            ) : (
              <Skeleton
                variant="circular"
                animation="wave"
                width={40}
                height={40}
                sx={{ bgcolor: "#0d0d0d21" }}
              />
            )}
            <p className="user_name">{userName}</p>
          </div>
          <FaAngleDown className="profile_right_icon" />
          <ul className="header_dropdown">
            <div className="corner"></div>
            {(() => {
              if (
                userRole == "officer" ||
                userRole == "rsm" ||
                userRole == "manager"
              ) {
                return "";
              } else {
                return (
                  <>
                    <li>
                      <Link to="/profile" onClick={handleProfileDrpDown}>
                        <FaUserAlt size={15} />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/settings" onClick={handleProfileDrpDown}>
                        <FaGear /> Settings
                      </Link>
                    </li>
                  </>
                );
              }
            })()}
            <li>
              <a>
                {/* <i className="fa-solid fa-right-from-bracket"></i>
                Logout */}
                <LogoutBtn headers={headers} />
              </a>
            </li>
          </ul>
        </li>
        {/* Profile end */}
      </ul>
    </header>
  );
};

export default Header;
