import { createBrowserRouter } from "react-router-dom";

//___ Layout ___//
import GuestLayout from "./Layouts/GuestLayout";

//___ Pages ___//
import Home from "./Pages/Home/Home";
import OngoingProject from "./Pages/OngoingProject/OngoingProject";
import UpcomingProject from "./Pages/UpcomingProject/UpcomingProject";
import CompletedProject from "./Pages/CompletedProject/CompletedProject";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
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
        element: (
          <div className="page content">
            <h1>Gallery page</h1>
          </div>
        ),
      },
      {
        path: "/news-event",
        element: (
          <div className="page content">
            <h1>News and Event page</h1>
          </div>
        ),
      },
      {
        path: "/about-us",
        element: (
          <div className="page content">
            <h1>About us</h1>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Routes;
