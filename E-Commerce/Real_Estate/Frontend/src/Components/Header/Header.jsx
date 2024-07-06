import { Suspense, lazy } from "react";

//___ Images __//
import Logo from "../../assets/Images/logo.svg";

//___ Css __//
import "./Header.css";

//___ Components ___//
import Loader from "../Loader/Loader";
const My_Modal = lazy(() => import("../Search_Modal/Search_Modal"));

const Header = () => {
  return (
    <div className="Header">
      <div className="headerContainer d-flex">
        <div className="logo">
          {/* <img src={Logo} alt="" /> */}
          <p>
            ready <span>plot</span>
          </p>
        </div>
        <ul className="d-flex">
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
        </ul>
        <ul className="d-flex">
          <li className="search d-flex">
            <Suspense fallback={<Loader />}>
              <My_Modal />
            </Suspense>
          </li>
          <li>
            <a href="">Manage rentals</a>
          </li>
          <li>
            <a href="">Advertise</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
