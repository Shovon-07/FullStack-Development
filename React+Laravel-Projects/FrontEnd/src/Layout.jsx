import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const SideNav = lazy(() => import("./Components/SideNav/SideNav"));
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SideNav />
      </Suspense>
      <div className="container">
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>
        <div className="content">
          <Outlet />
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
