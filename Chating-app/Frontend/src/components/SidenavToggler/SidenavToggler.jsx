import React from "react";

//===> Icons
import { IoIosArrowForward } from "react-icons/io";

//===> Css
import "./SidenavToggler.css";

const SidenavToggler = (props) => {
  const { toggleSideNav, setToggleSideNav } = props;

  return (
    <>
      <IoIosArrowForward
        size={35}
        className={`sidenavTogglerIcon ${toggleSideNav && "active"}`}
        onClick={() => {
          setToggleSideNav((prev) => !prev);
        }}
      />
    </>
  );
};

export default SidenavToggler;
