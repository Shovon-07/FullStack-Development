import { lazy, Suspense, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UseAuthContext } from "../Context/AuthContext";

//___ Components ___//
import Loader from "../Components/Loader/Loader";
const SideNav = lazy(() => import("../Components/SideNav/SideNav"));
const Header = lazy(() => import("../Components/Header/Header"));
const Footer = lazy(() => import("../Components/Footer/Footer"));
const FixedToDo = lazy(() => import("../Components/ToDoApp/ToDoApp"));

const AdminLayout = () => {
  const { token, SetToken, setUser, loader, setLoader } = UseAuthContext();
  const [toggleVal, setToggleVal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("THEME"));

  const userName = localStorage.getItem("USER");

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className={!theme ? "main" : "main light"}>
      <Suspense fallback={<Loader />}>
        <SideNav toggleVal={toggleVal} />
      </Suspense>
      <div className={toggleVal == false ? "container" : "container large"}>
        <Suspense fallback={<Loader />}>
          <Header
            user={userName}
            setToggleVal={setToggleVal}
            theme={theme}
            setTheme={setTheme}
            SetToken={SetToken}
            setUser={setUser}
          />
        </Suspense>
        <div className="content">
          {loader && <Loader />}
          <Outlet context={[toggleVal]} />
          <Suspense fallback={<Loader />}>
            <FixedToDo />
          </Suspense>
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminLayout;