import { createBrowserRouter } from "react-router-dom";

//___ Layout ___//
import WebLayout from "./Layouts/WebLayout";

//___ Pages ___//
import Home from "./Pages/Home/Home";
import OngoingProject from "./Pages/OngoingProject/OngoingProject";
import UpcomingProject from "./Pages/UpcomingProject/UpcomingProject";
import CompletedProject from "./Pages/CompletedProject/CompletedProject";
import Gallery from "./Pages/Gallery/Gallery";
import HonorableClient from "./Pages/HonorableClient/HonorableClient";
import AboutUs from "./Pages/AboutUs/AboutUs";
import NewsAndEvent from "./Pages/NewsAndEvent/NewsAndEvent";
import Blog from "./Pages/Blog/Blog";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ProjectView from "./Pages/ProjectView/ProjectView";
import Credits from "./Components/Credits/Credits";

import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/ongoing-project",
        element: <OngoingProject />,
      },
      {
        path: "/upcoming-project",
        element: <UpcomingProject />,
      },
      {
        path: "/completed-project",
        element: <CompletedProject />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/honorable-client",
        element: <HonorableClient />,
      },
      {
        path: "/news-event",
        element: <NewsAndEvent />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/project-details/:id",
        element: <ProjectView />,
      },
      {
        path: "/credits",
        element: <Credits />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Routes;
