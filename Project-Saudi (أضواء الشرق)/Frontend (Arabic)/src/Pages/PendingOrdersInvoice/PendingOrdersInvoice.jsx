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
    shop_phone: "",
    note: "",

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
          shop_phone: response.data.shop_phone,
          note: response.data.note,

          material_price: response.data.sale_price,
          total: response.data.total,
          discount: response.data.discount,
          tax: response.data.vat,
          payAble: response.data.payable,
          advance: response.data.advance,
          due: response.data.due,
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
          <div className="middle">
            <h2>{apiData.shop_phone}</h2>
          </div>
          <div className="right">
            <h2>أضواء الشرق</h2>
          </div>
        </div>

        <hr />
        <div className="title">
          <h2>الفاتورة</h2>
        </div>

        <div className="customerDetails d-flex flex-start gap-30">
          <div className="left">
            <table>
              <tbody>
                <tr>
                  <td>اسم العميل</td>
                  <td className="tdColon">:</td>
                  <td>{apiData.customer_name}</td>
                </tr>
                <tr>
                  <td>رقم العميل</td>
                  <td className="tdColon">:</td>
                  <td>{apiData.customer_phone}</td>
                </tr>
                <tr>
                  <td>الموقع</td>
                  <td className="tdColon">:</td>
                  <td>{apiData.customer_address}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="right">
            <p>الفاتورة # {invoiceId}</p>
            <p>تاريخ الإستلام : {apiData.issue_date}</p>
            <p>تاريخ التسليم : {apiData.deadline_date}</p>
          </div>
        </div>

        <div
          className="title"
          style={{ margin: "40px 0 30px 0", fontSize: "13px" }}
        >
          <h2>معلومات الطلب</h2>
        </div>

        <div className="productDetails d-flex flex-start gap-30">
          {/* <div className="left">
            <img
              src={`http://project.preview.com.aljubairshovon.com/backend/public/images/ScreenShoot/${apiData.image}`}
              alt=""
            />
          </div> */}
          <div
            className="right d-flex flex-start gap-20"
            style={{ flexBasis: "100%" }}
          >
            <div className="left d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">القماش</label>
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
                <label htmlFor="">القماش</label>
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
                <label htmlFor="">القماش</label>
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
                <label htmlFor="">القماش</label>
                <input
                  type="text"
                  name="material"
                  value={apiData.material_4}
                  readOnly
                />
              </div>

              <div className="inputBox">
                <label htmlFor="">نوع الثوب</label>
                <input
                  type="text"
                  name="dress_type"
                  value={apiData.dress_type}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">وسع الصدر</label>
                <input
                  type="text"
                  name="chest_length"
                  value={apiData.chest_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">وسع الرقبة</label>
                <input
                  type="text"
                  name="neck_length"
                  value={apiData.neck_length}
                  readOnly
                />
              </div>
            </div>
            <div className="right d-flex gap-20">
              <div className="inputBox">
                <label htmlFor="">عدد الأثواب</label>
                <input
                  type="text"
                  name="hand_type"
                  value={apiData.quantity}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">الطول</label>
                <input
                  type="text"
                  name="dress_length"
                  value={apiData.dress_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">طول الأكتاف</label>
                <input
                  type="text"
                  name="shoulder_length"
                  value={apiData.shoulder_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">طول الكم</label>
                <input
                  type="text"
                  name="sleeve_length"
                  value={apiData.sleeve_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">طول المعصم</label>
                <input
                  type="text"
                  name="cuff_length"
                  value={apiData.cuff_length}
                  readOnly
                />
              </div>
              <div className="inputBox">
                <label htmlFor="">وسع الذراع</label>
                <input
                  type="text"
                  name="hand_length"
                  value={apiData.hand_length}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <div className="types d-flex flex-start gap-30">
          <div className="left">
            <div className={apiData.button_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">نوع الزرار</label>
              <input
                type="text"
                name="button_type"
                value={apiData.button_type}
                readOnly
              />
            </div>
            <div className={apiData.neck_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">نوع القلاب</label>
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
              <label htmlFor="">نوع الجيب</label>
              <input
                type="text"
                name="pocket_type"
                value={apiData.pocket_type}
                readOnly
              />
            </div>
            <div className={apiData.hand_type == "" ? "d-none" : "inputBox"}>
              <label htmlFor="">نوع الكبك</label>
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
          <label htmlFor="">ملاحظات</label>
          <textarea cols="30" rows="5" readOnly value={apiData.note}></textarea>
        </div>

        <div className="summery d-flex flex-start gap-30">
          <div className="left">
            <div className="d-flex flex-start gap-10">
              <p>البائع : </p>
              <h4 className="salespersonNmae">أضواء الشرق</h4>
            </div>
            {/* <div className="d-flex flex-start gap-10">
              <p>Shop phone : </p>
              <h4 className="phone">{apiData.shop_phone}</h4>
            </div> */}
          </div>
          <div className="right">
            <table>
              <tbody>
                <tr>
                  <td>المجموع</td>
                  <td>:</td>
                  <td>{apiData.total} ر.س</td>
                </tr>

                <tr>
                  <td>خصم</td>
                  <td>:</td>
                  <td>{apiData.discount} ر.س</td>
                </tr>
                <tr>
                  <td>الضريبة</td>
                  <td>:</td>
                  <td>{apiData.tax} ر.س</td>
                </tr>
                <tr>
                  <td>المجموع بعد الضريبة</td>
                  <td>:</td>
                  <td>{apiData.payAble} ر.س</td>
                </tr>

                <tr>
                  <td>الواصل</td>
                  <td>:</td>
                  <td>{apiData.advance} ر.س</td>
                </tr>
                <tr>
                  <td>الباقي</td>
                  <td>:</td>
                  <td>{apiData.due} ر.س</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingOrdersInvoice;
