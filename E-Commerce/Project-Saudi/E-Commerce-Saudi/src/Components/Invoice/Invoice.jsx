import React from "react";
import Switch from "@mui/material/Switch";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Icons ___//
import { FiDollarSign } from "react-icons/fi";
import { IoMdPaperPlane } from "react-icons/io";

//___ Css ___//
import "./Invoice.scss";

//___ Component ___//
import DynamicInput from "../DynamicInput/DynamicInput";

const label = { inputProps: { "aria-label": "Switch demo" } };

const Invoice = () => {
  return (
    <>
      <div className="Invoice">
        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <div className="firstTop d-flex flex-start gap-20">
              <div className="left">
                <img src={Logo} alt="" className="logo" />
                <p>
                  Office 149, 450 South Brand Brooklyn San Diego County, CA
                  91905, USA
                </p>
                <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
              </div>
              <div className="right d-flex gap-20">
                <div className="d-flex gap-10 rightInput">
                  <h4>Invoice #</h4>
                  <input type="text" value={3505} disabled />
                </div>
                <div className="d-flex gap-10 rightInput">
                  <h4>Date:</h4>
                  <input type="date" />
                </div>
                <div className="d-flex gap-10 rightInput">
                  <h4>Deadline:</h4>
                  <input type="date" />
                </div>
                <div className="d-flex gap-10 rightInput">
                  <h4>Delivery date:</h4>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
          <div className="right d-flex gap-20 shadow bill">
            <h3 className="title">Order Summary :</h3>
            <div className="d-flex">
              <p>Received amount</p> <h4>4000 $</h4>
            </div>
            <div className="d-flex">
              <p>Remain amount</p> <h4>4000 $</h4>
            </div>
            <div className="d-flex">
              <p>Total =</p> <h4>5000 $</h4>
            </div>
          </div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <div className="firstTop">
              <div className="customerDetails">
                <h3 className="title">Invoice To #</h3>
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
                        Charkhutar mor, Rajshahi Court 6201, Kashiadanga,
                        Rajshahi
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="right shadow visibilityHidden"></div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <div className="firstTop">
              <div className="left">
                <div style={{ marginBottom: "20px" }}>
                  <p>Inquiries number:</p>{" "}
                  <input
                    type="text"
                    style={{ width: "100%", marginTop: "10px" }}
                    placeholder="000000"
                  />
                </div>
                <div>
                  <p>Note:</p>{" "}
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    style={{ width: "100%", marginTop: "10px" }}
                    placeholder="Invoice Note"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div
            className="right visibilityHidden"
            style={{ background: "transparent" }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
