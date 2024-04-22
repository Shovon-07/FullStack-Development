import { useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";

//___ Icons ___//
import { HiMenuAlt3 } from "react-icons/hi";

//___ Css ___//
import "./Header.scss";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Components ___//

const Header = () => {
  const navigate = useNavigate();

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
            <div className="menus d-flex gap-30">
              <li>
                <NavLink
                  to="/dashboard/home"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/sell"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Sell
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/pending-orders"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Pending Orders
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/complete-order"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Complete order
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/history"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Order History
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/statistics"
                  className={({ isActive }) => (isActive ? "isActive" : "")}
                  onClick={closeNav}
                >
                  Statistics
                </NavLink>
              </li>
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
