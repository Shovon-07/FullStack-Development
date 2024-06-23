import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AuthUser from "../../assets/Js/AuthUser";

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
  const { http } = AuthUser();
  const navigate = useNavigate();
  const {
    title,
    inputFields,
    url,
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

  const submit = () => {
    userData.map((items, i) => {
      if (items.email === inputData.email) {
        toast.success("Login successfull");
        setInterval(() => {
          localStorage.setItem("role", items.role);
          navigate("/dashboard");
        }, 1000);
      } else {
        toast.error("Invalid user!");
      }
    });
  };

  return (
    <div className="Form">
      <div className="formBox">
        <div className="card">
          <h3 className="formTitle">{title}</h3>

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
            <button className="submitBtn c_pointer" onClick={submit}>
              next
            </button>
          </div>

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
