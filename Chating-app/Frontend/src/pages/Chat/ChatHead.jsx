import React from "react";
import demoImg from "../../assets/images/profile.png";

//===> Icons
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";

const ChatHead = (props) => {
  const { uData } = props;

  return (
    <div className="chatHead">
      <div className="uInfo flex items-center gap-5">
        <img src={uData.profilePic != "" ? uData.profilePic : demoImg} alt="" />
        <div>
          <h1 className="font-semibold text-lg">
            {uData.fullname.length > 15
              ? uData.fullname.slice(0, 15) + " ..."
              : uData.fullname}
          </h1>
          <p className="text-sm">active</p>
        </div>
      </div>
      <div className="action flex items-center gap-5">
        <IoIosSearch size={22} className="cursor-pointer" />
        <HiOutlineDotsVertical size={22} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default ChatHead;
