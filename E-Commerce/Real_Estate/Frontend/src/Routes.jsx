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
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default Routes;
