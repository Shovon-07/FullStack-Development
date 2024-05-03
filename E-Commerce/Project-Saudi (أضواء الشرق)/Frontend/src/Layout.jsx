import { Suspense, lazy, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Additional utility ___//
import Loader from "./Components/Loader/Loader";

//___ Components ___//
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));
const Calculator = lazy(() => import("./Components/Calculator/Calculator"));

const Layout = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="main">
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      <div className="container">
        {loading && <Loader />}
        <Outlet context={[setLoading]} />
      </div>
      <Suspense fallback={<Loader />}>
        <Calculator />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
