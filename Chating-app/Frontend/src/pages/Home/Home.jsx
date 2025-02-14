import React from "react";

//===> Css
import "./Home.css";

//===> Icons
import { IoIosChatboxes } from "react-icons/io";

const Home = () => {
  return (
    <div className="Home h-[calc(100vh-30px)] flex items-center justify-center flex-col">
      <IoIosChatboxes size={40} />
      <h1 className="page-title">Welcome to : S chat</h1>
      <p>Select a convirtion from sidebar</p>
    </div>
  );
};

export default Home;
