import { Suspense, lazy, useState } from "react";
import { Outlet } from "react-router-dom";

//___ Additional utility ___//
import Loader from "./Components/Loader/Loader";

//___ Components ___//
const Header = lazy(() => import("./Components/Header/Header"));
const Footer = lazy(() => import("./Components/Footer/Footer"));

function App() {
  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const auth = localStorage.getItem("LoginValue");

  // const [auth, setAuth] = useState(null);

  // const authFunc = () => {
  //   setAuth(localStorage.getItem("LoginValue"));
  //   console.log(auth);
  // };

  // useEffect(() => {
  //   authFunc();
  // });

  return (
    <>
      <div className="main">
        <Suspense fallback={<Loader />}>
          <Header />
        </Suspense>
        <div className="container">
          {loading && <Loader />}
          {/* {auth == "shovon@gmail.com" ? (
            <Outlet context={[setLoading]} />
          ) : (
            <Navigate to="/" />
          )} */}
          <Outlet context={[setLoading]} />
        </div>
        <Suspense fallback={<Loader />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
