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
  const [duration, setDuration] = useState("لايوجد تاريخ مسبق");

  const [buyData, setBuyData] = useState(["0"]);
  const [soldData, setSoldData] = useState(["0"]);
  const [balData, setBalData] = useState(["0"]);

  const handleInput = async (e) => {
    setDuration(e.target.value);

    if (e.target.value === "اليوم") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[0]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[0]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[0]).toFixed(2) + " ر.س");
      });
      setLoading(false);
    } else if (e.target.value === "قبل اسبوع") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[1]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[1]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[1]).toFixed(2) + " ر.س");
      });
      setLoading(false);
    } else if (e.target.value === "قبل شهر") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[2]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[2]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[2]).toFixed(2) + " ر.س");
      });
      setLoading(false);
    } else if (e.target.value === "قبل سنة") {
      // Sold
      setLoading(true);
      await http.get("/statisticSold").then((res) => {
        setSoldData(Number(res.data[3]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Buy
      setLoading(true);
      await http.get("/statisticBuy").then((resBuy) => {
        setBuyData(Number(resBuy.data[3]).toFixed(2) + " ر.س");
      });
      setLoading(false);
      // Balance
      setLoading(true);
      await http.get("/balance").then((resBal) => {
        setBalData(Number(resBal.data[3]).toFixed(2) + " ر.س");
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
        <h2>الإحصائيات</h2>
      </div>
      <div style={{ textAlign: "end" }}>
        <select name="time" onChange={handleInput}>
          <option value="لايوجد تاريخ مسبق">اختر المدة الزمنية</option>
          <option value="اليوم" name="today">
            اليوم
          </option>
          <option value="قبل اسبوع" name="lastWeek">
            قبل اسبوع
          </option>
          <option value="قبل شهر" name="lastMonth">
            قبل شهر
          </option>
          <option value="قبل سنة" name="lastYear">
            قبل سنة
          </option>
        </select>
      </div>
      <div className="Cards d-flex gap-20">
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">الشراء</h3>
            <p className="amount">{buyData}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">البيع</h3>
            <p className="amount">{soldData}</p>
          </div>
        </div>
        <div className="card">
          <p className="viewDuration">{duration}</p>
          <div className="d-flex" style={{ flexDirection: "column" }}>
            <h3 className="title">الأرباح</h3>
            <p className="amount">{balData}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
