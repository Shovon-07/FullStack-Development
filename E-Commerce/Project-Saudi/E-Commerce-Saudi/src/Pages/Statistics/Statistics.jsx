import React, { useEffect, useState } from "react";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import ValueConvert from "../../assets/ValueConvert";

//___ Css ___//
import "./Statistics.scss";

//___ Components ___//

const Statistics = () => {
  const { http } = AxiosConfig();
  const [duration, setDuration] = useState("No duration");

  const [buyData, setBuyData] = useState(["0"]);
  const [soldData, setSoldData] = useState(["0"]);
  const [balData, setBalData] = useState(["0"]);

  const handleInput = (e) => {
    setDuration(e.target.value);

    if (e.target.value === "Today") {
      // Sold
      http.get("/statisticSold").then((res) => {
        console.log(res.data);
        setSoldData(res.data[0]);
      });
      // Buy
      http.get("/statisticBuy").then((resBuy) => {
        console.log(resBuy.data);
        setBuyData(resBuy.data[0]);
      });
      // Balance
      // setBalData(buyData[0] - soldData[0]);
      console.log(buyData[0]);
    } else if (e.target.value === "Last week") {
      // Sold
      http.get("/statisticSold").then((res) => {
        setSoldData(res.data[1]);
      });
      // Buy
      http.get("/statisticBuy").then((resBuy) => {
        setBuyData(resBuy.data[1]);
      });
    } else if (e.target.value === "Last month") {
      // Sold
      http.get("/statisticSold").then((res) => {
        setSoldData(res.data[2]);
      });
      // Buy
      http.get("/statisticBuy").then((resBuy) => {
        setBuyData(resBuy.data[2]);
      });
    } else if (e.target.value === "Last year") {
      // Sold
      http.get("/statisticSold").then((res) => {
        setSoldData(res.data[3]);
      });
      // Buy
      http.get("/statisticBuy").then((resBuy) => {
        setBuyData(resBuy.data[3]);
      });
    } else {
      setSoldData(0);
      setBuyData(0);
    }
  };

  return (
    <div className="Statistics">
      <div>
        <h2>Statistics</h2>
      </div>
      <div style={{ textAlign: "end" }}>
        <select name="time" onChange={handleInput}>
          <option value="No duration">Select duration</option>
          <option value="Today" name="today">
            Today
          </option>
          <option value="Last week" name="lastWeek">
            Last week
          </option>
          <option value="Last month" name="lastMonth">
            Last month
          </option>
          <option value="Last year" name="lastYear">
            Last year
          </option>
        </select>
      </div>
      <div className="Cards d-flex gap-20">
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Buy</h3>
            <p className="amount">$ {ValueConvert(buyData)}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Sold</h3>
            <p className="amount">$ {ValueConvert(soldData)}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Balance</h3>
            <p className="amount">$ {ValueConvert(balData)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
