import React, { useEffect, useState } from "react";
import ApiConfig from "./assets/ApiConfig";
import { Id } from "./assets/Data";

import PCBBackground from "./Components/PCBBackground";
import Footer from "./Components/Footer/Footer";

import "./assets/Css/App.css";
import "./assets/Css/ControlCard.css";

const App = () => {
  const { lightId, fanId } = Id;
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    try {
      await ApiConfig.get("/").then((response) => {
        const res = response.data.data;
        setApiData(res);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  });

  const updatePower = async (id) => {
    await ApiConfig.put(`/update/${id}`, {
      status: apiData[0]?.status == 0 ? 1 : 0,
      boolStatus: apiData[0]?.boolStatus == false ? true : false,
    }).then((res) => {
      const data = res.data.data;
      console.log(data.name + " = " + data.status);
    });
  };

  const updateLed = async (id) => {
    await ApiConfig.put(`/update/${id}`, {
      status: apiData[1]?.status == 0 ? 1 : 0,
      boolStatus: apiData[1]?.boolStatus == false ? true : false,
    }).then((res) => {
      const data = res.data.data;
      console.log(data.name + " = " + data.status);
    });
  };

  return (
    <>
    <PCBBackground />
    
    <div className="app">
      <h1>⚡ Electrical Power Control</h1>
      <p className="subtitle">Smart Monitoring & Control Dashboard</p>

      <div className="grid">
        <div className="card">
          <div
            className={`status-dot ${apiData[0]?.status == 1 ? "light" : ""}`}
          ></div>
          <h2>💡</h2>
          <h3>{apiData[0]?.name}</h3>
          <p>{apiData[0]?.status == 1 ? "ON" : "OFF"}</p>
          <button onClick={(id) => updatePower(apiData[0]?._id)}>
            {apiData[0]?.status == 0 ? "ON" : "OFF"}
          </button>
        </div>

        <div className="card">
          <div
            className={`status-dot ${apiData[1]?.status == 1 ? "fan" : ""}`}
          ></div>
          <h2>❄️</h2>
          <h3>{apiData[1]?.name}</h3>
          <p>{apiData[1]?.status == 1 ? "ON" : "OFF"}</p>
          <button onClick={(id) => updateLed(apiData[1]?._id)}>
            {apiData[1]?.status == 0 ? "ON" : "OFF"}
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <span
          style={{
            fontSize: "5rem",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          +
        </span>
      </div>

      <Footer />
    </div></>
  );
};

export default App;
