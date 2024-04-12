import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//___ Css ___//
import "./Styles/App.scss";

//___ Components ___//

//___ Pages ___//
import App from "./App.jsx";
import Home from "./Pages/Home/Home";
import Sell from "./Pages/Sell/Sell";
import PendingOrders from "./Pages/PendingOrders/PendingOrders";
import CompleteOrder from "./Pages/CompleteOrder/CompleteOrder";
import History from "./Pages/History/History";
import Statistics from "./Pages/Statistics/Statistics.jsx";

import AppNoHeaderFooter from "./AppNoHeaderFooter.jsx";
import PendingOrdersInvoice from "./Pages/PendingOrdersInvoice/PendingOrdersInvoice.jsx";
import Invoice from "./Pages/Invoice/Invoice.jsx";

import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/sell", element: <Sell /> },
      { path: "/pending-orders", element: <PendingOrders /> },
      { path: "/complete-order", element: <CompleteOrder /> },
      { path: "/history", element: <History /> },
      { path: "/statistics", element: <Statistics /> },
    ],
  },
  {
    path: "/invoice",
    element: <AppNoHeaderFooter />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/invoice/temporary-invoice/:invoiceId",
        element: <PendingOrdersInvoice />,
      },
      { path: "/invoice/:invoiceId", element: <Invoice /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
