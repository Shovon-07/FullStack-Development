import React from "react";

//___ Additional utility ___//

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Css ___//
import "./InvoiceRecipt.scss";

const InvoiceRecipt = () => {
  return (
    <div className="InvoiceRecipt">
      <div className="logoSec d-flex">
        <div className="left">
          <img src={Logo} alt="" />
        </div>
        <div className="right">
          <h2>Company name</h2>
        </div>
      </div>
    </div>
  );
};

export default InvoiceRecipt;
