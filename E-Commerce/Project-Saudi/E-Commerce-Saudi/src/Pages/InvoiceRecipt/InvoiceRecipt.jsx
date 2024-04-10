import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";

//___ Images ___//
import Logo from "/images/icons/logo.png";

//___ Icons ___//
import { FaPrint } from "react-icons/fa";

//___ Css ___//
import "./InvoiceRecipt.scss";

const InvoiceRecipt = () => {
  // Print button
  const handlePrint = () => {
    print();
  };

  const { invoiceId } = useParams();
  const [setLoading] = useOutletContext();
  const { http } = AxiosConfig();

  const [apiData, setApiData] = useState({
    customer_name: "",
    customer_phone: "",
    customer_address: "",

    deadline_date: "",

    image: "",

    material: "",
    chest_length: "",
    neck_length: "",
    hand_length: "",
    dress_length: "",
    sleeve_length: "",
    cuff_length: "",
    shoulder_length: "",
    button_type: "",
    neck_type: "",
    pocket_type: "",
    hand_type: "",

    material_length: "",
    material_price: "",
    total: "",
    discount: "",
    tax: "",
    payAble: "",
    advance: "",
    due: "",
  });
  const getApiData = async () => {
    try {
      setLoading(true);
      await http.post("/order-details", { id: invoiceId }).then((response) => {
        setApiData(response.data);
        setLoading(false);

        // Set state
        setInvoicePrintAbleValue({
          ...invoicePrintAbleValue,
          customer_name: response.data.customer.name,
          customer_phone: response.data.customer.phone,
          customer_address: response.data.customer.address,

          deadline_date: response.data.deadline_date,

          image: response.data.image,

          material: response.data.material.name,
          chest_length: response.data.chest_length,
          neck_length: response.data.neck_length,
          hand_length: response.data.hand_length,
          dress_length: response.data.dress_length,
          sleeve_length: response.data.sleeve_length,
          cuff_length: response.data.cuff_length,
          shoulder_length: response.data.shoulder_length,
          button_type: response.data.button_type,
          neck_type: response.data.neck_type,
          pocket_type: response.data.pocket_type,
          hand_type: response.data.hand_type,

          material_length: response.data.material_length,
          material_price: response.data.sale_price,
          total: response.data.total,
          discount: response.data.discount,
          tax: response.data.vat,
          payAble: response.data.payable,
          advance: response.data.advance,
          due: response.data.due,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const [invoicePrintAbleValue, setInvoicePrintAbleValue] = useState({
    customer_name: "",
    customer_phone: "",
    customer_address: "",
    issueDate: "",
    deadline_date: "",

    image: "",

    material: "",
    chest_length: "",
    neck_length: "",
    hand_length: "",
    dress_length: "",
    sleeve_length: "",
    cuff_length: "",
    shoulder_length: "",
    button_type: "",
    neck_type: "",
    pocket_type: "",
    hand_type: "",

    material_length: "",
    material_price: "",
    discount: "",
    tax: "",
    total: "",
    payAble: "",
    advance: "",
    due: "",
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
            <p>Invoice # {invoiceId}</p>
            <p>Issue date : 01/01/2024</p>
            <p>Delivery : {invoicePrintAbleValue.deadline_date}</p>
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
            <img
              src={
                "http://localhost:8000/images/ScreenShoot/" +
                invoicePrintAbleValue.image
              }
              alt=""
            />
          </div>
          <div className="right d-flex flex-start gap-20">
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
                <label htmlFor="">Chest length</label>
                <input
                  type="text"
                  name="chest_length"
                  value={invoicePrintAbleValue.chest_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck length</label>
                <input
                  type="text"
                  name="neck_length"
                  value={invoicePrintAbleValue.neck_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand length</label>
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
                <label htmlFor="">Sleeve length</label>
                <input
                  type="text"
                  name="sleeve_length"
                  value={invoicePrintAbleValue.sleeve_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Cuff length</label>
                <input
                  type="text"
                  name="cuff_length"
                  value={invoicePrintAbleValue.cuff_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Shoulder length</label>
                <input
                  type="text"
                  name="shoulder_length"
                  value={invoicePrintAbleValue.shoulder_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Button type</label>
                <input
                  type="text"
                  name="button_type"
                  value={invoicePrintAbleValue.button_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck type</label>
                <input
                  type="text"
                  name="neck_type"
                  value={invoicePrintAbleValue.neck_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Pocket type</label>
                <input
                  type="text"
                  name="pocket_type"
                  value={invoicePrintAbleValue.pocket_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand type</label>
                <input
                  type="text"
                  name="hand_type"
                  value={invoicePrintAbleValue.hand_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="summery d-flex flex-start gap-30">
          <div className="left">
            <p>Salesperson : </p>
            <h3 className="salespersonNmae">Al jubair shovon</h3>
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td>Material length</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.material_length} $</td>
                </tr>
                <tr>
                  <td>Material price</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.material_price} $</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.total} $</td>
                </tr>

                <tr>
                  <td>Discount</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.discount} $</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.tax} $</td>
                </tr>
                <tr>
                  <td>Pay able</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.payAble} $</td>
                </tr>

                <tr>
                  <td>Recivced amount</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.advance} $</td>
                </tr>
                <tr>
                  <td>Due</td>
                  <td>:</td>
                  <td>{invoicePrintAbleValue.due} $</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceRecipt;

/**
 *
 *
 */
