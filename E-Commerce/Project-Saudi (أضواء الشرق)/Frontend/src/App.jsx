import { Route, Routes } from "react-router-dom";

//___ Additional utility ___//
import ProtectedRoute from "./assets/ProtectedRoute";

//___ Css ___//
import "./Styles/App.scss";

//___ Pages ___//
import Layout from "./Layout";
import LayoutNoHeaderFooter from "./LayoutNoHeaderFooter";

import Login from "./Pages/Login/Login";

import Home from "./Pages/Home/Home";
import Sell from "./Pages/Sell/Sell";
import PendingOrders from "./Pages/PendingOrders/PendingOrders";
import CompleteOrder from "./Pages/CompleteOrder/CompleteOrder";
import History from "./Pages/History/History";
import Statistics from "./Pages/Statistics/Statistics";
import DynamicInput from "./Pages/DynamicInput";

import PendingOrdersInvoice from "./Pages/PendingOrdersInvoice/PendingOrdersInvoice";
import PendingOrdersInvoiceForWorker from "./Pages/PendingOrdersInvoiceForWorker/PendingOrdersInvoiceForWorker";
import Invoice from "./Pages/Invoice/Invoice";

// import HomeForHideLogin from "./Pages/Login/HomeForHideLogin";

import ErrorPage from "./Pages/ErrorPage/ErrorPage";

function App() {
  const auth = sessionStorage.getItem("token");

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutNoHeaderFooter />}>
          {/* <Route path="/" element={!auth ? <Login /> : <HomeForHideLogin />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<ErrorPage />} />
        </Route>

        <Route
          path="/dashboard"
          element={<ProtectedRoute Component={Layout} />}
        >
          {/* <Route path="/dashboard/home" element={<Home />} /> */}

          <Route
            path={auth == "worker@mail.com" ? "" : "/dashboard/home"}
            element={<Home />}
          />

          {/* <Route path="/dashboard/sell" element={<Sell />} /> */}
          <Route
            path={auth == "worker@mail.com" ? "" : "/dashboard/sell"}
            element={<Sell />}
          />

          <Route path="/dashboard/pending-orders" element={<PendingOrders />} />
          <Route path="/dashboard/complete-order" element={<CompleteOrder />} />
          <Route path="/dashboard/history" element={<History />} />
          {/* <Route path="/dashboard/statistics" element={<Statistics />} /> */}
          <Route
            path={auth == "worker@mail.com" ? "" : "/dashboard/statistics"}
            element={<Statistics />}
          />
          <Route path="/dashboard/dynamiInp" element={<DynamicInput />} />
          <Route path="/dashboard/*" element={<ErrorPage />} />
        </Route>

        <Route
          path="/invoice"
          element={<ProtectedRoute Component={LayoutNoHeaderFooter} />}
        >
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
    </>
  );
}

export default App;
