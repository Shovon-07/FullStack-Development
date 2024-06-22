import { lazy, Suspense, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const SideNav = lazy(() => import("./Components/SideNav/SideNav"));
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

const Layout = () => {
  const [toggleVal, setToggleVal] = useState(false);

  return (
    <>
      <Suspense fallback={<Loader />}>
        <SideNav toggleVal={toggleVal} />
      </Suspense>
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Header setToggleVal={setToggleVal} />
        </Suspense>
        <div className="content">
          <Outlet context={[toggleVal]} />
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
