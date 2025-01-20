import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

//___ Icons ___//
import { IoClose, IoAccessibility } from "react-icons/io5";
import {
  FaHouse,
  FaGear,
  FaListUl,
  FaTag,
  FaBoxOpen,
  FaAngleDown,
  FaSackDollar,
  FaPeopleGroup,
  FaUserGraduate,
} from "react-icons/fa6";
import { FaUserAlt, FaTools, FaUsers, FaHandPointRight } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { PiUserSwitchBold } from "react-icons/pi";
import { BiSolidSend } from "react-icons/bi";
import { SiPrivateinternetaccess } from "react-icons/si";

//___ Css ___//
import "./sidenav.css";

//___ Components ___//
import LogoutBtn from "./LogoutBtn";

//___ Additional utility ___//
import { GetCookie } from "../../assets/js/GetCookie";
import { Decryption, secretKey } from "../../assets/js/Encryption";

const sidenav = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;
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

  // Sidenav drop value
  const [navDrp_1, setNavDrp_1] = useState(false);
  // const [navDrp_2, setNavDrp_2] = useState(false);

  const CloseSideNav = () => {
    setToggleSideNav(false);
  };

  //__==> For dropdown <==__//
  useEffect(() => {
    if (
      navDrp_1 == true ||
      location.pathname == "/orders" ||
      location.pathname == "/order-create" ||
      location.pathname == "/sales" ||
      location.pathname == "/sales-create" ||
      (Array.isArray(location.pathname.match("/invoice/")) &&
        location.pathname.match("/invoice/")[0] == "/invoice/")
    ) {
      setNavDrp_1(true);
    } /*else if (
      navDrp_2 == true ||
      location.pathname == "/profile" ||
      location.pathname == "/settings"
    ) {
      setNavDrp_2(true);
    } */ else {
      setNavDrp_1(false);
      // setNavDrp_2(false);
    }
  }, [
    location.pathname == "/orders" ||
      location.pathname == "/order-create" ||
      location.pathname == "/sales" ||
      location.pathname == "/sales-create" ||
      (Array.isArray(location.pathname.match("/invoice/")) &&
        location.pathname.match("/invoice/")[0] == "/invoice/"),
    /*
      ||
      location.pathname == "/profile" ||
      location.pathname == "/settings",
      */
  ]);

  // if (
  //   Array.isArray(location.pathname.match("/invoice/")) &&
  //   location.pathname.match("/invoice/")[0] == "/invoice/"
  // ) {
  //   return "";
  // }
  return (
    <div className={`side-nav ${toggleSideNav == true ? "active" : ""}`}>
      <div className="brand">
        <h2>company</h2>
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
                <li>
                  <NavLink to="/roles" onClick={CloseSideNav}>
                    <div className="d-flex">
                      <IoAccessibility className="icon" size={21} />
                      <p>Roles</p>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/permissions" onClick={CloseSideNav}>
                    <div className="d-flex">
                      <SiPrivateinternetaccess className="icon" size={19} />
                      <p>Permissions</p>
                    </div>
                  </NavLink>
                </li>
              </>
            );
          }
        })()}

        <p className="indicate-section">User panel</p>
        <li>
          <NavLink to="/designation" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaUserGraduate className="icon" size={16} />
              <p>Designation</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/employees" onClick={CloseSideNav}>
            <div className="d-flex">
              <PiUserSwitchBold className="icon" size={20} />
              <p>Employees</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaUsers className="icon" size={20} />
              <p>Users</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/suppliers" onClick={CloseSideNav}>
            <div className="d-flex">
              <BiSolidSend className="icon" size={19} />
              <p>Suppliers</p>
            </div>
          </NavLink>
        </li>
        <p className="indicate-section">Products</p>
        <li>
          <NavLink to="/brands" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaTag className="icon" size={20} />
              <p>Brands</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaListUl className="icon" size={16} />
              <p>Categories</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaBoxOpen className="icon" size={19} />
              <p>Products</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customer" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaPeopleGroup className="icon" size={19} />
              <p>Customer</p>
            </div>
          </NavLink>
        </li>
        {/* Dropdown menu */}
        <li className={`side-nav-dropdown-parent ${navDrp_1 ? "active" : ""}`}>
          <span
            className={`drpLink ${navDrp_1 ? "active" : ""}`}
            onClick={() => {
              if (navDrp_1 == false) {
                setNavDrp_1(true);
                // setNavDrp_2(false);
              } else {
                setNavDrp_1(false);
              }
            }}
          >
            <div className="d-flex">
              <FaTools className="icon" size={16} />
              <p>Product settings</p>
            </div>
            <FaAngleDown className="right-icon" />
          </span>
          <ul className="side-nav-dropdown">
            <li>
              <NavLink to="/orders" onClick={CloseSideNav}>
                <FaHandPointRight className="icon" size={16} />
                <p>Orders</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order-create" onClick={CloseSideNav}>
                <FaHandPointRight className="icon" size={16} />
                <p>Order create</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sales" onClick={CloseSideNav}>
                <FaHandPointRight className="icon" size={16} />
                <p>Sales</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sales-create" onClick={CloseSideNav}>
                <FaHandPointRight className="icon" size={16} />
                <p>Sales create</p>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Dropdown menu */}
        {/* <li className={`side-nav-dropdown-parent ${navDrp_2 ? "active" : ""}`}>
          <span
            className={`drpLink ${navDrp_2 ? "active" : ""}`}
            onClick={() => {
              if (navDrp_2 == false) {
                setNavDrp_2(true);
                // setNavDrp_1(false);
              } else {
                setNavDrp_2(false);
              }
            }}
          >
            <div className="d-flex">
              <FaTools className="icon" size={16} />
              <p>Product settings 2</p>
            </div>
            <FaAngleDown className="right-icon" />
          </span>
          <ul className="side-nav-dropdown">
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
          </ul>
        </li> */}

        <p className="indicate-section">Featured</p>
        <li>
          <NavLink to="/cost-categories" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaSackDollar className="icon" size={16} />
              <p>Cost categories</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/daily-report" onClick={CloseSideNav}>
            <div className="d-flex">
              <MdDateRange className="icon" size={21} />
              <p>Daily Report</p>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/office-cost" onClick={CloseSideNav}>
            <div className="d-flex">
              <FaSackDollar className="icon" size={16} />
              <p>Office Cost</p>
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
