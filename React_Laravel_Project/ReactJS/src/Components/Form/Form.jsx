import { Link, useNavigate, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

//___ Css ___//
import "./Form.css";
import "react-toastify/dist/ReactToastify.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

//___ Data ___//
import { userData } from "../../assets/Js/Data";

const Form = (props) => {
  const {
    title,
    inputFields,
    api,
    loginOrSingupUrl,
    loginOrSingup,
    setAuthMsg,
  } = props;

  const [inputTypes, setInputTypes] = useState(false);
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  });
  const handleInputValues = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    if (api == "/sign-in") {
      if (inputData.email == "") {
        toast.error("Please enter email address.");
      } else if (inputData.password == "") {
        toast.error("Please enter password.");
      } else {
        const data = {
          email: inputData.email,
          password: inputData.password,
        };
        console.log(data);
      }
    } else if (api == "/sign-up") {
      if (inputData.name == "") {
        toast.error("Please enter your name.");
      } else if (inputData.email == "") {
        toast.error("Please enter email address.");
      } else if (inputData.password == "") {
        toast.error("Please enter password.");
      } else if (inputData.password != inputData.confirmPassword) {
        toast.error("Password not matched.");
      } else {
        const data = {
          name: inputData.name,
          email: inputData.email,
          password: inputData.password,
        };
        console.log(data);
      }
    } else if (api == "/send-otp") {
      if (inputData.email == "") {
        toast.error("Please enter email address.");
      } else {
        const data = {
          email: inputData.email,
        };
        console.log(data);
      }
    } else if (api == "/submit-otp") {
      if (inputData.otp == "") {
        toast.error("Please enter valid otp.");
      } else {
        const data = {
          otp: inputData.otp,
        };
        console.log(data);
      }
    }
  };

  return (
    <div className="Form">
      <div className="formBox">
        <div className="card">
          <h3 className="formTitle">{title}</h3>

          <form onSubmit={submit}>
            {inputFields.map((items, index) => (
              <div className="inputBox" key={index}>
                <input
                  type={items.type}
                  className="input"
                  name={items.field}
                  placeholder={items.placeholder}
                  onChange={handleInputValues}
                />
                <div
                  className={items.field != "password" ? "d-none" : "showHide"}
                  onClick={() => {
                    if (inputTypes == false) {
                      setInputTypes(true);
                      items.type = "text";
                    } else if (inputTypes == true) {
                      setInputTypes(false);
                      items.type = "password";
                    }
                  }}
                >
                  <FaEye
                    size={20}
                    className={inputTypes == false ? "d-none" : "c_pointer"}
                  />
                  <FaEyeSlash
                    size={20}
                    className={inputTypes == true ? "d-none" : "c_pointer"}
                  />
                </div>
              </div>
            ))}
            <div className="btnBox">
              <button type="submit" className="submitBtn c_pointer">
                next
              </button>
            </div>
          </form>

          <div
            className={`${loginOrSingupUrl == "" ? "d-none" : "formBottom"}`}
          >
            <div className="d-flex gap-20">
              <Link to={loginOrSingupUrl}>{loginOrSingup}</Link>
              <span>|</span>
              <Link to="/forgot-password">Forgot password</Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Form;
