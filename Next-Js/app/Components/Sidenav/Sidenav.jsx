import React from "react";

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
} from "react-icons/fa6";
import { FaUserAlt, FaTools, FaUsers, FaHandPointRight } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

//___ Css ___//
import "./sidenav.css";

//___ Components ___//
import MenuLinks from "./MenuLinks";
import LogoutBtn from "./LogoutBtn";

const sidenav = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;

  const menuItems = [
    {
      title: "",
      list: [
        {
          title: "Dashboard",
          path: "/",
          icon: <FaHouse className="icon" size={18} />,
        },
      ],
    },
    {
      title: "Accessibility",
      list: [
        {
          title: "Profile",
          path: "/profile",
          icon: <FaUserAlt className="icon" size={15} />,
        },
        {
          title: "Settings",
          path: "/settings",
          icon: <FaGear className="icon" size={17} />,
        },
      ],
    },
    {
      title: "Products",
      list: [
        {
          title: "Product Sales",
          path: "/product-sales",
          icon: <FaTruckFast className="icon" size={19} />,
        },
        {
          title: "Categories",
          path: "/categories",
          icon: <FaListUl className="icon" size={16} />,
        },
        {
          title: "Brands",
          path: "/brands",
          icon: <FaTag className="icon" size={20} />,
        },
        {
          title: "Customer",
          path: "/customer",
          icon: <FaUsers className="icon" size={20} />,
        },
      ],
    },
    {
      title: "Featured",
      list: [
        {
          title: "Daily Report",
          path: "/daily-report",
          icon: <MdDateRange className="icon" size={21} />,
        },
        {
          title: "Supplier",
          path: "/supplier",
          icon: <FaPeopleGroup className="icon" size={19} />,
        },
        {
          title: "Office Cost",
          path: "/office-cost",
          icon: <FaSackDollar className="icon" size={16} />,
        },
        {
          title: "Servicing",
          path: "/servicing",
          icon: <FaTools className="icon" size={16} />,
        },
      ],
    },
  ];
  return (
    <div className={`side_nav ${toggleSideNav == true ? "active" : ""}`}>
      <div className="brand">
        <h2>company</h2>
        <div
          className={`toggler ${toggleSideNav == true ? "show" : ""}`}
          onClick={() => {
            setToggleSideNav((prev) => !prev);
          }}
        >
          <IoClose />
        </div>
      </div>
      <ul className="side_menu">
        {menuItems.map((cati) => {
          return (
            <li key={cati.title}>
              <p className="indicate_section">{cati.title}</p>
              {cati.list.map((item) => {
                return (
                  <MenuLinks
                    items={item}
                    key={item.title}
                    activeLink="active"
                  />
                );
              })}
            </li>
          );
        })}
      </ul>
      <div className="bottom_box">
        <LogoutBtn />
      </div>
    </div>
  );
};

export default sidenav;
