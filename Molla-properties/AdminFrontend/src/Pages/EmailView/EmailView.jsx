import React, { useEffect, useState } from "react";
import { UseAuthContext } from "../../Context/AuthContext";
import { useParams } from "react-router-dom";

//___ Css ___//
import "./EmailView.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const EmailView = () => {
  const { setLoader } = UseAuthContext();
  const { id } = useParams();

  const [emails, setEmails] = useState([]);
  const GetEmails = async () => {
    setLoader(true);
    await AxiosClient.post("/get-single-mail", { id: id })
      .then((response) => {
        setEmails(response.data.data);
        setLoader(false);
        console.clear();
      })
      .catch((e) => {
        console.log(`Error = ${e}`);
        setLoader(false);
      });
  };

  useEffect(() => {
    GetEmails();
  }, []);

  return (
    <div className="EmailView">
      <h3 className="pageTitle">Preview email</h3>
      {/* For go to top */}
      <input
        type="file"
        autoFocus
        style={{ height: "0", opacity: 0, pointerEvents: "none" }}
      />
      {/* For go to top */}
      <div className="msgBody">
        <div>
          <h3>Name :</h3>
          <p>{emails.Name}</p>
        </div>
        <div>
          <h3>Email :</h3>
          <p>{emails.Email}</p>
        </div>
        <div>
          <h3>Subject :</h3>
          <p>{emails.Subject}</p>
        </div>
        <div>
          <h3>Message :</h3>
          <p>{emails.Message}</p>
        </div>
      </div>
      <hr />
      <div className="regards">
        <h2>Molla-Properties</h2>
        <p>Dangipara, Paba, Rajshahi</p>
        <p>support@molla-properties.com</p>
      </div>
    </div>
  );
};

export default EmailView;
