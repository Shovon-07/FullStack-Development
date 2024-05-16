import {
  useEffect,
  useState,
  createContext,
  useRef,
  lazy,
  Suspense,
} from "react";
import { useOutletContext } from "react-router-dom";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import Loader from "../Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//___ Icons ___//
import { FiAlertTriangle } from "react-icons/fi";
import { FaBackspace } from "react-icons/fa";

//___ Css ___//
import "./CreateInvoice.scss";

//___ Component ___//
const CustomizeImg = lazy(() => import("../CustomizeImg/CustomizeImg"));

const ContextApiForGetImgData = createContext();

const CreateInvoice = () => {
  const { http } = AxiosConfig();
  const [setLoading] = useOutletContext();

  const [getImgData, setGetImgData] = useState({
    Image: "",
    DressImgName: "",
    BtnImgName: "",
    NakImgName: "",
    PktImgName: "",
    HndImgName: "",
  });

  const [invoiceInputValue, setInvoiceInputValue] = useState({
    customer_name: "",
    customer_phone: "",
    customer_address: "",
    currentDate: "",
    deadline_date: "",

    // Mesurments
    material_id: "",
    material_id_2: "1",
    material_id_3: "1",
    material_id_4: "1",
    material_length: "",
    material_length_2: "",
    material_length_3: "",
    material_length_4: "",

    chest_length: "",
    neck_length: "",
    hand_length: "",
    dress_length: "",
    sleeve_length: "",
    cuff_length: "",
    shoulder_length: "",

    // Order summery
    quantity: "",
    sale_price: "",
    total: "",
    discount: "",
    vat: "",
    payable: "",
    advance: "",
    due: "",

    shop_phone: "0558180520",
    note: "",
  });

  const handleInvoiceInputValue = (e) => {
    setInvoiceInputValue({
      ...invoiceInputValue,
      [e.target.name]: e.target.value,
    });
  };

  const [count, setCount] = useState([1]);
  const addInput = () => {
    if (count.length < 4) {
      setCount((prev) => (prev += 1));
    }
  };
  const removeInput = () => {
    if (count.length == 2) {
      setCount(count.slice(0, 1));
      invoiceInputValue.material_id_2 = "1";
      invoiceInputValue.material_length_2 = "";
    } else if (count.length == 3) {
      setCount(count.slice(0, 2));
      invoiceInputValue.material_id_3 = "1";
      invoiceInputValue.material_length_3 = "";
    } else if (count.length == 4) {
      setCount(count.slice(0, 3));
      invoiceInputValue.material_id_4 = "1";
      invoiceInputValue.material_length_4 = "";
    }
  };

  //___ post Requests start ___//
  const handleSubmit = async () => {
    //___ Validation ___//
    if (invoiceInputValue.customer_name == "") {
      toast.error("Please enter customer name");
    } else if (invoiceInputValue.customer_phone == "") {
      toast.error("Please enter customer phone number");
    } else if (invoiceInputValue.customer_address == "") {
      toast.error("Please enter customer address");
    } else if (invoiceInputValue.currentDate == "") {
      toast.error("No date selected");
    } else if (invoiceInputValue.deadline_date == "") {
      toast.error("No deadlin date selected");
    } else if (invoiceInputValue.material_id <= "1") {
      toast.error("Please select a material");
    } else if (invoiceInputValue.chest_length == "") {
      toast.error("Please enter chest length");
    } else if (invoiceInputValue.neck_length == "") {
      toast.error("Please enter neck length");
    } else if (invoiceInputValue.hand_length == "") {
      toast.error("Please enter hand length");
    } else if (invoiceInputValue.dress_length == "") {
      toast.error("Please enter dress length");
    } else if (invoiceInputValue.sleeve_length == "") {
      toast.error("Please enter sleeve length");
    } else if (invoiceInputValue.cuff_length == "") {
      toast.error("Please enter cuff length");
    } else if (invoiceInputValue.shoulder_length == "") {
      toast.error("Please enter shoulder length");
    } else if (getImgData.Image == "") {
      toast.error("Please generate image");
    } else if (invoiceInputValue.material_length == "") {
      toast.error("Please enter material length");
    } else if (invoiceInputValue.quantity == "") {
      toast.error("Please enter dress quantity");
    } else if (invoiceInputValue.total == "") {
      toast.error("Please enter total price");
    } else if (invoiceInputValue.discount == "") {
      toast.error("Please enter discount");
    } else if (invoiceInputValue.vat == "") {
      toast.error("Please enter vat");
    } else if (invoiceInputValue.advance == "") {
      toast.error("Please enter recived amount");
    } else if (invoiceInputValue.shop_phone == "") {
      toast.error("Please enter shope phone number");
    } else if (invoiceInputValue.note.length > 550) {
      toast.error("You cannot enter more than 1000 characters");
    } else {
      try {
        const data = {
          customer_name: invoiceInputValue.customer_name,
          customer_phone: invoiceInputValue.customer_phone,
          customer_address: invoiceInputValue.customer_address,
          deadline_date: invoiceInputValue.deadline_date,

          // For image details
          image: getImgData.Image,
          dress_type: getImgData.DressImgName,
          button_type: getImgData.BtnImgName,
          neck_type: getImgData.NakImgName,
          pocket_type: getImgData.PktImgName,
          hand_type: getImgData.HndImgName,

          // Mesurments
          material_id: invoiceInputValue.material_id,
          material_id_2: invoiceInputValue.material_id_2,
          material_id_3: invoiceInputValue.material_id_3,
          material_id_4: invoiceInputValue.material_id_4,
          material_length: Number(invoiceInputValue.material_length).toFixed(2),
          material_length_2: Number(
            invoiceInputValue.material_length_2
          ).toFixed(2),
          material_length_3: Number(
            invoiceInputValue.material_length_3
          ).toFixed(2),
          material_length_4: Number(
            invoiceInputValue.material_length_4
          ).toFixed(2),

          chest_length: invoiceInputValue.chest_length,
          sleeve_length: invoiceInputValue.sleeve_length,
          neck_length: invoiceInputValue.neck_length,
          cuff_length: invoiceInputValue.cuff_length,
          hand_length: invoiceInputValue.hand_length,
          shoulder_length: invoiceInputValue.shoulder_length,
          dress_length: invoiceInputValue.dress_length,

          // Order summery
          sale_price: "0",
          quantity: Number(invoiceInputValue.quantity).toFixed(2),
          total: Number(invoiceInputValue.total).toFixed(2),
          discount: Number(calc.discountAmountForCalc).toFixed(2),
          vat: Number(calc.vatForCalc).toFixed(2),
          payable: Number(calc.payAbleForCalc).toFixed(2),
          advance: Number(invoiceInputValue.advance).toFixed(2),
          due: Number(calc.dueForCalc).toFixed(2),

          shop_phone: invoiceInputValue.shop_phone,
          note: invoiceInputValue.note,
        };
        setLoading(true);
        await http.post("/store-sell", data).then((response) => {
          if (response.data === "success") {
            setLoading(false);
            toast.success("Order Confirmed");
            console.clear();

            // Clear input value
            setInvoiceInputValue({
              customer_name: "",
              customer_phone: "",
              customer_address: "",
              currentDate: "",
              deadline_date: "",

              // Mesurments
              material_id: "",
              material_id_2: "",
              material_id_3: "",
              material_id_4: "",
              material_length: "",
              material_length_2: "",
              material_length_3: "",
              material_length_4: "",

              chest_length: "",
              neck_length: "",
              hand_length: "",
              dress_length: "",
              sleeve_length: "",
              cuff_length: "",
              shoulder_length: "",

              // Order summery
              sale_price: "",
              total: "",
              discount: "",
              vat: "",
              payable: "",
              advance: "",
              due: "",

              shop_phone: "0558180520",
              note: "",
            });
            setCalc({
              // total: "0",
              discountAmountForCalc: "0",
              discountForCalc: "0",
              vatForCalc: "0",
              payAbleForCalc: "0",
              recivedForCalc: "0",
              dueForCalc: "0",
            });
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  };
  //___ Post Requests end ___//

  //___ Get Requests start ___//
  const [materials, setMaterials] = useState([]);
  const getMaterialData = async () => {
    try {
      setLoading(true);
      await http.get("/get-material").then((response) => {
        setMaterials(response.data);
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
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
    // total: "0",
    discountAmountForCalc: "0",
    discountForCalc: "0",
    vatForCalc: "0",
    payAbleForCalc: "0",
    recivedForCalc: "0",
    dueForCalc: "0",
  });
  const Calculation = () => {
    setCalc({
      // total:
      //   parseFloat(invoiceInputValue.material_length) *
      //   parseFloat(invoiceInputValue.sale_price),

      discountAmountForCalc:
        (parseFloat(invoiceInputValue.discount) / 100) *
        invoiceInputValue.total,

      discountForCalc:
        invoiceInputValue.total -
        (parseFloat(invoiceInputValue.discount) / 100) *
          invoiceInputValue.total,

      vatForCalc:
        (parseFloat(invoiceInputValue.vat) / 100) * calc.discountForCalc,

      payAbleForCalc:
        calc.discountForCalc +
        (parseFloat(invoiceInputValue.vat) / 100) * calc.discountForCalc,

      dueForCalc: calc.payAbleForCalc - parseFloat(invoiceInputValue.advance),
    });
  };
  const ClearAllState = () => {
    // if (
    //   invoiceInputValue.material_length != "" ||
    //   invoiceInputValue.sale_price != ""
    // ) {
    //   setCalc({
    //     total: "",
    //     discountForCalc: "",
    //     vatForCalc: "",
    //     payAbleForCalc: "",
    //   });
    // }
  };

  return (
    <>
      <div className="CreateInvoice">
        <div className="invoiceSection first d-flex flex-start gap-20">
          <div className="left shadow" style={{ flexBasis: "100%" }}>
            <div className="firstTop d-flex flex-start">
              <div className="customerDetails">
                <h3 className="title">فاتورة الى #</h3>
                <div className="inputBox">
                  <label htmlFor="">اسم العميل :</label>
                  <input
                    type="text"
                    name="customer_name"
                    required
                    placeholder="اسم العميل"
                    value={invoiceInputValue.customer_name}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">رقم العميل :</label>
                  <input
                    type="text"
                    name="customer_phone"
                    required
                    placeholder="رقم العميل"
                    value={invoiceInputValue.customer_phone}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <label htmlFor="">الموقع :</label>
                  <input
                    type="text"
                    name="customer_address"
                    required
                    placeholder="موقع العميل"
                    value={invoiceInputValue.customer_address}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
              <div className="right d-flex gap-20 dateSec">
                <div
                  className="d-flex gap-30 rightInput"
                  style={{ justifyContent: "flex-end" }}
                >
                  <h4>تاريخ الإستلام :</h4>
                  <input
                    type="date"
                    name="currentDate"
                    required
                    value={invoiceInputValue.currentDate}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div
                  className="d-flex gap-30 rightInput"
                  style={{ justifyContent: "flex-end" }}
                >
                  <h4>تاريخ التسليم :</h4>
                  <input
                    type="date"
                    name="deadline_date"
                    required
                    value={invoiceInputValue.deadline_date}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="invoiceSection">
          <div className="measurement shadow">
            <h2 className="title">المقاسات</h2>
            <div className="measurmentSelection d-flex flex-start">
              <div className="left d-flex gap-20">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "10px",
                  }}
                >
                  <button className="addSelecItem" onClick={addInput}>
                    +
                  </button>
                  <button
                    onClick={removeInput}
                    className={count.length == 1 ? "d-none" : "removeSelecItem"}
                  >
                    -
                  </button>
                  <div style={{ width: "100%" }}>
                    <select
                      name="material_id"
                      onChange={handleInvoiceInputValue}
                    >
                      <option value="1" default>
                        أختر نوع القماش
                      </option>
                      {materials.map((items, index) => {
                        return (
                          <option key={index} value={items.id}>
                            {items.name}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="material_id_2"
                      onChange={handleInvoiceInputValue}
                      className={count.length >= 2 ? "" : "d-none"}
                    >
                      <option
                        value="1"
                        selected={count.length < 2 ? "true" : ""}
                      >
                        اختر نوع القماش الثاني
                      </option>
                      {materials.map((items, index) => {
                        return (
                          <option key={index} value={items.id}>
                            {items.name}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="material_id_3"
                      onChange={handleInvoiceInputValue}
                      className={count.length >= 3 ? "" : "d-none"}
                    >
                      <option
                        value="1"
                        selected={count.length < 3 ? "true" : ""}
                      >
                        اختر نوع القماش الثالث
                      </option>
                      {materials.map((items, index) => {
                        return (
                          <option key={index} value={items.id}>
                            {items.name}
                          </option>
                        );
                      })}
                    </select>
                    <select
                      name="material_id_4"
                      onChange={handleInvoiceInputValue}
                      className={count.length >= 4 ? "" : "d-none"}
                    >
                      <option
                        value="1"
                        selected={count.length < 4 ? "true" : ""}
                      >
                        اختر نوع القماش الرابع
                      </option>
                      {materials.map((items, index) => {
                        return (
                          <option key={index} value={items.id}>
                            {items.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div
                  className="alertNote d-flex gap-20"
                  style={{ marginTop: "-15px" }}
                >
                  <p style={{ lineHeight: "normal" }}>
                    <FiAlertTriangle size={18} />
                  </p>
                  <p style={{ lineHeight: "normal" }}>
                    رجاءً لا تختار نفس القماش
                  </p>
                </div>

                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="وسع الصدر"
                    name="chest_length"
                    required
                    value={invoiceInputValue.chest_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="وسع الرقبة"
                    name="neck_length"
                    required
                    value={invoiceInputValue.neck_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="وسع الذراع"
                    name="hand_length"
                    required
                    value={invoiceInputValue.hand_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
              </div>
              <div className="right d-flex gap-20">
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="طول القماش
                    "
                    name="material_length"
                    required
                    value={invoiceInputValue.material_length}
                    onChange={handleInvoiceInputValue}
                    onKeyUp={Calculation}
                    onKeyDown={ClearAllState}
                    ref={changedMaterialLength}
                  />
                </div>
                <div className={count.length >= 2 ? "inputBox" : "d-none"}>
                  <input
                    type="text"
                    placeholder="طول القماش
                    "
                    name="material_length_2"
                    required
                    value={invoiceInputValue.material_length_2}
                    onChange={handleInvoiceInputValue}
                    onKeyUp={Calculation}
                    onKeyDown={ClearAllState}
                    ref={changedMaterialLength}
                  />
                </div>
                <div className={count.length >= 3 ? "inputBox" : "d-none"}>
                  <input
                    type="text"
                    placeholder="طول القماش
                    "
                    name="material_length_3"
                    required
                    value={invoiceInputValue.material_length_3}
                    onChange={handleInvoiceInputValue}
                    onKeyUp={Calculation}
                    onKeyDown={ClearAllState}
                    ref={changedMaterialLength}
                  />
                </div>
                <div className={count.length >= 4 ? "inputBox" : "d-none"}>
                  <input
                    type="text"
                    placeholder="طول القماش
"
                    name="material_length_4"
                    required
                    value={invoiceInputValue.material_length_4}
                    onChange={handleInvoiceInputValue}
                    onKeyUp={Calculation}
                    onKeyDown={ClearAllState}
                    ref={changedMaterialLength}
                  />
                </div>

                <div className="inputBox" style={{ marginTop: "4px" }}>
                  <input
                    type="text"
                    placeholder="الطول"
                    name="dress_length"
                    required
                    value={invoiceInputValue.dress_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="طول الكم"
                    name="sleeve_length"
                    required
                    value={invoiceInputValue.sleeve_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="طول المعصم"
                    name="cuff_length"
                    required
                    value={invoiceInputValue.cuff_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="طول الأكتاف"
                    name="shoulder_length"
                    required
                    value={invoiceInputValue.shoulder_length}
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
            <Suspense fallback={<Loader />}>
              <CustomizeImg />
            </Suspense>
          </ContextApiForGetImgData.Provider>
        </div>

        <div className="invoiceSection first d-flex flex-start gap-20">
          <div
            className="left shadow"
            style={{ flexBasis: "50%", padding: "20px 30px" }}
          >
            <div className="firstTop">
              <div className="inputBox">
                <h4>رقم المحل :</h4>
                <input
                  type="text"
                  name="shop_phone"
                  style={{ width: "100%", margin: "10px 0" }}
                  required
                  placeholder="Shop phone"
                  value={invoiceInputValue.shop_phone}
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div style={{ flexBasis: "50%" }}>
                <h4>ملاحظات :</h4>{" "}
                <textarea
                  disabled={invoiceInputValue.note.length == 550 ? "true" : ""}
                  name="note"
                  required
                  id=""
                  cols="30"
                  rows="10"
                  style={{ width: "100%", marginTop: "10px" }}
                  placeholder="الملاحظة: (يجب ان لا تزيد عن 550 حرف)"
                  value={invoiceInputValue.note}
                  onChange={handleInvoiceInputValue}
                ></textarea>
                <button
                  className="button clearNote d-flex"
                  onClick={() => {
                    setInvoiceInputValue({
                      ...invoiceInputValue,
                      note: invoiceInputValue.note.slice(0, -1),
                    });
                  }}
                >
                  <FaBackspace size={20} />
                </button>
              </div>
            </div>
          </div>
          <div className="right shadow" style={{ flexBasis: "50%" }}>
            <div className="bill d-flex gap-20">
              <h3 className="title">تفاصيل الطلب :</h3>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="العدد"
                  name="quantity"
                  required
                  value={invoiceInputValue.quantity}
                  onChange={handleInvoiceInputValue}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="المجموع"
                  name="total"
                  required
                  value={invoiceInputValue.total}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                  onKeyDown={ClearAllState}
                  ref={changedSalePrice}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="خصم (%)"
                  name="discount"
                  required
                  value={invoiceInputValue.discount}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
                <p
                  style={{ marginTop: "5px", color: "green", textAlign: "end" }}
                >
                  $ السعر بعد الخصم : {Number(calc.discountForCalc).toFixed(2)}
                </p>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="الضريبة (%)"
                  name="vat"
                  required
                  value={invoiceInputValue.vat}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
                <p
                  style={{ marginTop: "5px", color: "green", textAlign: "end" }}
                >
                  $ الضريبة : {Number(calc.vatForCalc).toFixed(2)}
                </p>
              </div>
              <div className="total d-flex">
                <h4>{Number(calc.payAbleForCalc).toFixed(2)} $</h4>
                <p> = المجموع بعد الضريبة</p>{" "}
              </div>

              <div className="inputBox" style={{ marginTop: "30px" }}>
                <input
                  type="text"
                  placeholder="الواصل"
                  name="advance"
                  required
                  value={invoiceInputValue.advance}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
              </div>
              <div className="total d-flex">
                <h4>{Number(calc.dueForCalc).toFixed(2)} $</h4>
                <p>= الباقي</p>
              </div>
            </div>
            <div style={{ textAlign: "center", margin: "30px 0 10px 0" }}>
              <button
                className="button"
                style={{ width: "30%" }}
                onClick={handleSubmit}
              >
                تأكيد
              </button>
            </div>
          </div>
        </div>
        <div className="alertNote d-flex gap-20" style={{ marginTop: "50px" }}>
          <p>
            <FiAlertTriangle size={25} />
          </p>
          <p>
            اذا غيرت الرقم المدخل في تفاصيل الطلب، الرجاء قم بتغييره على جميع
            الخيارات لتحصل على ارقام صحيحة.
          </p>
        </div>
      </div>

      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};

export default CreateInvoice;
export { ContextApiForGetImgData };
