import React, { useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Icons ___//
import { IoNotifications } from "react-icons/io5";

//___ Css ___//
import "./EmailNotify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const EmailNotify = (props) => {
  const { setLoader } = UseAuthContext();
  const { handleNotificationDropdown, notificationDropdownVal } = props;

  const [notificationData, setNotificationData] = useState([]);
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

  useEffect(() => {
    GetNotificationData();
  }, []);

  return (
    <div className="Notify">
      <div className="notification dorwpDownParent">
        <a>
          <IoNotifications
            size={28}
            className="c_pointer"
            onClick={handleNotificationDropdown}
          />
          <span className="count" style={{ right: "-18px" }}>
            {notificationData.length}
          </span>
        </a>
        <ul
          className={
            notificationDropdownVal != false ? "dorpdown show" : "dorpdown"
          }
        >
          <p className="dropdownTitle">Notification</p>
          {notificationData.map((items, index) => {
            return (
              <li className="c_pointer" key={index}>
                <a>
                  <p className="name">
                    {items.Name.length > 30
                      ? items.Name.slice(0, 30) + "..."
                      : items.Name}
                  </p>
                  <h4 className="title">
                    {items.Subject.length > 27
                      ? items.Subject.slice(0, 27) + "..."
                      : items.Subject}
                  </h4>
                  {/* <p className="description">
                      {items.Message.length > 55
                        ? items.Message.slice(0, 55) + "..."
                        : items.Message}
                    </p> */}
                  <p
                    className="time"
                    style={{
                      fontSize: "0.8rem",
                      textAlign: "right",
                      marginTop: "10px",
                    }}
                  >
                    {items.Created_at.slice(0, 10)}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default EmailNotify;
