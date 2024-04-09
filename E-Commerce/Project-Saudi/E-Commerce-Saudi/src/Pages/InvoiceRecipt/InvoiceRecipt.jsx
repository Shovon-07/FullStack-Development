import React, { useState } from "react";
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

  const [invoicePrintAbleValue, setInvoicePrintAbleValue] = useState({
    customer_name: "Asikur rahman",
    customer_phone: "01767692422",
    customer_address: `Charkhutar mor, Rajshahi court 6201, kashiadanga, Rajshahi.
    Charkhutar mor, Rajshahi court 6201, kashiadanga, Rajshahi.`,

    issueDate: "01/01/2024",
    deliveryData: "10/01/2024",

    image: "/images/dress/Screenshot from 2024-04-01 19-14-35.png",

    material_id: "",
    material: "Silk",
    chest_length: "1",
    neck_length: "2",
    hand_length: "3",
    dress_length: "4",
    sleeve_length: "5",
    cuff_length: "6",
    shoulder_length: "7",

    discount: "10",
    tax: "50",
    total: "1230",
  });
  const handelInvoicePrintAbleValue = () => {};

  return (
    <>
      <div className="printBtnBox" id="PrintAble">
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
                  <td>{invoicePrintAbleValue.customer_name}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td className="tdColon">:</td>
                  <td>{invoicePrintAbleValue.customer_phone}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td className="tdColon">:</td>
                  <td>{invoicePrintAbleValue.customer_address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <p>Invoice # 10203</p>
            <p>Issue date : {invoicePrintAbleValue.issueDate}</p>
            <p>Delivery : {invoicePrintAbleValue.deliveryData}</p>
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
            <img src={invoicePrintAbleValue.image} alt="" />
          </div>
          <div className="right d-flex flex-start gap-20">
            {/* <div className="inputBox">
              <label htmlFor="">Material</label>
              <input
                type="text"
                name="material"
                value={invoicePrintAbleValue.material}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Chest width</label>
              <input
                type="text"
                name="chest_length"
                value={invoicePrintAbleValue.chest_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Neck width</label>
              <input
                type="text"
                name="neck_length"
                value={invoicePrintAbleValue.neck_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Hand width</label>
              <input
                type="text"
                name="hand_length"
                value={invoicePrintAbleValue.hand_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Dress length</label>
              <input
                type="text"
                name="dress_length"
                value={invoicePrintAbleValue.dress_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Sleeve width</label>
              <input
                type="text"
                name="sleeve_length"
                value={invoicePrintAbleValue.sleeve_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Cuff width</label>
              <input
                type="text"
                name="cuff_length"
                value={invoicePrintAbleValue.cuff_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div>
            <div className="inputBox">
              <label htmlFor="">Shoulder</label>
              <input
                type="text"
                name="shoulder_length"
                value={invoicePrintAbleValue.shoulder_length}
                onChange={handelInvoicePrintAbleValue}
                readOnly
              />
            </div> */}

            <div className="left d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Material</label>
                <input
                  type="text"
                  name="material"
                  value={invoicePrintAbleValue.material}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Chest width</label>
                <input
                  type="text"
                  name="chest_length"
                  value={invoicePrintAbleValue.chest_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck width</label>
                <input
                  type="text"
                  name="neck_length"
                  value={invoicePrintAbleValue.neck_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand width</label>
                <input
                  type="text"
                  name="hand_length"
                  value={invoicePrintAbleValue.hand_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Dress length</label>
                <input
                  type="text"
                  name="dress_length"
                  value={invoicePrintAbleValue.dress_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Sleeve width</label>
                <input
                  type="text"
                  name="sleeve_length"
                  value={invoicePrintAbleValue.sleeve_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Cuff width</label>
                <input
                  type="text"
                  name="cuff_length"
                  value={invoicePrintAbleValue.cuff_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Shoulder</label>
                <input
                  type="text"
                  name="shoulder_length"
                  value={invoicePrintAbleValue.shoulder_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
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
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck width</label>
                <input
                  type="text"
                  name="neck_length"
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand width</label>
                <input
                  type="text"
                  name="hand_length"
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Dress length</label>
                <input
                  type="text"
                  name="dress_length"
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Sleeve width</label>
                <input
                  type="text"
                  name="sleeve_length"
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Cuff width</label>
                <input
                  type="text"
                  name="cuff_length"
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Shoulder</label>
                <input
                  type="text"
                  name="shoulder_length"
                  
                  // onChange={handelInvoicePrintAbleValue}
                />
              </div>
            </div>
          </div>
        </div> */}

        <div className="summery d-flex flex-start gap-30">
          <div className="left">
            <p>Salesperson : </p>
            <h3 className="salespersonNmae">Al jubair shovon</h3>
          </div>
          <div className="right">
            <div className="d-flex flex-start gap-10">
              <p>Tax : </p>
              <p>$ {invoicePrintAbleValue.tax}</p>
            </div>
            <div className="d-flex flex-start gap-10">
              <p>Discount : </p>
              <p>$ {invoicePrintAbleValue.discount}</p>
            </div>
            <div className="d-flex flex-start gap-10">
              <p>Total : </p>
              <p>$ {invoicePrintAbleValue.total}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceRecipt;
