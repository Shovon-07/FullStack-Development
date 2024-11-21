"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

//___ Components ___//
const Header = dynamic(() => import("@/app/Components/Header/Header"), {
  loading: "",
});
const Sidenav = dynamic(() => import("@/app/Components/Sidenav/Sidenav"), {
  loading: "",
});

const layout = ({ children }) => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  return (
    <>
      <Sidenav
        toggleSideNav={toggleSideNav}
        setToggleSideNav={setToggleSideNav}
      />
      <Header setToggleSideNav={setToggleSideNav} />
      <div className="content_parent">
        <div
          className={`body-overlay ${toggleSideNav == true ? "active" : ""}`}
          onClick={() => setToggleSideNav((prev) => !prev)}
        ></div>

        {children}
      </div>
    </>
  );
};

export default layout;
