import { lazy, Suspense, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "../Context/AuthContext";

//___ Components ___//
import Loader from "../Components/Loader/Loader";
const SideNav = lazy(() => import("../Components/SideNav/SideNav"));
const Header = lazy(() => import("../Components/Header/Header"));
const Footer = lazy(() => import("../Components/Footer/Footer"));

const AdminLayout = () => {
  const { token } = UseAuthContext();
  const [toggleVal, setToggleVal] = useState(false);
  // const token = true;

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        <SideNav toggleVal={toggleVal} />
      </Suspense>
      <div className={toggleVal == false ? "container" : "container large"}>
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

export default AdminLayout;
