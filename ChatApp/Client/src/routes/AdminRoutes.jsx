import React, { lazy, Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//__- Route -__//
import PrivateRoute from "./PrivateRoute";

//__- Components -__//
import Loader from "../components/Loader/Loader";
const Header = lazy(() => import("../components/Header/Header"));
const Sidenav = lazy(() => import("../components/Sidenav/Sidenav"));
const Footer = lazy(() => import("../components/Footer/Footer"));

//__- Pages -__//
import Home from "../pages/Home/Home";

import NotFound from "../pages/NotFound/NotFound";

const AdminRoutes = ({ userRole, isAuthenticated }) => {
  // const location = useLocation();
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    console.log(userRole);
  }, [userRole]);

  return (
    <>
      <main>
        {isAuthenticated && (
          <>
            <Suspense fallback={<Loader />}>
              <Sidenav
                toggleSideNav={toggleSideNav}
                setToggleSideNav={setToggleSideNav}
              />
            </Suspense>
            <Suspense fallback={<Loader />}>
              <Header setToggleSideNav={setToggleSideNav} />
            </Suspense>
          </>
        )}

        <div
          className={`content_parent ${
            !isAuthenticated ? "content_parent_large" : ""
          }`}
        >
          {loader && <Loader />}
          <div
            className={`body-overlay ${toggleSideNav == true ? "active" : ""}`}
            onClick={() => setToggleSideNav((prev) => !prev)}
          ></div>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute
                  roles={["admin", "guest"]}
                  userRole={userRole}
                  isAuthenticated={isAuthenticated}
                >
                  <Home setLoader={setLoader} />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {isAuthenticated && (
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        )}
      </main>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default AdminRoutes;

// localhost:5173
// admin@gmail.com / company@gmail.com
// 12345678
// ]8x5L9zSqCaV1:

/***
 * > Make big content_parent
      className={`content_parent ${
        Array.isArray(location.pathname.match("/invoice/")) &&
        location.pathname.match("/invoice/")[0] == "/invoice/"
          ? "content_parent_large"
          : ""
      }`}
 * ***/
