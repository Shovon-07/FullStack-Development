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
    chest_length: "",
    neck_length: "",
    hand_length: "",
    dress_length: "",
    sleeve_length: "",
    cuff_length: "",
    shoulder_length: "",

    // Order summery
    material_length: "",
    sale_price: "",
    total: "",
    discount: "",
    vat: "",
    payable: "",
    advance: "",
    due: "",

    note: "",
  });

  const handleInvoiceInputValue = (e) => {
    setInvoiceInputValue({
      ...invoiceInputValue,
      [e.target.name]: e.target.value,
    });
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
    } else if (invoiceInputValue.material_id == "") {
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
    } else if (invoiceInputValue.total == "") {
      toast.error("Please enter total price");
    } else if (invoiceInputValue.discount == "") {
      toast.error("Please enter discount");
    } else if (invoiceInputValue.vat == "") {
      toast.error("Please enter vat");
    } else if (invoiceInputValue.advance == "") {
      toast.error("Please enter recived amount");
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
          chest_length: invoiceInputValue.chest_length,
          sleeve_length: invoiceInputValue.sleeve_length,
          neck_length: invoiceInputValue.neck_length,
          cuff_length: invoiceInputValue.cuff_length,
          hand_length: invoiceInputValue.hand_length,
          shoulder_length: invoiceInputValue.shoulder_length,
          dress_length: invoiceInputValue.dress_length,

          // Order summery
          material_length: Number(invoiceInputValue.material_length).toFixed(2),
          sale_price: "0",
          total: Number(invoiceInputValue.total).toFixed(2),
          discount: Number(calc.discountAmountForCalc).toFixed(2),
          vat: Number(calc.vatForCalc).toFixed(2),
          payable: Number(calc.payAbleForCalc).toFixed(2),
          advance: Number(invoiceInputValue.advance).toFixed(2),
          due: Number(calc.dueForCalc).toFixed(2),

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
              chest_length: "",
              neck_length: "",
              hand_length: "",
              dress_length: "",
              sleeve_length: "",
              cuff_length: "",
              shoulder_length: "",

              // Order summery
              material_length: "",
              sale_price: "",
              total: "",
              discount: "",
              vat: "",
              payable: "",
              advance: "",
              due: "",

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
                <h3 className="title">Invoice To #</h3>
                <div className="inputBox">
                  <label htmlFor="">Name :</label>
                  <input
                    type="text"
                    name="customer_name"
                    required
                    placeholder="Customer name"
                    value={invoiceInputValue.customer_name}
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
                    value={invoiceInputValue.customer_phone}
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
                  <h4>Date:</h4>
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
                  <h4>Deadline:</h4>
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
          <div className="measurement">
            <h2 className="title">Measurements</h2>
            <div className="measurmentSelection d-flex flex-start">
              <div className="left d-flex gap-20">
                <select name="material_id" onChange={handleInvoiceInputValue}>
                  <option value="">Select Material</option>
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
                    placeholder="Chest length"
                    name="chest_length"
                    required
                    value={invoiceInputValue.chest_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Neck length"
                    name="neck_length"
                    required
                    value={invoiceInputValue.neck_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Hand length"
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
                    placeholder="Dress length"
                    name="dress_length"
                    required
                    value={invoiceInputValue.dress_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Sleeve length"
                    name="sleeve_length"
                    required
                    value={invoiceInputValue.sleeve_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Cuff length"
                    name="cuff_length"
                    required
                    value={invoiceInputValue.cuff_length}
                    onChange={handleInvoiceInputValue}
                  />
                </div>
                <div className="inputBox">
                  <input
                    type="text"
                    placeholder="Shoulder"
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
              <div style={{ flexBasis: "50%" }}>
                <h4>Note:</h4>{" "}
                <textarea
                  name="note"
                  required
                  id=""
                  cols="30"
                  rows="10"
                  style={{ width: "100%", marginTop: "10px" }}
                  placeholder="Invoice Note (Optional)"
                  value={invoiceInputValue.note}
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
                  value={invoiceInputValue.material_length}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                  onKeyDown={ClearAllState}
                  ref={changedMaterialLength}
                />
              </div>
              {/* <div className="inputBox">
                <input
                  type="text"
                  placeholder="Material price"
                  name="sale_price"
                  required
                  value={invoiceInputValue.sale_price}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                  onKeyDown={ClearAllState}
                  ref={changedSalePrice}
                />
              </div> */}
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Total"
                  name="total"
                  required
                  value={invoiceInputValue.total}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                  onKeyDown={ClearAllState}
                  ref={changedSalePrice}
                />
              </div>
              {/* <div className="total d-flex">
                <p>Total =</p>
                <p>{Number(calc.total).toFixed(2)} $</p>
              </div> */}
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Discount (%)"
                  name="discount"
                  required
                  value={invoiceInputValue.discount}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
                <p style={{ marginTop: "5px", color: "green" }}>
                  Price after discount :{" "}
                  {Number(calc.discountForCalc).toFixed(2)} $
                </p>
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Vat (%)"
                  name="vat"
                  required
                  value={invoiceInputValue.vat}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
                <p style={{ marginTop: "5px", color: "green" }}>
                  Tax amount : {Number(calc.vatForCalc).toFixed(2)} $
                </p>
              </div>
              <div className="total d-flex">
                <p>Payable =</p>{" "}
                <h4>{Number(calc.payAbleForCalc).toFixed(2)} $</h4>
              </div>

              <div className="inputBox" style={{ marginTop: "30px" }}>
                <input
                  type="text"
                  placeholder="Received amount"
                  name="advance"
                  required
                  value={invoiceInputValue.advance}
                  onChange={handleInvoiceInputValue}
                  onKeyUp={Calculation}
                />
              </div>
              <div className="total d-flex">
                <p>Due =</p> <h4>{Number(calc.dueForCalc).toFixed(2)} $</h4>
              </div>
              {/* <div className="inputBox">
                <input
                  type="text"
                  placeholder="Due amount"
                  disabled
                  value={"Due = " + Number(calc.dueForCalc).toFixed(2)}
                />
              </div> */}
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
        <div className="alertNote d-flex gap-20" style={{ marginTop: "50px" }}>
          <p>
            <FiAlertTriangle size={25} />
          </p>
          <p>
            If you change the value of any input fields in the order summary
            section, please change the values ​​of the all input fields to get
            accurate results.
          </p>
        </div>
      </div>

      <ToastContainer position="top-center" theme="colored" />
    </>
  );
};

export default CreateInvoice;
export { ContextApiForGetImgData };