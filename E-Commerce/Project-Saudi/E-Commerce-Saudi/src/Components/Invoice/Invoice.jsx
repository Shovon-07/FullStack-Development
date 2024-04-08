import React, { useEffect, useState, createContext, useRef } from "react";
import { useOutletContext } from "react-router-dom";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Icons ___//

//___ Css ___//
import "./Invoice.scss";

//___ Component ___//
import CustomizeImg from "../CustomizeImg/CustomizeImg";

const ContextApiForGetImgData = createContext();

const Invoice = () => {
  const { http } = AxiosConfig();
  const [setLoading] = useOutletContext();
  const [msg, setMsg] = useState("");

  const [getImgData, setGetImgData] = useState({
    Image: "",
    BtnImgName: "",
    NakImgName: "",
    PktImgName: "",
    HndImgName: "",
  });

  const [invoiceInputValue, setInvoiceInputValue] = useState([
    {
      customer_name: "",
      customer_phone: "",
      customer_address: "",
      currentDate: "",
      deadline_date: "",

      material_id: "",
      chest_length: "",
      neck_length: "",
      hand_length: "",
      dress_length: "",
      sleeve_length: "",
      cuff_length: "",
      shoulder_length: "",

      material_length: "",
      sale_price: "",
      discount: "",
      vat: "",
      advance: "",

      inqueries_number: "",
      note: "",
    },
  ]);

  const handleInvoiceInputValue = (e) => {
    setInvoiceInputValue({
      ...invoiceInputValue,
      [e.target.name]: e.target.value,
    });
  };

  //___ post Requests start ___//
  const handleSubmit = async () => {
    //___ Validation ___//
    if (invoiceInputValue.customer_name == null) {
      // setMsg("Please enter customer name");
      toast.error("Please enter customer name");
    } else if (invoiceInputValue.customer_phone == null) {
      toast.error("Please enter customer phone number");
    } else if (invoiceInputValue.customer_address == null) {
      toast.error("Please enter customer address");
    } else if (invoiceInputValue.currentDate == null) {
      toast.error("No date selected");
    } else if (invoiceInputValue.deadline_date == null) {
      toast.error("No deadlin date selected");
    } else if (invoiceInputValue.material_id == null) {
      toast.error("Please select a material");
    } else if (invoiceInputValue.chest_length == null) {
      toast.error("Please enter chest length");
    } else if (invoiceInputValue.neck_length == null) {
      toast.error("Please enter neck length");
    } else if (invoiceInputValue.hand_length == null) {
      toast.error("Please enter hand length");
    } else if (invoiceInputValue.dress_length == null) {
      toast.error("Please enter dress length");
    } else if (invoiceInputValue.sleeve_length == null) {
      toast.error("Please enter sleeve length");
    } else if (invoiceInputValue.cuff_length == null) {
      toast.error("Please enter cuff length");
    } else if (invoiceInputValue.shoulder_length == null) {
      toast.error("Please enter shoulder length");
    } else if (invoiceInputValue.material_length == null) {
      toast.error("Please enter material length");
    } else if (invoiceInputValue.sale_price == null) {
      toast.error("Please enter material price");
    } else if (invoiceInputValue.discount == null) {
      toast.error("Please enter discount amount");
    } else if (invoiceInputValue.vat == null) {
      toast.error("Please enter vat amount");
    } else if (invoiceInputValue.advance == null) {
      toast.error("Please enter recived amount");
    } else if (getImgData.Image == "") {
      toast.error("Please generate image");
    } else {
      try {
        const data = {
          customer_name: invoiceInputValue.customer_name,
          customer_phone: invoiceInputValue.customer_phone,
          customer_address: invoiceInputValue.customer_address,

          // For image details
          image: getImgData.Image,
          button_type: getImgData.BtnImgName,
          neck_type: getImgData.NakImgName,
          pocket_type: getImgData.PktImgName,
          hand_type: getImgData.HndImgName,

          material_id: invoiceInputValue.material_id,
          chest_length: invoiceInputValue.chest_length,
          sleeve_length: invoiceInputValue.sleeve_length,
          neck_length: invoiceInputValue.neck_length,
          cuff_length: invoiceInputValue.cuff_length,
          hand_length: invoiceInputValue.hand_length,
          shoulder_length: invoiceInputValue.shoulder_length,
          dress_length: invoiceInputValue.dress_length,
          material_length: invoiceInputValue.material_length,
          sale_price: invoiceInputValue.sale_price,

          discount: invoiceInputValue.discount,
          vat: invoiceInputValue.vat,
          advance: invoiceInputValue.advance,
          deadline_date: invoiceInputValue.deadline_date,
          inqueries_number: invoiceInputValue.inqueries_number,
          note: invoiceInputValue.note,
        };
        setLoading(true);
        await http.post("/store-sell", data).then((response) => {
          console.log(response.data);
          setLoading(false);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  //___ Post Requests end ___//

  //___ Get Requests start ___//
  // Get materials dropdown data
  const [materials, setMaterials] = useState([]);
  const getMaterialData = async () => {
    try {
      setLoading(true);
      await http.get("/get-material").then((response) => {
        setMaterials(response.data);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //___ Get Requests end ___//

  useEffect(() => {
    getMaterialData();
  }, []);

  //___ Calculation ___//
  const changedMaterialLength = useRef();
  const changedSalePrice = useRef();

  const [calc, setCalc] = useState({
    total: "0",
    discountForCalc: "0",
    vatForCalc: "0",
    payAbleForCalc: "0",
    recivedForCalc: "0",
    dueForCalc: "0",
  });
  const Calculation = () => {
    setCalc({
      total:
        parseFloat(invoiceInputValue.material_length) *
        parseFloat(invoiceInputValue.sale_price),

      discountForCalc:
        calc.total -
        (parseFloat(invoiceInputValue.discount) / 100) * calc.total,

      vatForCalc:
        (parseFloat(invoiceInputValue.vat) / 100) * calc.discountForCalc,

      payAbleForCalc:
        calc.discountForCalc +
        (parseFloat(invoiceInputValue.vat) / 100) * calc.discountForCalc,

      dueForCalc: calc.payAbleForCalc - parseFloat(invoiceInputValue.advance),
    });
  };
  const ClearAllState = () => {
    if (
      invoiceInputValue.material_length != "" ||
      invoiceInputValue.sale_price != ""
    ) {
      setCalc({
        total: "",
        discountForCalc: "",
        vatForCalc: "",
        payAbleForCalc: "",
      });
    }
  };

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
                    required
                    placeholder="Customer name"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">Phone :</label>
                  <input
                    type="text"
                    name="customer_phone"
                    required
                    placeholder="Customer phone"
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">Address :</label>
                  <input
                    type="text"
                    name="customer_address"
                    required
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
                    required
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
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoiceSection customImgSection">
          <ContextApiForGetImgData.Provider
            value={{ getImgData, setGetImgData }}
          >
            <CustomizeImg />
          </ContextApiForGetImgData.Provider>
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
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Neck width"
                    name="neck_length"
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Hand width"
                    name="hand_length"
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
              <div className="right d-flex gap-20">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Dress length"
                    name="dress_length"
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Sleeve width"
                    name="sleeve_length"
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Cuff width"
                    name="cuff_length"
                    required
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Shoulder"
                    name="shoulder_length"
                    required
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
                  name="inqueries_number"
                  required
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div style={{ flexBasis: "50%" }}>
                <p>Note:</p>{" "}
                <textarea
                  name="note"
                  required
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
                  required
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                  onKeyDown={ClearAllState}
                  ref={changedMaterialLength}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Material price"
                  name="sale_price"
                  required
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                  onKeyDown={ClearAllState}
                  ref={changedSalePrice}
                />
              </div>
              <div className="total d-flex">
                <p>Total =</p>
                <p>{calc.total} $</p>
              </div>
              <div className="inputBox" style={{ marginTop: "30px" }}>
                <input
                  type="text"
                  placeholder="Discount (%)"
                  name="discount"
                  required
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
                <p style={{ marginTop: "5px", color: "green" }}>
                  Price after discount : {calc.discountForCalc} $
                </p>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Vat (%)"
                  name="vat"
                  required
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
                <p style={{ marginTop: "5px", color: "green" }}>
                  Tax amount : {calc.vatForCalc} $
                </p>
              </div>
              <div className="total d-flex">
                <p>Payable =</p> <h4>{calc.payAbleForCalc} $</h4>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Received amount"
                  name="advance"
                  required
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Due amount"
                  disabled
                  value={"Due = " + calc.dueForCalc}
                />
              </div>
            </div>
            <div style={{ textAlign: "center", margin: "30px 0 10px 0" }}>
              <button
                className="button"
                style={{ width: "30%" }}
                onClick={handleSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
        <button
          className="button"
          style={{ padding: "10px", fontSize: "16px" }}
          onClick={() => {
            console.log(getImgData);
          }}
        >
          Print Invoice
        </button>
      </div>

      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};

export default Invoice;
export { ContextApiForGetImgData };
