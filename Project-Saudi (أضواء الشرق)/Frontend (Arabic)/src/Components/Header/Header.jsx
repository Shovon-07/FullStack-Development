import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

//___ Icons ___//
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./Header.scss";

//___ Images ___//
import Logo from "/images/icons/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const auth = sessionStorage.getItem("token");

  // States
  const [navToggler, setNavToggler] = useState(0);

  const handleNavToggler = () => {
    setNavToggler((prev) => (prev === 0 ? 1 : 0));
  };
  const closeNav = () => {
    setNavToggler(0);
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <header className="Header">
        <div className={`container d-flex ${navToggler === 0 ? "" : "active"}`}>
          <div className="left">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className="right d-flex">
            <div
              className={`overlay ${navToggler === 0 ? "" : "activeOverlay"}`}
              onClick={closeNav}
            ></div>
            <div className="menus d-flex gap-30">
              <div className="toggler close cursor">
                <RxCross2 size={30} onClick={handleNavToggler} />
              </div>
              {auth === "admin@mail.com" ? (
                <li>
                  <NavLink
                    to="/dashboard/home"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={closeNav}
                  >
                    المخزون
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <NavLink
                  to="/dashboard/sell"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  البيع
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/pending-orders"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  الطلبات المعلقة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/complete-order"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  الطلبات الجاهزة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/history"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  الطلبات المؤرشفة
                </NavLink>
              </li>
              {auth === "admin@mail.com" ? (
                <li>
                  <NavLink
                    to="/dashboard/statistics"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={closeNav}
                  >
                    الإحصائيات
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <button className="button logout" onClick={handleLogout}>
                  تسجيل خروج
                </button>
              </li>
            </div>
            <div className="toggler cursor">
              <HiMenuAlt3 onClick={handleNavToggler} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
