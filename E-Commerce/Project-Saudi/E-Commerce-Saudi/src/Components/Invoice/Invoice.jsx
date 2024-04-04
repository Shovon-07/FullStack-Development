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
            <div className="firstTop d-flex gap-20">
              <div className="left">
                <img src={Logo} alt="" className="logo" />
                <p>
                  Office 149, 450 South Brand Brooklyn San Diego County, CA
                  91905, USA
                </p>
                <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
              </div>
              <div className="right d-flex gap-20">
                <div className="d-flex gap-20 rightInput">
                  <h3>Invoice #</h3>
                  <input type="text" value={3505} disabled />
                </div>
                <div className="d-flex gap-20 rightInput">
                  <h3>Date:</h3>
                  <input type="date" />
                </div>
                <div className="d-flex gap-20 rightInput">
                  <h3>Due Date:</h3>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
          <div className="right d-flex gap-20 shadow">
            <button className="button d-flex gap-10 sendBtn">
              <IoMdPaperPlane /> Send Invoice
            </button>
            <button className="button d-flex gap-10 sendBtn">
              <IoMdPaperPlane /> Preview
            </button>
            <button className="button d-flex gap-10 sendBtn">
              <IoMdPaperPlane /> Save
            </button>
          </div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <div className="firstTop d-flex flex-start gap-20">
              <div className="left">
                <h3 className="title">Invoice To:</h3>
                <p className="name">Thomas shelby</p>
                <p className="company">Shelby Company Limited</p>
                <p className="address">Small Heath, B10 0HF, UK</p>
                <p className="phone">718-986-6062</p>
                <p className="email">peakyFBlinders@gmail.com</p>
              </div>
              <div className="right">
                <h3 className="title">Bill To:</h3>

                <table>
                  <tbody>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>Total Due</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>
                        <span>$</span> 12,110.55
                      </td>
                    </tr>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>Bank name</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>American Bank</td>
                    </tr>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>Country</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>United States</td>
                    </tr>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>IBAN</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>ETD95476213874685</td>
                    </tr>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>SWIFT code</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>BR91905</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="right shadow">
            <p>Accept payments via</p>
            <select>
              <option value="" defaultChecked>
                Bank account
              </option>
              <option value="">Paypal</option>
              <option value="">Credit/Debit Card</option>
              <option value="">UPI Transfer</option>
            </select>
            <table>
              <tbody>
                <tr>
                  <td style={{ width: "100%" }}>Payment Terms</td>
                  <td>
                    <Switch {...label} defaultChecked />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100%" }}>Client Notes</td>
                  <td>
                    <Switch {...label} />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100%" }}>Payment Stub</td>
                  <td>
                    <Switch {...label} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <DynamicInput />
          </div>
          <div
            className="right visibilityHidden"
            style={{ background: "transparent" }}
          ></div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <div className="firstTop d-flex gap-20">
              <div className="left">
                <div className="d-flex gap-20" style={{ marginBottom: "30px" }}>
                  <p>SALESPERSON:</p>{" "}
                  <input type="text" placeholder="Edward Crowley" />
                </div>
                <input type="text" placeholder="Thanks for your business" />
              </div>
              <div className="right d-flex gap-20">
                <table>
                  <tbody>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>Subtotal</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>
                        <span>$</span> 12,110.55
                      </td>
                    </tr>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>Discount</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>
                        <span>$</span> 12,110.55
                      </td>
                    </tr>
                    <tr style={{ height: "27px", fontSize: "15px" }}>
                      <td>Tax</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td>
                        <span>$</span> 12,110.55
                      </td>
                    </tr>
                    <tr
                      style={{
                        height: "40px",
                        fontSize: "20px",
                      }}
                    >
                      <td>Total</td>
                      <td style={{ width: "20px" }}>:</td>
                      <td style={{ borderTop: "1px solid #7d7d7d" }}>
                        <span>$</span> 12,110.55
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            className="right visibilityHidden"
            style={{ background: "transparent" }}
          ></div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow">
            <div className="firstTop">
              <div className="left">
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
