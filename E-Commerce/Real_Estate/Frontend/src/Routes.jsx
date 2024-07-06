import { createBrowserRouter } from "react-router-dom";

//___ Layout ___//
import GuestLayout from "./Layouts/GuestLayout";

//___ Pages ___//
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/buy",
        element: (
          <div className="page content">
            <h1>Buy page</h1>
          </div>
        ),
      },
      {
        path: "/sell",
        element: (
          <div className="page content">
            <h1>Sell page</h1>
          </div>
        ),
      },
      {
        path: "/rent",
        element: (
          <div className="page content">
            <h1>Rent page</h1>
          </div>
        ),
      },
      {
        path: "/news",
        element: (
          <div className="page content">
            <h1>News page</h1>
          </div>
        ),
      },
      {
        path: "/manage-rentals",
        element: (
          <div className="page content">
            <h1>Manage-rentals page</h1>
          </div>
        ),
      },
      {
        path: "/advertise",
        element: (
          <div className="page content">
            <h1>Advertise page</h1>
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
