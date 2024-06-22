import React, { useEffect, useState } from "react";

//___ Css ___//
import "./Dashboard.css";

const Dashboard = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // });

  return <div>Dashboard {count}</div>;
};

export default Dashboard;
