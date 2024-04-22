import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";

//___ Additional utility ___//
import ProtectedRoute from "./assets/ProtectedRoute";

//___ Css ___//
import "./Styles/App.scss";

//___ Pages ___//
import App from "./App";
import AppNoHeaderFooter from "./AppNoHeaderFooter";

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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppNoHeaderFooter />,
//     errorElement: <ErrorPage />,
//     children: [{ path: "/", element: <Login /> }],
//   },
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/home", element: <Home /> },
//       { path: "/sell", element: <Sell /> },
//       { path: "/pending-orders", element: <PendingOrders /> },
//       { path: "/complete-order", element: <CompleteOrder /> },
//       { path: "/history", element: <History /> },
//       { path: "/statistics", element: <Statistics /> },
//     ],
//   },
//   {
//     path: "/invoice",
//     element: <AppNoHeaderFooter />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/invoice/temporary-invoice/:invoiceId",
//         element: <PendingOrdersInvoice />,
//       },
//       {
//         path: "/invoice/temporary-production-invoice/:invoiceId",
//         element: <PendingOrdersInvoiceForWorker />,
//       },
//       { path: "/invoice/:invoiceId", element: <Invoice /> },
//     ],
//   },
// ]);

const atuhData = localStorage.getItem("LovinValue");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppNoHeaderFooter />}>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<App />}>
            <Route path="/dashboard/home" element={<Home />} />
            <Route path="/dashboard/sell" element={<Sell />} />
            <Route
              path="/dashboard/pending-orders"
              element={<PendingOrders />}
            />
            <Route
              path="/dashboard/complete-order"
              element={<CompleteOrder />}
            />
            <Route path="/dashboard/history" element={<History />} />
            <Route path="/dashboard/statistics" element={<Statistics />} />
            <Route path="/dashboard/*" element={<ErrorPage />} />
          </Route>
        </Route>

        <Route path="/invoice" element={<AppNoHeaderFooter />}>
          <Route
            path="/invoice/temporary-invoice/:invoiceId"
            element={<PendingOrdersInvoice />}
          />
          <Route
            path="/invoice/temporary-production-invoice/:invoiceId"
            element={<PendingOrdersInvoiceForWorker />}
          />
          <Route path="/invoice/:invoiceId" element={<Invoice />} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
