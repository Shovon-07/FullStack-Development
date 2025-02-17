import React, { lazy, Suspense, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthProvider from "../context/AuthContext";

//===> Route
import PrivateRoute from "./PrivateRoute";

//===> Components
import Loader from "../components/Loader/Loader";
const Sidenav = lazy(() => import("../components/Sidenav/Sidenav"));
import SidenavToggler from "../components/SidenavToggler/SidenavToggler";

//===> Pages
const Home = lazy(() => import("../pages/Home/Home"));
import Chat from "../pages/Chat/Chat";
import Profile from "../pages/Profile/Profile";

import NotFound from "../pages/NotFound/NotFound";

const AdminRoutes = ({ userRole, isAuthenticated }) => {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [loader, setLoader] = useState(false);

  return (
    <>
      <AuthProvider>
        <main>
          {isAuthenticated && (
            <>
              <Suspense fallback={<Loader />}>
                <Sidenav
                  toggleSideNav={toggleSideNav}
                  setToggleSideNav={setToggleSideNav}
                  setLoader={setLoader}
                />
              </Suspense>
              <SidenavToggler
                toggleSideNav={toggleSideNav}
                setToggleSideNav={setToggleSideNav}
              />
            </>
          )}

          <div
            className={`content_parent ${
              !isAuthenticated ? "content_parent_large" : ""
            }`}
          >
            {loader && <Loader />}
            <div
              className={`body-overlay ${
                toggleSideNav == true ? "active" : ""
              }`}
              onClick={() => setToggleSideNav((prev) => !prev)}
            ></div>
            <Routes>
              <Route
                path="/"
                element={
                  <PrivateRoute
                    // roles={["Developer","admin", "rsm", "officer", "manager"]} //=> Define access by role
                    roles={["Developer", "Dashboard-page"]} //=> Define access by permissions
                    userRole={userRole}
                    isAuthenticated={isAuthenticated}
                  >
                    <Suspense fallback="">
                      <Home setLoader={setLoader} />
                    </Suspense>
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute
                    roles={["Developer", "Profile-page"]}
                    userRole={userRole}
                    isAuthenticated={isAuthenticated}
                  >
                    <Profile setLoader={setLoader} />
                  </PrivateRoute>
                }
              />
              <Route
                path="/:id"
                element={
                  <PrivateRoute
                    roles={["Developer", "Chat-page"]}
                    userRole={userRole}
                    isAuthenticated={isAuthenticated}
                  >
                    <Suspense fallback="">
                      <Chat setLoader={setLoader} />
                    </Suspense>
                  </PrivateRoute>
                }
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          {/* {isAuthenticated && (
            <Suspense fallback={<Loader />}>
              <Footer />
            </Suspense>
          )} */}
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
      </AuthProvider>
    </>
  );
};

export default AdminRoutes;
