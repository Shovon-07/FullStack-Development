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
import "../../Styles/Invoice.scss";

const PendingOrdersInvoice = () => {
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
    material_2: "",
    material_3: "",
    material_4: "",

    material_id: "",
    material_2_id: "",
    material_3_id: "",
    material_4_id: "",

    material_length: "",
    material_length_2: "",
    material_length_3: "",
    material_length_4: "",

    chest_length: "",
    neck_length: "",
    hand_length: "",
    dress_length: "",
    dress_type: "",
    sleeve_length: "",
    cuff_length: "",
    shoulder_length: "",
    button_type: "",
    neck_type: "",
    pocket_type: "",
    hand_type: "",
    quantity: "",
    note: "",
  });
  const getApiData = async () => {
    try {
      setLoading(true);
      await http.post("/order-details", { id: invoiceId }).then((response) => {
        setApiData({
          ...apiData,
          customer_name: response.data.customer.name,
          customer_phone: response.data.customer.phone,
          customer_address: response.data.customer.address,

          issue_date: response.data.created_at.substr(0, 10),
          deadline_date: response.data.deadline_date,

          image: response.data.image,

          material: response.data.material.name,
          material_2: response.data.material2.name,
          material_3: response.data.material3.name,
          material_4: response.data.material4.name,

          material_id: response.data.material.id,
          material_2_id: response.data.material2.id,
          material_3_id: response.data.material3.id,
          material_4_id: response.data.material4.id,

          material_length: response.data.material_length,
          material_length_2: response.data.material_length_2,
          material_length_3: response.data.material_length_3,
          material_length_4: response.data.material_length_4,

          chest_length: response.data.chest_length,
          neck_length: response.data.neck_length,
          hand_length: response.data.hand_length,
          dress_length: response.data.dress_length,
          dress_type: response.data.dress_type,
          sleeve_length: response.data.sleeve_length,
          cuff_length: response.data.cuff_length,
          shoulder_length: response.data.shoulder_length,
          button_type: response.data.button_type,
          neck_type: response.data.neck_type,
          pocket_type: response.data.pocket_type,
          hand_type: response.data.hand_type,
          quantity: response.data.quantity,
          note: response.data.note,
        });
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="printBtnBox" id="PrintAble">
        <Tooltip title={"Print"}>
          <button className="printBtn button" onClick={handlePrint}>
            <FaPrint />
          </button>
        </Tooltip>
      </div>

      <div className="Invoice">
        <div className="logoSec d-flex">
          <div className="left">
            <img src={Logo} alt="" />
          </div>
          <div className="right">
            <h2>أضواء الشرق</h2>
          </div>
        </div>

        <hr />
        <div className="title">
          <h2>Customer Details</h2>
        </div>

        <div className="customerDetails d-flex flex-start gap-30">
          <div className="left">
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td className="tdColon">:</td>
                  <td>{apiData.customer_name}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td className="tdColon">:</td>
                  <td>{apiData.customer_phone}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td className="tdColon">:</td>
                  <td>{apiData.customer_address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <p>Invoice # {invoiceId}</p>
            <p>Issue date : {apiData.issue_date}</p>
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
              src={`http://project.preview.com.aljubairshovon.com/backend/public/images/ScreenShoot/${apiData.image}`}
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
                  value={apiData.material}
                  readOnly
                />
              </div>
              <div
                className={apiData.material_2_id == "1" ? "d-none" : "inputBox"}
              >
                <label htmlFor="">Material</label>
                <input
                  type="text"
                  name="material"
                  value={apiData.material_2}
                  readOnly
                />
              </div>
              <div
                className={apiData.material_3_id == "1" ? "d-none" : "inputBox"}
              >
                <label htmlFor="">Material</label>
                <input
                  type="text"
                  name="material"
                  value={apiData.material_3}
                  readOnly
                />
              </div>
              <div
                className={apiData.material_4_id == "1" ? "d-none" : "inputBox"}
              >
                <label htmlFor="">Material</label>
                <input
                  type="text"
                  name="material"
                  value={apiData.material_4}
                  readOnly
                />
              </div>

              <div className="inputBox">
                <label htmlFor="">Dress type</label>
                <input
                  type="text"
                  name="dress_type"
                  value={apiData.dress_type}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Chest length</label>
                <input
                  type="text"
                  name="chest_length"
                  value={apiData.chest_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Neck length</label>
                <input
                  type="text"
                  name="neck_length"
                  value={apiData.neck_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Hand length</label>
                <input
                  type="text"
                  name="hand_length"
                  value={apiData.hand_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Dress length</label>
                <input
                  type="text"
                  name="dress_length"
                  value={apiData.dress_length}
                  readOnly
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">Material length</label>
                <input
                  type="text"
                  name="material_length"
                  value={apiData.material_length + " m"}
                  readOnly
                />
              </div>
              <div
                className={apiData.material_2_id == "1" ? "d-none" : "inputBox"}
              >
                <label htmlFor="">Material length</label>
                <input
                  type="text"
                  name="material_length_2"
                  value={apiData.material_length_2 + " m"}
                  readOnly
                />
              </div>
              <div
                className={apiData.material_3_id == "1" ? "d-none" : "inputBox"}
              >
                <label htmlFor="">Material length</label>
                <input
                  type="text"
                  name="material_length_3"
                  value={apiData.material_length_3 + " m"}
                  readOnly
                />
              </div>
              <div
                className={apiData.material_4_id == "1" ? "d-none" : "inputBox"}
              >
                <label htmlFor="">Material length</label>
                <input
                  type="text"
                  name="material_length_4"
                  value={apiData.material_length_4 + " m"}
                  readOnly
                />
              </div>

              <div className="inputBox">
                <label htmlFor="">Quantity</label>
                <input
                  type="text"
                  name="hand_type"
                  value={apiData.quantity}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Shoulder length</label>
                <input
                  type="text"
                  name="shoulder_length"
                  value={apiData.shoulder_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Sleeve length</label>
                <input
                  type="text"
                  name="sleeve_length"
                  value={apiData.sleeve_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">Cuff length</label>
                <input
                  type="text"
                  name="cuff_length"
                  value={apiData.cuff_length}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="types d-flex flex-start gap-30">
          <div className="left">
            <div className={apiData.button_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">Button type</label>
              <input
                type="text"
                name="button_type"
                value={apiData.button_type}
                readOnly
              />
            </div>
            <div className={apiData.neck_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">Neck type</label>
              <input
                type="text"
                name="neck_type"
                value={apiData.neck_type}
                readOnly
              />
            </div>
          </div>
          <div className="right">
            <div className={apiData.pocket_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">Pocket type</label>
              <input
                type="text"
                name="pocket_type"
                value={apiData.pocket_type}
                readOnly
              />
            </div>
            <div className={apiData.pocket_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">Hand type</label>
              <input
                type="text"
                name="hand_type"
                value={apiData.hand_type}
                readOnly
              />
            </div>
          </div>
        </div>

        <div className={apiData.note == "" ? "d-none" : "note"}>
          <label htmlFor="">Note</label>
          <textarea cols="30" rows="5" readOnly value={apiData.note}></textarea>
        </div>
      </div>
    </>
  );
};

export default PendingOrdersInvoice;
