import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

//___ Components ___//
import Loader from "./Components/Loader/Loader";

//___ Layouts ___//
import AdminLayout from "./Layout/AdminLayout";
import GuestLayout from "./Layout/GuestLayout";

//___ Pages ___//
// import Login from "./Pages/Auth/Login";
// import SignUp from "./Pages/Auth/SignUp";
// import ForgotPass from "./Pages/Auth/ForgotPass";
// import SubmitOtp from "./Pages/Auth/SubmitOtp";

// import Dashboard from "./Pages/Dashboard/Dashboard";
// import Documentation from "./Pages/Documentation/Documentation";
// import Profle from "./Pages/Profle/Profle";

// import Home from "./Pages/Home/Home";
// import Projects from "./Pages/Projects/Projects";
// import Plots from "./Pages/Plots/Plots";
// import Gallery from "./Pages/Gallery/Gallery";
// import HonorableClient from "./Pages/HonorableClient/HonorableClient";
// import NewsAndEvent from "./Pages/NewsAndEvent/NewsAndEvent";
// import AboutUs from "./Pages/AboutUs/AboutUs";
// import Blog from "./Pages/Blog/Blog";
// import ProjectView from "./Pages/ProjectView/ProjectView";
// import ProjectEdit from "./Pages/ProjectEdit/ProjectEdit";

// import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Login = lazy(() => import("./Pages/Auth/Login"));
const SignUp = lazy(() => import("./Pages/Auth/SignUp"));
const ForgotPass = lazy(() => import("./Pages/Auth/ForgotPass"));
const SubmitOtp = lazy(() => import("./Pages/Auth/SubmitOtp"));

const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Documentation = lazy(() => import("./Pages/Documentation/Documentation"));
const Profle = lazy(() => import("./Pages/Profle/Profle"));

const Home = lazy(() => import("./Pages/Home/Home"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));
const Plots = lazy(() => import("./Pages/Plots/Plots"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const HonorableClient = lazy(() =>
  import("./Pages/HonorableClient/HonorableClient")
);
const NewsAndEvent = lazy(() => import("./Pages/NewsAndEvent/NewsAndEvent"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const ProjectView = lazy(() => import("./Pages/ProjectView/ProjectView"));
const ProjectEdit = lazy(() => import("./Pages/ProjectEdit/ProjectEdit"));

import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      // { path: "/", element: <Navigate to={"/dashboard"} /> },
      // { path: "/", element: <Dashboard /> },
      // { path: "/documentation", element: <Documentation /> },
      // { path: "/profile", element: <Profle /> },
      // { path: "/settings", element: <h3 className="pageTitle">Settings</h3> },
      // { path: "/home", element: <Home /> },
      // { path: "/add-project", element: <Projects /> },
      // { path: "/add-plot", element: <Plots /> },
      // { path: "/gallery", element: <Gallery /> },
      // { path: "/honorable-client", element: <HonorableClient /> },
      // { path: "/news-and-event", element: <NewsAndEvent /> },
      // { path: "/about-us", element: <AboutUs /> },
      // { path: "/blog", element: <Blog /> },
      // {
      //   path: "/project-details/:id",
      //   element: <ProjectView />,
      // },
      // {
      //   path: "/project-edit/:id",
      //   element: <ProjectEdit />,
      // },

      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/documentation",
        element: (
          <Suspense fallback={<Loader />}>
            <Documentation />
          </Suspense>
        ),
      },
      {
        path: "/profile",
        element: (
          <Suspense fallback={<Loader />}>
            <Profle />
          </Suspense>
        ),
      },

      { path: "/settings", element: <h3 className="pageTitle">Settings</h3> },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/add-project",
        element: (
          <Suspense fallback={<Loader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "/add-plot",
        element: (
          <Suspense fallback={<Loader />}>
            <Plots />
          </Suspense>
        ),
      },
      {
        path: "/gallery",
        element: (
          <Suspense fallback={<Loader />}>
            <Gallery />
          </Suspense>
        ),
      },
      {
        path: "/honorable-client",
        element: (
          <Suspense fallback={<Loader />}>
            <HonorableClient />
          </Suspense>
        ),
      },
      {
        path: "/news-and-event",
        element: (
          <Suspense fallback={<Loader />}>
            <NewsAndEvent />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<Loader />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<Loader />}>
            <Blog />
          </Suspense>
        ),
      },
      {
        path: "/project-details/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProjectView />
          </Suspense>
        ),
      },
      {
        path: "/project-edit/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProjectEdit />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/signup",
        element: (
          <Suspense fallback={<Loader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <Suspense fallback={<Loader />}>
            <ForgotPass />
          </Suspense>
        ),
      },
      {
        path: "/submit-otp",
        element: (
          <Suspense fallback={<Loader />}>
            <SubmitOtp />
          </Suspense>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Routes;
