import React from "react";
import { useParams } from "react-router-dom";

//===> Css
import "./Chat.css";

//===> Components
import ChatHead from "./ChatHead";
import ChatBox from "./ChatBox";
import ChatFoot from "./ChatFoot";

const Chat = () => {
  const { id } = useParams();

  return (
    <div className="Chat">
      <ChatHead />
      <ChatBox />
      <ChatFoot />
    </div>
  );
};

export default Chat;
