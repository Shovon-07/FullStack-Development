import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

//___ Icons ___//
import { IoClose } from "react-icons/io5";
import {
  FaHouse,
  FaGear,
  FaListUl,
  FaTag,
  FaBoxOpen,
  FaNoteSticky,
  FaAngleDown,
  FaTruckFast,
  FaSackDollar,
  FaPeopleGroup,
  FaUserGraduate,
} from "react-icons/fa6";
import { FaUserAlt, FaTools, FaUsers, FaHandPointRight } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { PiUserSwitchBold } from "react-icons/pi";

import { BiSolidSend } from "react-icons/bi";

//___ Css ___//
import "./sidenav.css";

//___ Components ___//
import LogoutBtn from "./LogoutBtn";

//___ Additional utility ___//
import { GetCookie } from "@/app/Services/GetCookie";

const sidenav = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;
  const pathname = usePathname();

  // Create api headers
  var headers = "";
  try {
    headers = {
      Authorization: `Bearer ${GetCookie("AuthToken")}`,
    };
  } catch (error) {
    console.log(error);
  }

  // Sidenav drop value
  const [navDrp_1, setNavDrp_1] = useState(false);
  const [navDrp_2, setNavDrp_2] = useState(false);
  const [navDrp_3, setNavDrp_3] = useState(false);

  const CloseSideNav = () => {
    setToggleSideNav(false);
  };

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
          <Link
            href="/"
            className={pathname === "/" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaHouse className="icon" size={18} />
              <p>Dashboard</p>
            </div>
          </Link>
        </li>
        <p className="indicate-section">Accessibility</p>
        <li>
          <Link
            href="/profile"
            className={pathname === "/profile" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaUserAlt className="icon" size={15} />
              <p>Profile</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className={pathname === "/settings" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaGear className="icon" size={17} />
              <p>Settings</p>
            </div>
          </Link>
        </li>
        <p className="indicate-section">User panel</p>
        <li>
          <Link
            href="/designation"
            className={pathname === "/designation" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaUserGraduate className="icon" size={16} />
              <p>Designation</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/employees"
            className={pathname === "/employees" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <PiUserSwitchBold className="icon" size={20} />
              <p>Employees</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/users"
            className={pathname === "/users" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaUsers className="icon" size={20} />
              <p>Users</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/suppliers"
            className={pathname === "/suppliers" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <BiSolidSend className="icon" size={19} />
              <p>Suppliers</p>
            </div>
          </Link>
        </li>
        <p className="indicate-section">Products</p>
        {/* <li
          className={`side-nav-dropdown-parent ${navDrp_1 ? "active" : ""}`}
          onClick={() => {
            setNavDrp_1((prev) => !prev);
            setNavDrp_2(false);
            setNavDrp_3(false);
          }}
        >
          <a className={navDrp_1 ? "active" : ""}>
            <div className="d-flex">
              <FaListUl className="icon" size={16} />
              <p>Categories</p>
            </div>
            <FaAngleDown className="right-icon" />
          </a>
          <ul className="side-nav-dropdown">
            <li>
              <Link href="#" className={pathname === "#" ? "active" : ""}>
                <FaHandPointRight className="icon" size={16} />
                <p>Category 1</p>
              </Link>
            </li>
            <li>
              <Link href="#" className={pathname === "#" ? "active" : ""}>
                <FaHandPointRight className="icon" size={16} />
                <p>Category 1</p>
              </Link>
            </li>
          </ul>
        </li>
        <li
          className={`side-nav-dropdown-parent ${navDrp_2 ? "active" : ""}`}
          onClick={() => {
            setNavDrp_2((prev) => !prev);
            setNavDrp_1(false);
            setNavDrp_3(false);
          }}
        >
          <a className={navDrp_2 ? "active" : ""}>
            <div className="d-flex">
              <FaTag className="icon" size={20} />
              <p>Brands</p>
            </div>
            <FaAngleDown className="right-icon" />
          </a>
          <ul className="side-nav-dropdown">
            <li>
              <Link href="#" className={pathname === "#" ? "active" : ""}>
                <FaHandPointRight className="icon" size={16} />
                <p>Brand 1</p>
              </Link>
            </li>
            <li>
              <Link href="#" className={pathname === "#" ? "active" : ""}>
                <FaHandPointRight className="icon" size={16} />
                <p>Brand 2</p>
              </Link>
            </li>
          </ul>
        </li> */}
        <li>
          <Link
            href="/brands"
            className={pathname === "/brands" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaTag className="icon" size={20} />
              <p>Brands</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/categories"
            className={pathname === "/categories" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaListUl className="icon" size={16} />
              <p>Categories</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/product-sales"
            className={pathname === "/product-sales" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaTruckFast className="icon" size={19} />
              <p>Product Sales</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/customer"
            className={pathname === "/customer" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaPeopleGroup className="icon" size={19} />
              <p>Customer</p>
            </div>
          </Link>
        </li>
        <li
          className={`side-nav-dropdown-parent ${navDrp_3 ? "active" : ""}`}
          onClick={() => {
            setNavDrp_3((prev) => !prev);
            setNavDrp_1(false);
            setNavDrp_2(false);
          }}
        >
          <a className={navDrp_3 ? "active" : ""}>
            <div className="d-flex">
              <FaBoxOpen className="icon" size={19} />
              <p>Product settings</p>
            </div>
            <FaAngleDown className="right-icon" />
          </a>
          <ul className="side-nav-dropdown">
            <li>
              <Link
                href="#"
                className={pathname === "#" ? "active" : ""}
                onClick={CloseSideNav}
              >
                <FaHandPointRight className="icon" size={16} />
                <p>Product</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={pathname === "#" ? "active" : ""}
                onClick={CloseSideNav}
              >
                <FaHandPointRight className="icon" size={16} />
                <p>Store</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={pathname === "#" ? "active" : ""}
                onClick={CloseSideNav}
              >
                <FaHandPointRight className="icon" size={16} />
                <p>Create specifications</p>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={pathname === "#" ? "active" : ""}
                onClick={CloseSideNav}
              >
                <FaHandPointRight className="icon" size={16} />
                <p>Specifications</p>
              </Link>
            </li>
          </ul>
        </li>
        <p className="indicate-section">Featured</p>
        <li>
          <Link
            href="/daily-report"
            className={pathname === "/daily-report" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <MdDateRange className="icon" size={21} />
              <p>Daily Report</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/office-cost"
            className={pathname === "/office-cost" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaSackDollar className="icon" size={16} />
              <p>Office Cost</p>
            </div>
          </Link>
        </li>
        <li>
          <Link
            href="/servicing"
            className={pathname === "/servicing" ? "active" : ""}
            onClick={CloseSideNav}
          >
            <div className="d-flex">
              <FaTools className="icon" size={16} />
              <p>Servicing</p>
            </div>
          </Link>
        </li>
      </ul>

      <div className="bottom-box">
        <LogoutBtn headers={headers} />
      </div>
    </div>
  );
};

export default sidenav;
