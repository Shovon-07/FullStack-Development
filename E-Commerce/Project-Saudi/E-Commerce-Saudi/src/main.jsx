import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//___ Css ___//
import "./Styles/App.scss";

//___ Components ___//

//___ Pages ___//
import App from "./App.jsx";
import Home from "./Pages/Home/Home";
import Customize from "./Pages/Customize/Customize";
import UpdateInventory from "./Pages/UpdateInventory/UpdateInventory";
import Sell from "./Pages/Sell/Sell";
import PendingOrders from "./Pages/PendingOrders/PendingOrders";
import History from "./Pages/History/History";
import CustomizeImage from "./Pages/CustomizeImage/CustomizeImage";
import CompleteOrder from "./Pages/CompleteOrder/CompleteOrder";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      // { path: "/", element: <Home /> },
      { path: "/", element: <Home /> },
      { path: "/update-inventory", element: <UpdateInventory /> },
      { path: "/sell", element: <Sell /> },
      { path: "/pending-orders", element: <PendingOrders /> },
      { path: "/history", element: <History /> },
      { path: "/customize-image", element: <CustomizeImage /> },
      { path: "/complete-order", element: <CompleteOrder /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
