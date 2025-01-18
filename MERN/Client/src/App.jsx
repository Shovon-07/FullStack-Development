import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//__- Css -__//
import "./assets/css/globals.css";
import "./assets/css/variables.css";

//__- Routes -__//
import AdminRoutes from "./routes/AdminRoutes";
import PublicRoute from "./routes/PublicRoute";

//__- Components -__//

//__- Pages -__//
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import NotFound from "./pages/NotFound/NotFound";

//__- Utilities -__//
import { GetCookie } from "./assets/js/GetCookie";
import { Decryption, secretKey } from "./assets/js/Encryption";

const App = () => {
  // Get auth token from cookie
  const [isAuthenticated, setIsAuthenticated] = useState(
    Decryption(
      GetCookie("_Auth_AJS+c0mPanY-07@12#31_token") || "",
      secretKey
    ) || ""
  );

  // Get user role from cookie
  const [userRole, setUserRole] = useState(
    Decryption(GetCookie("_Role_AJS+c0mPanY-07@12#31_user") || "", secretKey) ||
      ""
  );

  // useEffect(() => {
  //   // console.log(
  //   //   `Decrypted token = ${Decryption(
  //   //     GetCookie("_Auth_AJS+c0mPanY-07@12#31_token") || "",
  //   //     secretKey
  //   //   )}`
  //   // );
  // }, []);

  return (
    <Router>
      <Routes>
        {/* Public route for login */}
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Login
                setIsAuthenticated={setIsAuthenticated}
                setUserRole={setUserRole}
              />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Signup
              // setIsAuthenticated={setIsAuthenticated}
              // setUserRole={setUserRole}
              />
            </PublicRoute>
          }
        />

        {/* Protected admin routes */}
        <Route
          path="/*"
          element={
            <AdminRoutes
              userRole={userRole}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
