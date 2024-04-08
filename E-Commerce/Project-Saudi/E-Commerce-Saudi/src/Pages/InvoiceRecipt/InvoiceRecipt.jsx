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

      <hr />
      <div className="title">
        <h2>Invoice</h2>
      </div>

      <div className="customerDetails d-flex flex-start gap-30">
        <div className="left">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td className="tdColon">:</td>
                <td>Al jubair shovon</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td className="tdColon">:</td>
                <td>01767692422</td>
              </tr>
              <tr>
                <td>Address</td>
                <td className="tdColon">:</td>
                <td>
                  Charkhutar mor, Rajshahi court 6201, kashiadanga, Rajshahi.
                  Charkhutar mor, Rajshahi court 6201, kashiadanga, Rajshahi.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right">
          <p>Invoice # 10203</p>
          <p>Issue date : 01/01/2024</p>
          <p>Delivery : 10/01/2024</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceRecipt;
