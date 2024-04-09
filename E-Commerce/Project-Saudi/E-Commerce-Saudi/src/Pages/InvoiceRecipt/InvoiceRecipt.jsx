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

  const [apiData, setApiData] = useState([]);
  const getApiData = async () => {
    try {
      setLoading(true);
      await http.post("/order-details", { id: invoiceId }).then((response) => {
        setApiData(response.data);
        setLoading(false);
        console.log(apiData);
        // Set state
        // setInvoicePrintAbleValue({
        //   ...invoicePrintAbleValue,
        //   customer_name: response.data.customer.name,
        // });
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const [invoicePrintAbleValue, setInvoicePrintAbleValue] = useState({
    // customer_name: "",
    // customer_phone: "01767692422",
    // customer_address: `Charkhutar mor, Rajshahi court 6201, kashiadanga, Rajshahi.
    // Charkhutar mor, Rajshahi court 6201, kashiadanga, Rajshahi.`,
    // issueDate: "01/01/2024",
    // deliveryData: "10/01/2024",
    // image: "/images/dress/Screenshot from 2024-04-01 19-14-35.png",
    // material_id: "",
    // material: "Silk",
    // chest_length: "1",
    // neck_length: "2",
    // hand_length: "3",
    // dress_length: "4",
    // sleeve_length: "5",
    // cuff_length: "6",
    // shoulder_length: "7",
    // button_type: "a",
    // neck_type: "b",
    // pocket_type: "c",
    // hand_type: "d",
    // materialLength: "20",
    // materialPrice: "200",
    // discount: "10",
    // tax: "50",
    // total: "1230",
    // payAble: "3000",
    // advance: "500",
    // due: "0",
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
                  {/* <td>{apiData.customer.name}</td> */}
                </tr>
                <tr>
                  <td>Phone</td>
                  <td className="tdColon">:</td>
                  {/* <td>{apiData.customer.phone}</td> */}
                </tr>
                <tr>
                  <td>Address</td>
                  <td className="tdColon">:</td>
                  {/* <td>{apiData.customer.address}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <p>Invoice # {invoiceId}</p>
            <p>Issue date : 01/01/2024</p>
            <p>Delivery : {apiData.deadline_date}</p>
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
              src={"http://localhost:8000/images/ScreenShoot/" + apiData.image}
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
                  // value={apiData.material.name}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Chest length</label>
                <input
                  type="text"
                  name="chest_length"
                  value={apiData.chest_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck length</label>
                <input
                  type="text"
                  name="neck_length"
                  value={apiData.neck_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand length</label>
                <input
                  type="text"
                  name="hand_length"
                  value={apiData.hand_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Dress length</label>
                <input
                  type="text"
                  name="dress_length"
                  value={apiData.dress_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Sleeve length</label>
                <input
                  type="text"
                  name="sleeve_length"
                  value={apiData.sleeve_length}
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
                  value={apiData.cuff_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Shoulder length</label>
                <input
                  type="text"
                  name="shoulder_length"
                  value={apiData.shoulder_length}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Button type</label>
                <input
                  type="text"
                  name="button_type"
                  value={apiData.button_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck type</label>
                <input
                  type="text"
                  name="neck_type"
                  value={apiData.neck_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Pocket type</label>
                <input
                  type="text"
                  name="pocket_type"
                  value={apiData.pocket_type}
                  onChange={handelInvoicePrintAbleValue}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand type</label>
                <input
                  type="text"
                  name="hand_type"
                  value={apiData.hand_type}
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
                  <td>{apiData.sale_price} $</td>
                </tr>
                <tr>
                  <td>Material price</td>
                  <td>:</td>
                  <td>{apiData.sale_price} $</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>:</td>
                  <td>{apiData.total} $</td>
                </tr>

                <tr>
                  <td>Discount</td>
                  <td>:</td>
                  <td>{apiData.discount} $</td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td>:</td>
                  <td>{apiData.vat} $</td>
                </tr>
                <tr>
                  <td>Pay able</td>
                  <td>:</td>
                  <td>{apiData.payable} $</td>
                </tr>

                <tr>
                  <td>Recivced amount</td>
                  <td>:</td>
                  <td>{apiData.advance} $</td>
                </tr>
                <tr>
                  <td>Due</td>
                  <td>:</td>
                  <td>{apiData.due} $</td>
                </tr>
              </tbody>
            </table>
            {/* <div className="d-flex flex-start gap-10">
              <p>Material length : </p>
              <p>$ {apiData.material_length}</p>
            </div> */}
            {/* <div className="d-flex flex-start gap-10">
              <p>Material price : </p>
              <p>{apiData.sale_price} $</p>
            </div> */}
            {/* <div className="d-flex flex-start gap-10">
              <p>Total : </p>
              <p>{apiData.total}$</p>
            </div> */}

            {/* <div className="d-flex flex-start gap-10">
              <p>Discount : </p>
              <p>{apiData.discount}$</p>
            </div> */}
            {/* <div className="d-flex flex-start gap-10">
              <p>Tax : </p>
              <p>{apiData.vat}$</p>
            </div> */}
            {/* <div className="d-flex flex-start gap-10">
              <p>Pay able : </p>
              <p>{apiData.payable} $</p>
            </div> */}

            {/* <div className="d-flex flex-start gap-10">
              <p>Recivced amount : </p>
              <p>{apiData.advance} $</p>
            </div> */}
            {/* <div className="d-flex flex-start gap-10">
              <p>Due : </p>
              <p>{apiData.due} $</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceRecipt;

/**
 * ==> problem
 * Customer name , phone, address আসেছে। কিন্ত component re-render হলে চেলে যাোেচ্চে।
 *
 */
