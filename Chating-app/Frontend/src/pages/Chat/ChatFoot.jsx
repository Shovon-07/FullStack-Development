import React, { useContext } from "react";
import { toast } from "react-toastify";

//===> Icons
import { IoIosSend } from "react-icons/io";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

//===> Utilities
import { AuthContext } from "../../context/AuthContext";
import ApiConfig from "../../assets/js/ApiConfig";

const ChatFoot = (props) => {
  const { id, msgText, setMsgText, setLoader } = props;
  const { headers, uid } = useContext(AuthContext);

  const Submit = async () => {
    const payload = { senderId: uid, receiverId: id, text: msgText };

    await ApiConfig.post(`/message/send/${uid}`, payload, { headers })
      .then((res) => {
        console.log(res);
        setMsgText("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
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
