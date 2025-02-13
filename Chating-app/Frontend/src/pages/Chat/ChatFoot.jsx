import React from "react";

//===> Icons
import { IoIosSend } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

const ChatFoot = () => {
  return (
    <div className="chatFoot">
      <div className="left">
        <div className="emoji">
          <FaRegFaceSmileBeam size={22} />
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Type somethig" />
        </div>
        <div className="attach">
          <GrAttachment size={22} />
        </div>
      </div>
      <div className="right">
        <div className="send">
          <IoIosSend size={25} />
        </div>
      </div>
    </div>
  );
};

export default ChatFoot;
