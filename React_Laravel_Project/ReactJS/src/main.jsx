import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes.jsx";
import { AuthContext } from "./Context/AuthContext.jsx";

//___ Css __//
import "./assets/Css/App.css";
import "./assets/Css/Var.css";
import "./assets/Css/ScrollBar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={Routes} />
    </AuthContext>
  </React.StrictMode>
);
