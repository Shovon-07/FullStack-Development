import React from "react";
import Tooltip from "@mui/material/Tooltip";

//___ Additional utility ___//

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Icons ___//
import { FaPrint } from "react-icons/fa";

//___ Css ___//
import "./InvoiceRecipt.scss";

const InvoiceRecipt = () => {
  const handlePrint = () => {
    print();
  };

  return (
    <>
      <div className="printBtnBox">
        <Tooltip title={"Print"}>
          <button className="printBtn button" onClick={handlePrint}>
            <FaPrint />
          </button>
        </Tooltip>
      </div>
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
                  <td>Asikur rahman</td>
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

        <div
          className="title"
          style={{ margin: "50px 0 30px 0", fontSize: "13px" }}
        >
          <h2>Product Details</h2>
        </div>

        <div className="productDetails d-flex flex-start gap-30">
          <div className="left">
            <img src="/images/bd.svg" alt="" />
          </div>
          <div className="right d-flex flex-start gap-20">
            <div className="inputBox">
              <label htmlFor="">Chest width</label>
              <input
                type="text"
                name="chest_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Neck width</label>
              <input
                type="text"
                name="neck_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Hand width</label>
              <input
                type="text"
                name="hand_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Dress length</label>
              <input
                type="text"
                name="dress_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Sleeve width</label>
              <input
                type="text"
                name="sleeve_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Cuff width</label>
              <input
                type="text"
                name="cuff_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Shoulder</label>
              <input
                type="text"
                name="shoulder_length"
                required
                // onChange={handleInvoiceInputValue}
              />
            </div>
          </div>
        </div>

        {/* <div className="measurement">
          <h2 className="title">Measurements</h2>
          <div className="measurmentSelection d-flex flex-start gap-30">
            <div className="left d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Chest width</label>
                <input
                  type="text"
                  name="chest_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck width</label>
                <input
                  type="text"
                  name="neck_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand width</label>
                <input
                  type="text"
                  name="hand_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Dress length</label>
                <input
                  type="text"
                  name="dress_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Sleeve width</label>
                <input
                  type="text"
                  name="sleeve_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Cuff width</label>
                <input
                  type="text"
                  name="cuff_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Shoulder</label>
                <input
                  type="text"
                  name="shoulder_length"
                  required
                  // onChange={handleInvoiceInputValue}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="summery d-flex flex-start gap-30">
          <div className="left">
            <p>Salesperson: </p>
            <h3>Al jubair shovon</h3>
          </div>
          <div className="right">
            <div className="d-flex flex-start gap-10">
              <p>Subtotal : </p>
              <p>$ 100</p>
            </div>
            <div className="d-flex flex-start gap-10">
              <p>Discount : </p>
              <p>$ 10</p>
            </div>
            <div className="d-flex flex-start gap-10">
              <p>Tax : </p>
              <p>$ 50</p>
            </div>
            <div className="d-flex flex-start gap-10">
              <p>Total : </p>
              <p>$ 1000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceRecipt;
