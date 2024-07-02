import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes";
import { AuthContext } from "./Context/AuthContext.jsx";

//___ Css ___//
import "./Styles/App.scss";

//___ Pages ___//
// import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Routes} />
    </AuthContext>
  </React.StrictMode>
);
