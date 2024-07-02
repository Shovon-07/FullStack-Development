import { createBrowserRouter, Navigate } from "react-router-dom";

//___ Layouts ___//
import AdminLayout from "./Layouts/AdminLayout";
import LayoutNoHeaderFooter from "./Layouts/LayoutNoHeaderFooter";
import GuestLayout from "./Layouts/GuestLayout";

//___ Pages ___//
import Login from "./Pages/Login/Login";

import Home from "./Pages/Home/Home";
import Sell from "./Pages/Sell/Sell";
import PendingOrders from "./Pages/PendingOrders/PendingOrders";
import CompleteOrder from "./Pages/CompleteOrder/CompleteOrder";
import History from "./Pages/History/History";
import Statistics from "./Pages/Statistics/Statistics";

import PendingOrdersInvoice from "./Pages/PendingOrdersInvoice/PendingOrdersInvoice";
import PendingOrdersInvoiceForWorker from "./Pages/PendingOrdersInvoiceForWorker/PendingOrdersInvoiceForWorker";
import Invoice from "./Pages/Invoice/Invoice";

import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Routes = createBrowserRouter([
  // Admin layout
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/", element: <Navigate to={"/dashboard"} /> },
      { path: "/dashboard", element: <Home /> },
      { path: "/sell", element: <Sell /> },
      { path: "/pending-orders", element: <PendingOrders /> },
      { path: "/complete-order", element: <CompleteOrder /> },
      { path: "/history", element: <History /> },
      { path: "/statistics", element: <Statistics /> },
    ],
  },

  // Admin layout no header footer
  {
    path: "/",
    element: <LayoutNoHeaderFooter />,
    children: [
      {
        path: "/temporary-invoice/:invoiceId",
        element: <PendingOrdersInvoice />,
      },
      {
        path: "/temporary-production-invoice/:invoiceId",
        element: <PendingOrdersInvoiceForWorker />,
      },
      {
        path: "/invoice/:invoiceId",
        element: <Invoice />,
      },
    ],
  },

  // Worker layout
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/sell", element: <Sell /> },
      { path: "/pending-orders", element: <PendingOrders /> },
      { path: "/complete-order", element: <CompleteOrder /> },
      { path: "/history", element: <History /> },
    ],
  },

  // Guest layout
  {
    path: "/",
    element: <GuestLayout />,
    children: [{ path: "/login", element: <Login /> }],
  },

  { path: "*", element: <ErrorPage /> },
]);

export default Routes;
