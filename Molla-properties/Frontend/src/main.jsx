import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes.jsx";

//___ Css __//
import "./assets/Css/App.css";
import "./assets/Css/Var.css";
import "./assets/Css/ScrollBar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes} />
);
