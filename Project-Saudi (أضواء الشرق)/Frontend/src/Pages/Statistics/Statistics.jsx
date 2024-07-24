import { useState } from "react";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import ValueConvert from "../../assets/ValueConvert";
import Loader from "../../Components/Loader/Loader";

//___ Css ___//
import "./Statistics.scss";
import { useOutletContext } from "react-router-dom";

const Statistics = () => {
  const [setLoading] = useOutletContext();
  const { http } = AxiosConfig();
  const [duration, setDuration] = useState("No duration");

  const [buyData, setBuyData] = useState(["0"]);
  const [soldData, setSoldData] = useState(["0"]);
  const [balData, setBalData] = useState(["0"]);

  const handleInput = async (e) => {
    setDuration(e.target.value);

    if (e.target.value === "Today") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[0]).toFixed(2));
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[0]).toFixed(2));
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[0]).toFixed(2));
      });
      setLoading(false);
    } else if (e.target.value === "Last week") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[1]).toFixed(2));
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[1]).toFixed(2));
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[1]).toFixed(2));
      });
      setLoading(false);
    } else if (e.target.value === "Last month") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[2]).toFixed(2));
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[2]).toFixed(2));
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[2]).toFixed(2));
      });
      setLoading(false);
    } else if (e.target.value === "Last year") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[3]).toFixed(2));
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[3]).toFixed(2));
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[3]).toFixed(2));
      });
      setLoading(false);
    } else {
      setSoldData(0);
      setBuyData(0);
      setBalData(0);
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
            <p className="amount">$ {buyData}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Sold</h3>
            <p className="amount">$ {soldData}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">Balance</h3>
            <p className="amount">$ {balData}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
