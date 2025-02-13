import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { formatMessageTime } from "../../assets/js/DateFormater";
import demoImg from "../../assets/images/profile.png";

const ChatBox = (props) => {
  const { data, selectUdata } = props;
  const { uid, uImg } = useContext(AuthContext);
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current && data) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [data]);

  return (
    <div className="chatBox">
      <div className="starting flex items-center justify-center flex-col mt-5 mb-10">
        <img src={selectUdata.profilePic || demoImg} alt="" />
        <p className="text-sm">Start chat with</p>
        <h1 className="text-xl">{selectUdata.fullname}</h1>
      </div>
      {Array.isArray(data) &&
        data.map((item) => {
          return (
            <div
              className={`chat ${
                item.senderId == uid ? "chat-end" : "chat-start"
              }`}
              key={item._id}
              ref={messageEndRef}
            >
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src={
                      item.senderId != uid
                        ? selectUdata.profilePic || demoImg
                        : uImg || demoImg
                    }
                  />
                </div>
              </div>
              <div className="chat-header ">
                {item.fullname}
                <time className="text-xs opacity-50 ml-2">
                  {formatMessageTime(item.createdAt)}
                </time>
              </div>
              <div
                className={`chat-bubble ${
                  item.senderId == uid ? "bg-[#3c3c55]" : ""
                }`}
                style={{ maxWidth: "230px" }}
              >
                {item.text}
              </div>
              <div className="chat-footer opacity-50">Delivered</div>
            </div>
          );
        })}
    </div>
  );
};

export default ChatBox;
