"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

const P = () => {
  const [s, ss] = useState(0);

  return (
    <>
      <h1>P</h1>
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
