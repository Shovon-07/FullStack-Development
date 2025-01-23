import { useState } from "react";
import { NavLink } from "react-router-dom";

//___ Icons ___//
import { IoClose } from "react-icons/io5";
import { FaHouse, FaGear } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

//___ Css ___//
import "./sidenav.css";

//___ Components ___//
import LogoutBtn from "./LogoutBtn";

//___ Additional utility ___//
import { GetCookie } from "../../assets/js/GetCookie";
import { Decryption, secretKey } from "../../assets/js/Encryption";

const sidenav = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;

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

  const CloseSideNav = () => {
    setToggleSideNav(false);
  };

  return (
    <div className={`side-nav ${toggleSideNav == true ? "active" : ""}`}>
      <div className="brand">
        <h2>chatting</h2>
        <div
          className={`toggler ${toggleSideNav == true ? "show" : ""}`}
          onClick={CloseSideNav}
        >
          <IoClose />
        </div>
      </div>
      <ul className="side-menu">
        <li>
          <NavLink to="/" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaHouse className="icon" size={18} />
              <p>Dashboard</p>
            </div>
          </NavLink>
        </li>

        <p className="indicate-section">Accessibility</p>
        <li>
          <NavLink to="/profile" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaUserAlt className="icon" size={15} />
              <p>Profile</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaGear className="icon" size={17} />
              <p>Settings</p>
            </div>
          </NavLink>
        </li>

        <p className="indicate-section">Friends</p>
        <li>
          <NavLink to="/office-cost" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaUserAlt className="icon" size={16} />
              <p>Abdullah mahdee</p>
            </div>
          </NavLink>
        </li>
      </ul>

      <div className="bottom-box">
        <LogoutBtn headers={headers} />
      </div>
    </div>
  );
};

export default sidenav;
