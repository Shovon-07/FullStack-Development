import React from "react";

//===> Icons
import { IoIosSend } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

const ChatFoot = (props) => {
  const { msgText, setMsgText } = props;

  const Submit = () => {
    console.log(msgText);
    setMsgText("");
  };

  return (
    <div className="chatFoot">
      <div className="left">
        <div className="emoji">
          <FaRegFaceSmileBeam size={22} />
        </div>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Type somethig"
            value={msgText}
            onChange={(e) => {
              setMsgText(e.target.value);
            }}
          />
        </div>
        <div className="attach">
          <GrAttachment size={22} />
        </div>
      </div>
      <div className="right">
        <div className="send" onClick={Submit}>
          <IoIosSend size={25} />
        </div>
      </div>
    </div>
  );
};

export default ChatFoot;
