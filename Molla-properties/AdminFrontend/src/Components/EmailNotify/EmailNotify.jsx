import React, { useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";

//___ Icons ___//
import { IoNotifications } from "react-icons/io5";

//___ Css ___//
import "./EmailNotify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const EmailNotify = (props) => {
  const { setLoader, reloadData, setReloadData } = UseAuthContext();
  const {
    handleNotificationDropdown,
    notificationDropdownVal,
    setNotificationDropdownVal,
  } = props;

  const [notificationData, setNotificationData] = useState([]);
  const [unReadMsg, setUnReadMsg] = useState([]);

  // Get notification
  const GetNotificationData = async () => {
    setLoader(true);
    await AxiosClient.get("/get-mails")
      .then((res) => {
        setNotificationData(res.data.data);
        setLoader(false);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  const GetUnReadMsgs = async () => {
    await AxiosClient.get("/get-unread-email")
      .then((res) => {
        setUnReadMsg(res.data.data);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  // Update notification status
  const MarkRead = async (emailId) => {
    await AxiosClient.post("/mark-as-read", { email_id: emailId })
      .then((res) => {
        setNotificationDropdownVal(false);
        setReloadData((prev) => !prev);
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
      });
  };

  useEffect(() => {
    GetNotificationData();
    GetUnReadMsgs();
  }, [reloadData]);

  return (
    <div className="Notify">
      <div className="notification dorwpDownParent">
        <a>
          <IoNotifications
            size={28}
            className="c_pointer"
            onClick={handleNotificationDropdown}
          />
          {(() => {
            if (unReadMsg == undefined || unReadMsg == 0) {
              return;
            } else {
              return (
                <span className="count" style={{ right: "-18px" }}>
                  {unReadMsg}
                </span>
              );
            }
          })()}
        </a>
        <ul
          className={
            notificationDropdownVal != false ? "dorpdown show" : "dorpdown"
          }
        >
          <p className="dropdownTitle">Notification</p>
          {notificationData.map((items, index) => {
            return (
              <Link
                to={`/view-email/${items.id}`}
                className={`c_pointer ${items.Status == 1 ? "unRead" : ""}`}
                key={index}
                onClick={() => MarkRead(items.id)}
              >
                <p className="notifyName">
                  {items.Name.length > 30
                    ? items.Name.slice(0, 30) + "..."
                    : items.Name}
                </p>
                <h4 className="notifyTitle">
                  {items.Subject.length > 27
                    ? items.Subject.slice(0, 27) + "..."
                    : items.Subject}
                </h4>
                <p
                  className="notifyTime"
                  style={{
                    fontSize: "0.8rem",
                    textAlign: "right",
                    marginTop: "10px",
                  }}
                >
                  {items.Created_at.slice(0, 10)}
                </p>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EmailNotify;
