import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

//___ Components ___//
import Loader from "./Components/Loader/Loader";

//___ Layouts ___//
import AdminLayout from "./Layout/AdminLayout";
import GuestLayout from "./Layout/GuestLayout";

//___ Pages ___//
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

const Emails = lazy(() => import("./Pages/Emails/Emails"));
const EmailView = lazy(() => import("./Pages/EmailView/EmailView"));

import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
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
        path: "/emails",
        element: (
          <Suspense fallback={<Loader />}>
            <Emails />
          </Suspense>
        ),
      },
      {
        path: "/view-email/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <EmailView />
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
