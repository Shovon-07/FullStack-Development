import React from "react";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Icons ___//

//___ Css ___//
import "./Invoice.scss";

//___ Component ___//
import CustomizeImg from "../CustomizeImg/CustomizeImg";

const Invoice = () => {
  return (
    <>
      <div className="Invoice">
        <div className="invoiceSection d-flex">
          <div
            className="d-flex gap-20 shadow logoSec"
            style={{ width: "100%" }}
          >
            <div>
              <p>
                Office 149, 450 South Brand Brooklyn San Diego County, CA 91905,
                USA
              </p>
              <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
            </div>
            <img src={Logo} alt="" className="logo" />
          </div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow" style={{ flexBasis: "100%" }}>
            <div className="firstTop d-flex flex-start">
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
              <div className="right d-flex gap-20">
                <div
                  className="d-flex gap-30 rightInput"
                  style={{ justifyContent: "flex-end" }}
                >
                  <h4>Date:</h4>
                  <input type="date" />
                </div>
                <div
                  className="d-flex gap-30 rightInput"
                  style={{ justifyContent: "flex-end" }}
                >
                  <h4>Deadline:</h4>
                  <input type="date" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoiceSection customImgSection">
          <CustomizeImg />
        </div>

        <div className="invoiceSection">
          <div className="measurement">
            <h2 className="title">Measurements</h2>
            <div className="measurmentSelection d-flex flex-start">
              <div className="left d-flex gap-20">
                <div className="inputBox">
                  <input type="text" placeholder="Material type" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Chest width" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Neck width" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Hand width" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Length width" />
                </div>
              </div>
              <div className="right d-flex gap-20">
                <div className="inputBox">
                  <input type="text" placeholder="Dress quantity" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Sleeve width" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Cuff width" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Shoulder" />
                </div>
                <div className="inputBox">
                  <input type="text" placeholder="Material width" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div
            className="left shadow"
            style={{ flexBasis: "50%", padding: "20px 30px" }}
          >
            <div className="firstTop">
              <div style={{ marginBottom: "20px", flexBasis: "50%" }}>
                <p>Inquiries number:</p>{" "}
                <input
                  type="text"
                  style={{ width: "100%", marginTop: "10px" }}
                  placeholder="000000"
                />
              </div>
              <div style={{ flexBasis: "50%" }}>
                <p>Note:</p>{" "}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  style={{ width: "100%", marginTop: "10px" }}
                  placeholder="Invoice Note"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="right" style={{ flexBasis: "50%" }}>
            <div className="bill d-flex gap-20">
              <h3 className="title">Order Summary :</h3>
              <div className="inputBox">
                <input type="text" placeholder="Material length" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Material price" />
              </div>
              <div className="total d-flex">
                <p>Total =</p> <h4>6000 $</h4>
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Discount" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Vat" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Payable" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Received amount" />
              </div>
              <div className="inputBox">
                <input type="text" placeholder="Due ammount" />
              </div>
            </div>
            <div style={{ textAlign: "center", margin: "30px 0 10px 0" }}>
              <button className="button" style={{ width: "30%" }}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;

/*

=> Order summery
inputs->
1. Material length
2. Material price
3. Total
4. Discount
5. Vat
6. Payable
7. Recived ammount
8. Due ammount

*/
