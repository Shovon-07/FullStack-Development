import React, { useEffect, useState } from "react";
import AxiosConfig from "../../assets/AxiosConfig";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Icons ___//

//___ Css ___//
import "./Invoice.scss";

//___ Component ___//
import CustomizeImg from "../CustomizeImg/CustomizeImg";

const Invoice = () => {
  const { http } = AxiosConfig();

  const [invoiceInputValue, setInvoiceInputValue] = useState([
    {
      customer_name: "",
      customer_phone: "",
      customer_address: "",
      currentDate: "",
      deadline: "",

      material_id: "",
      chest_length: "",
      neck_length: "",
      hand_length: "",
      dress_length: "",
      sleeve_length: "",
      cuff_length: "",
      shoulder_length: "",
      material_length: "",

      material_length: "",
      sale_price: "",
      discount: "",
      var: "",
      advance: "",
      due_ammount: "",
    },
  ]);
  const [materials, setMaterials] = useState([]);

  const handleInvoiceInputValue = (e) => {
    setInvoiceInputValue({
      ...invoiceInputValue,
      [e.target.name]: e.target.value,
    });
    // console.log(invoiceInputValue.deadline);
  };

  // Api call
  const getMaterialData = async () => {
    try {
      http.get("/get-material").then((response) => {
        setMaterials(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMaterialData();
  }, []);

  return (
    <>
      <div className="Invoice">
        {/* <div className="invoiceSection d-flex">
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
        </div> */}

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow" style={{ flexBasis: "100%" }}>
            <div className="firstTop d-flex flex-start">
              <div className="customerDetails">
                <h3 className="title">Invoice To #</h3>
                {/* <table>
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td className="tdColon">:</td>
                      <td>
                        <input
                          type="text"
                          name="customer_name"
                          placeholder="Customer name"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Phone</td>
                      <td className="tdColon">:</td>
                      <td>
                        <input
                          type="text"
                          name="customer_phone"
                          placeholder="Customer phone"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td className="tdColon">:</td>
                      <td>
                        <input
                          type="text"
                          name="customer_address"
                          placeholder="Customer address"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table> */}
                <div className="inputBox">
                  <label htmlFor="">Name :</label>
                  <input
                    type="text"
                    name="customer_name"
                    placeholder="Customer name"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">Phone :</label>
                  <input
                    type="text"
                    name="customer_phone"
                    placeholder="Customer phone"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">Address :</label>
                  <input
                    type="text"
                    name="customer_address"
                    placeholder="Customer address"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
              <div className="right d-flex gap-20 dateSec">
                <div
                  className="d-flex gap-30 rightInput"
                  style={{ justifyContent: "flex-end" }}
                >
                  <h4>Date:</h4>
                  <input
                    type="date"
                    name="currentDate"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div
                  className="d-flex gap-30 rightInput"
                  style={{ justifyContent: "flex-end" }}
                >
                  <h4>Deadline:</h4>
                  <input
                    type="date"
                    name="deadline_date"
                    onChange={handleInvoiceInputValue}
                  />
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
            {invoiceInputValue.material_id != null ? (
              <span>{invoiceInputValue.material_id}</span>
            ) : (
              ""
            )}
            <div className="measurmentSelection d-flex flex-start">
              <div className="left d-flex gap-20">
                <select name="material_id" onChange={handleInvoiceInputValue}>
                  <option value="" defaultChecked>
                    Select Material
                  </option>
                  {materials.map((items, index) => {
                    return (
                      <option key={index} value={items.id}>
                        {items.name}
                      </option>
                    );
                  })}
                </select>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Chest width"
                    name="chest_length"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Neck width"
                    name="neck_length"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Hand width"
                    name="hand_length"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Dress length"
                    name="dress_length"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
              <div className="right d-flex gap-20">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Sleeve width"
                    name="sleeve_length"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Cuff width"
                    name="cuff_length"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Shoulder"
                    name="shoulder_length"
                    onChange={handleInvoiceInputValue}
                  />
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
                  onChange={handleInvoiceInputValue}
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
                  onChange={handleInvoiceInputValue}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="right" style={{ flexBasis: "50%" }}>
            <div className="bill d-flex gap-20">
              <h3 className="title">Order Summary :</h3>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Material length"
                  name="material_length"
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Material price"
                  name="sale_price"
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="total d-flex">
                <p>Total =</p> <h4>6000 $</h4>
              </div>
              <div className="inputBox" style={{ marginTop: "30px" }}>
                <input
                  type="text"
                  placeholder="Discount"
                  name="discount"
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Vat"
                  name="vat"
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Received amount"
                  name="advance"
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Due ammount"
                  // name="due_ammount"
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="total d-flex">
                <p>Payable =</p> <h4>8000 $</h4>
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

==>> Next Step
* create get screen shot in this page
* post all data in backend

*/
