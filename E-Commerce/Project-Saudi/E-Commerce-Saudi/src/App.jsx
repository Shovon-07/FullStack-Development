import { Suspense, lazy, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Additional utility ___//
import Loader from "./Components/Loader/Loader";

//___ Components ___//
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <>
      <div className="main">
        <Suspense fallback={<Loader />}>
          <Header auth={auth} />
        </Suspense>
        <div className="container">
          {loading && <Loader />}
          <Outlet context={[setLoading, auth, setAuth]} />
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
