import { Suspense, lazy, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UseAuthContext } from "../Context/AuthContext";

//___ Additional utility ___//
import Loader from "../Components/Loader/Loader";

//___ Components ___//
const Header = lazy(() => import("../Components/Header/Header"));
const Footer = lazy(() => import("../Components/Footer/Footer"));
// const Calculator = lazy(() => import("./Components/Calculator/Calculator"));

const AdminLayout = () => {
  const [loading, setLoading] = useState(false);
  const { token, SetToken, setUser } = UseAuthContext();

  if (!token) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="main">
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <div className="container">
        {loading && <Loader />}
        <Outlet context={[setLoading]} />
      </div>
      {/* <Suspense fallback={<Loader />}>
        <Calculator />
      </Suspense> */}
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default AdminLayout;
