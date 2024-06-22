import React, { lazy } from "react";

//___ Css ___//
import "./Dashboard.css";

//___ Components ___//
const MyAreaChart = lazy(() => import("../../Components/MyAreaChart"));
const MyPieChart = lazy(() => import("../../Components/MyPieChart"));

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h3 className="pageTitle">Dashboard</h3>
      <div className="mainBox d-flex-start gap-20">
        <div className="left">
          <h4 style={{ marginBottom: "30px" }}>Earned</h4>
          <MyAreaChart />
        </div>
        <div className="right d-flex gap-20">
          <div className="item d-flex">
            <MyPieChart />
            <div className="tag">
              <p>
                <span></span> Sold
              </p>
              <p>
                <span></span> Purchase
              </p>
              <p>
                <span></span> Profit
              </p>
              <p>
                <span></span> Damage
              </p>
            </div>
          </div>
          <div className="item d-flex">3</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
