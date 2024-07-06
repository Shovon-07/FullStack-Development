import { Suspense, lazy, useState } from "react";

//___ Images __//
import Logo from "../../assets/Images/logo.svg";

//___ Css __//
import "./Header.css";

//___ Components ___//
import Loader from "../Loader/Loader";
const My_Modal = lazy(() => import("../Search_Modal/Search_Modal"));

const Header = (props) => {
  const { toggle, setToggle } = props;
  const handleNavToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="Header">
      <div className="headerContainer d-flex">
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          <p>
            ready <span>plot</span>
          </p>
        </div>
        <ul className={`d-flex ${toggle == true ? "active" : ""}`}>
          <li>
            <a href="">Buy</a>
          </li>
          <li>
            <a href="">Sell</a>
          </li>
          <li>
            <a href="">Rent</a>
          </li>
          <li>
            <a href="">Mortgage</a>
          </li>
          <li>
            <a href="">Find realtor</a>
          </li>
          <li>
            <a href="">News & Insights</a>
          </li>
          <li>
            <a href="">Manage rentals</a>
          </li>
          <li>
            <a href="">Advertise</a>
          </li>
          <li className="search d-flex">
            <Suspense fallback={<Loader />}>
              <My_Modal />
            </Suspense>
          </li>
        </ul>
        <div className="toggler c_pointer" onClick={handleNavToggle}>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
