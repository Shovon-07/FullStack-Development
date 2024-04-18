import React, { useState } from "react";

//___ Additional utility ___//
// import AxiosConfig from "../../assets/AxiosConfig";
import ValueConvert from "../../assets/ValueConvert";

//___ Css ___//
import "./Statistics.scss";

//___ Components ___//

const Statistics = () => {
  const [duration, setDuration] = useState("No duration");
  const [inputValue, setInputValue] = useState({
    perWeek: "200000000",
    perMonth: "200",
    perYear: "100000",
  });

  const handleInput = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    setDuration(e.target.value);
  };

  return (
    <div className="Statistics">
      <div>
        <h2>Statistics</h2>
      </div>
      <div style={{ textAlign: "end" }}>
        <select name="time_id" onChange={handleInput}>
          <option value="No duration">Select duration</option>
          <option value="Today" name="today">
            Today
          </option>
          <option value="Last week" name="perWeek">
            Last week
          </option>
          <option value="Last month" name="perMonth">
            Last month
          </option>
          <option value="Last year" name="perYear">
            Last year
          </option>
        </select>
      </div>
      <div className="Cards d-flex gap-20">
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Buy</h3>
            <p className="amount">$ {ValueConvert(inputValue.perWeek)}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Sold</h3>
            <p className="amount">$ {ValueConvert(inputValue.perMonth)}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Balance</h3>
            <p className="amount">$ {ValueConvert(inputValue.perYear)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
