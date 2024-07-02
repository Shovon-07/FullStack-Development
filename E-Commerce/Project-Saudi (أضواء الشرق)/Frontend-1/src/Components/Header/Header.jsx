import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Icons ___//
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

//___ Css ___//
import "./Header.scss";

//___ Images ___//
import Logo from "/images/icons/logo.png";

const Header = () => {
  const { token, user, SetToken, setUser } = UseAuthContext();

  // States
  const [navToggler, setNavToggler] = useState(0);

  const handleNavToggler = () => {
    setNavToggler((prev) => (prev === 0 ? 1 : 0));
  };
  const closeNav = () => {
    setNavToggler(0);
  };

  const handleLogout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("USER");
    sessionStorage.clear();
    SetToken(null);
    setUser({});
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
              {token === "Adminedb0e96701c209ab4b50211c856c50c4" ? (
                <li>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={closeNav}
                  >
                    Home
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <NavLink
                  to="/sell"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Sell
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pending-orders"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Pending Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/complete-order"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Complete order
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/history"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Order History
                </NavLink>
              </li>
              {token === "Adminedb0e96701c209ab4b50211c856c50c4" ? (
                <li>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) => (isActive ? "isActive" : "")}
                    onClick={closeNav}
                  >
                    Statistics
                  </NavLink>
                </li>
              ) : (
                ""
              )}
              <li>
                <button className="button logout" onClick={handleLogout}>
                  Logout
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
