import { Link } from "react-router-dom";
import AuthUser from "../../assets/Js/AuthUser";

//___ Css ___//
import "./Form.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";

const Form = (props) => {
  const { http } = AuthUser();
  const { title, inputFields, url, loginOrSingupUrl, loginOrSingup } = props;

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
    // console.log(inputData.email + " - " + inputData.password);
    http
      .post("/login", { email: inputData.email, password: inputData.password })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="Form">
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

      <div className={`${loginOrSingupUrl == "" ? "d-none" : "formBottom"}`}>
        <div className="d-flex gap-20">
          <Link to={loginOrSingupUrl}>{loginOrSingup}</Link>
          <span>|</span>
          <Link to="/forgot-password">Forgot password</Link>
        </div>
      </div>
    </div>
  );
};

export default Form;