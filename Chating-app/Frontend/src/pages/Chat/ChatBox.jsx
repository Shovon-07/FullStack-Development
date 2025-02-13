import React, { useContext } from "react";
import demoImg from "../../assets/images/profile.png";
import { AuthContext } from "../../context/AuthContext";

const ChatBox = (props) => {
  const { data } = props;
  const { uid } = useContext(AuthContext);

  return (
    <div className="chatBox">
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <div
              className={`chat ${
                item.senderId == uid ? "chat-end" : "chat-start"
              }`}
              key={item._id}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <div className="chat-header">
                {item.fullname}
                <time className="text-xs opacity-50 ml-2">12:45</time>
              </div>
              <div className="chat-bubble">{item.text}</div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          );
        })}
    </div>
  );
};

export default ChatBox;
