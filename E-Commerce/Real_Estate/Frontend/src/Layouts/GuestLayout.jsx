import { Suspense, lazy } from "react";
import { Outlet } from "react-router-dom";

//___ Components ___//
import Loader from "../Components/Loader/Loader";
const Header = lazy(() => import("../Components/Header/Header"));

const GuestLayout = () => {
  return (
    <div className="main">
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <div className="container">
        <Outlet />
      </div>
      {/* Footer */}
    </div>
  );
};

export default GuestLayout;
