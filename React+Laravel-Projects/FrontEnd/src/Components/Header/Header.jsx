import { NavLink } from "react-router-dom";

//___ Css ___//
import "./Header.css";

//___ Icons ___//
import { MdDashboard } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { IoMdSettings, IoIosArrowForward } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";

//___ Images ___//
import User from "../../assets/Images/User.jpg";
import { useState } from "react";

const Header = (props) => {
  const { setToggleVal } = props;
  const [userName, setUserName] = useState("Al jubair shovon");
  const [profileDropdownVal, setProfileDropdownVal] = useState(false);

  const handleProfileDropdown = () => {
    setProfileDropdownVal((prev) => !prev);
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
            <MdDashboard size={23} />
          </NavLink>
        </div>
        <div>
          <AiFillMessage size={22} className="c_pointer" />
        </div>
        <div>
          <IoNotifications size={23} className="c_pointer" />
        </div>
        <div>
          <NavLink to="/settings">
            <IoMdSettings size={23} className="c_pointer" />
          </NavLink>
        </div>
        <div
          className="profile d-flex gap-10 c_pointer"
          onClick={handleProfileDropdown}
        >
          <img src={User} alt="" />
          <span>
            {userName.length > 13 ? userName.slice(0, 13) + "..." : userName}
          </span>
          <IoIosArrowForward
            className={profileDropdownVal != false ? "arrow fliped" : "arrow"}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
