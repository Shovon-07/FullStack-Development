import { Suspense, lazy, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Loader from "../Components/Loader/Loader";
const Header = lazy(() => import("../Components/Header/Header"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

const GuestLayout = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`main ${toggle == true ? "overlay" : ""}`}>
      <Suspense fallback={<Loader />}>
        <Header toggle={toggle} setToggle={setToggle} />
      </Suspense>
      <div className="container">
        <Outlet />
      </div>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default GuestLayout;
