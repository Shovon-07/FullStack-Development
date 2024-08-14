import React, { useEffect, useState } from "react";

//___ Css ___//
import "./Clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState();

  const time = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    setInterval(() => {
      time();
    }, 1000);
  }, []);

  return <div className="Clock cursor">{currentTime}</div>;
};

export default Clock;
