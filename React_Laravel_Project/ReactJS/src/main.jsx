import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes.jsx";

//___ Css __//
import "./assets/Css/App.css";
import "./assets/Css/Var.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);
