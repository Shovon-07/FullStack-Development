import { Navigate, createBrowserRouter } from "react-router-dom";

//___ Layouts ___//
import AdminLayout from "./Layout/AdminLayout";
import GuestLayout from "./Layout/GuestLayout";

//___ Pages ___//
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import ForgotPass from "./Pages/Auth/ForgotPass";
import SubmitOtp from "./Pages/Auth/SubmitOtp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Documentation from "./Pages/Documentation/Documentation";
import Profle from "./Pages/Profle/Profle";
import ToDo_App from "./Pages/ToDo-App/ToDo_App";
import TempRemote from "./Pages/TemperatureRemote/TempRemote";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      // { path: "/", element: <Navigate to={"/dashboard"} /> },
      { path: "/", element: <Dashboard /> },
      { path: "/documentation", element: <Documentation /> },
      { path: "/profile", element: <Profle /> },
      { path: "/settings", element: <h3 className="pageTitle">Settings</h3> },
      { path: "/todo-app", element: <ToDo_App /> },
      { path: "/temperature-remote", element: <TempRemote /> },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/forgot-password", element: <ForgotPass /> },
      { path: "/submit-otp", element: <SubmitOtp /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Routes;
