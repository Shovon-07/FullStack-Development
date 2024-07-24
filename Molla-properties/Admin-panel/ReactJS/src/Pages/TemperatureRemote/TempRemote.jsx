import React, { useEffect, useState } from "react";

//___ Icons ___//
import { FaPlus, FaMinus } from "react-icons/fa6";

//___ Css ___//
import "./TempRemote.css";

const TempRemote = () => {
  // States
  const [temp, setTemp] = useState(18);
  const [tempStatus, setTempStatus] = useState("tempStatus");

  const handleMinus = () => {
    setTemp((prev) => prev - 1);
  };

  const handlePlus = () => {
    setTemp((prev) => prev + 1);
  };

  const handleReset = () => {
    setTemp(18);
  };

  useEffect(() => {
    if (temp < 0) {
      setTempStatus((prev) => (prev = "Snow fall"));
    } else if (temp <= 15 && temp >= 0) {
      setTempStatus((prev) => (prev = "Too cool"));
    } else if (temp <= 25 && temp >= 15) {
      setTempStatus((prev) => (prev = "Cool"));
    } else if (temp <= 30 && temp >= 25) {
      setTempStatus((prev) => (prev = "Hot"));
    } else if (temp <= 40 && temp >= 30) {
      setTempStatus((prev) => (prev = "Too Hot"));
    } else if (temp >= 40) {
      setTempStatus((prev) => (prev = "This room is hell !"));
    }
  }, [temp]);

  return (
    <div className="TempRemote d-flex">
      <h2>Temperature Controll Remote</h2>
      <div className="remoteBox">
        <div className="display">
          <p>{temp}° C</p>
          <p className="status">{tempStatus}</p>
          <div
            className={`indicator ${(() => {
              if (tempStatus === "Cool") {
                return "green";
              } else if (tempStatus === "Too cool") {
                return "lightBlue";
              } else if (tempStatus === "Snow fall") {
                return "blue";
              } else if (tempStatus === "Hot") {
                return "lightRed";
              } else if (tempStatus === "Too Hot") {
                return "red";
              } else if (tempStatus === "This room is hell !") {
                return "deepRed";
              } else {
                return "";
              }
            })()}`}
          ></div>
        </div>
        <p className="companyTag">company</p>
        <div className="btn d-flex">
          <div className="flexBtn d-flex gap-20">
            <FaMinus
              className="button minus cursor d-flex"
              onClick={handleMinus}
            />
            <FaPlus
              className="button plus cursor d-flex"
              onClick={handlePlus}
            />
          </div>
          <div className="blockBtn">
            <button className="button cursor" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempRemote;
