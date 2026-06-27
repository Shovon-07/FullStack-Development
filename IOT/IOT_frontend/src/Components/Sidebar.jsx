import { useState } from "react";
import { FaBolt, FaChartLine, FaPowerOff, FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar ${open ? "open" : "close"}`}>
      <button className="toggle" onClick={() => setOpen(!open)}>
        <FaBars />
      </button>

      <h2 className="logo">⚡ POWER</h2>

      <ul>
        <li>
          <FaBolt /> <span>Dashboard</span>
        </li>
        <li>
          <FaChartLine /> <span>Analytics</span>
        </li>
        <li>
          <FaPowerOff /> <span>Control</span>
        </li>
      </ul>
    </div>
  );
}
