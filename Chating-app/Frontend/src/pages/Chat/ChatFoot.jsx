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
  const { id, messages, setMessages, msgText, setMsgText } = props;
  const { headers, uid } = useContext(AuthContext);

  const Submit = async (e) => {
    e.preventDefault();
    const payload = { senderId: uid, receiverId: id, text: msgText };

    await ApiConfig.post(`/message/send/${id}`, payload, { headers })
      .then((res) => {
        setMessages([...messages, res.data.data]);
        setMsgText("");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  // window.addEventListener("keydown", function (event) {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     msgText == "" ? "" : Submit();
  //   }
  // });

  return (
    <form className="chatFoot" onSubmit={Submit}>
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
        <button
          className="send"
          type="submit"
          disabled={msgText == "" ? true : false}
        >
          <IoIosSend size={25} />
        </button>
      </div>
    </form>
  );
};

export default ChatFoot;
