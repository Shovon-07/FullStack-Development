import React from "react";
import { ToastContainer, toast } from "react-toastify";

//___ Css ___//
import "./Documentation.css";
import "react-toastify/dist/ReactToastify.css";

const Documentation = () => {
  return (
    <div className="Documentation">
      Documentation
      <button onClick={() => toast.success("sex")}>Toast</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Documentation;
