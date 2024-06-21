import { lazy, Suspense } from "react";

//___ Components ___//
import Loader from "./Components/Loader/Loader";
const SideNav = lazy(() => import("./Components/SideNav/SideNav"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

const Layout = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SideNav />
      </Suspense>
      <div className="container">
        <div className="content">
          <h1>layout</h1>
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default Layout;
