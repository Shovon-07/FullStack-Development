import { createBrowserRouter } from "react-router-dom";

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

import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Plots from "./Pages/Plots/Plots";
import Gallery from "./Pages/Gallery/Gallery";
import HonorableClient from "./Pages/HonorableClient/HonorableClient";
import NewsAndEvent from "./Pages/NewsAndEvent/NewsAndEvent";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blog from "./Pages/Blog/Blog";
import ProjectView from "./Pages/ProjectView/ProjectView";
import ProjectEdit from "./Pages/ProjectEdit/ProjectEdit";

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
      { path: "/home", element: <Home /> },
      { path: "/add-project", element: <Projects /> },
      { path: "/add-plot", element: <Plots /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/honorable-client", element: <HonorableClient /> },
      { path: "/news-and-event", element: <NewsAndEvent /> },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/blog", element: <Blog /> },
      {
        path: "/project-details/:id",
        element: <ProjectView />,
      },
      {
        path: "/project-edit/:id",
        element: <ProjectEdit />,
      },
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
