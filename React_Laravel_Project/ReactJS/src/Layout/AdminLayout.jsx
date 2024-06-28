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
  const [theme, setToggleTheme] = useState(false);
  const userName = localStorage.getItem("USER");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className={theme == false ? "main" : "main light"}>
      <Suspense fallback={<Loader />}>
        <SideNav toggleVal={toggleVal} />
      </Suspense>
      <div className={toggleVal == false ? "container" : "container large"}>
        <Suspense fallback={<Loader />}>
          <Header
            user={userName}
            setToggleVal={setToggleVal}
            theme={theme}
            setToggleTheme={setToggleTheme}
          />
        </Suspense>
        <div className="content">
          <Outlet context={[toggleVal]} />
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;
