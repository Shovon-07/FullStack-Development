"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const P = () => {
  const [s, ss] = useState(0);

  // Get auth token from localstorage
  const [authToken, setAuthToken] = useState();
  useEffect(() => {
    setAuthToken(localStorage.getItem("AuthToken"));
  }, []);

  return (
    <>
      <h1>P</h1>
      <h3>Token = {authToken}</h3>
      <h3>{s}</h3>
      <button
        onClick={() => {
          ss((prev) => (prev += 1));
          toast.success("Done");
        }}
      >
        Increment
      </button>
    </>
  );
};

export default P;
