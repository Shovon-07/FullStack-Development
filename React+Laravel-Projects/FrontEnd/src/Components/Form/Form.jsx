import { Link } from "react-router-dom";

//___ Css ___//
import "./Form.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Form = (props) => {
  const { title, inputFields, url, loginOrSingupUrl, loginOrSingup } = props;

  return (
    <div className="Form">
      <h3 className="formTitle">{title}</h3>

      {inputFields.map((items, index) => (
        <div className="inputBox" key={index}>
          <input
            type={items.type}
            className="input"
            placeholder={items.placeholder}
          />
          <div className={items.type != "password" ? "d-none" : "showHide"}>
            <FaEye size={20} className="show c_pointer" />
            <FaEyeSlash size={20} className="hide c_pointer" />
          </div>
        </div>
      ))}
      <div className="btnBox">
        <button className="submitBtn c_pointer">next</button>
      </div>

      <div
        className={`${title == "Forgot password" ? "d-none" : "formBottom"}`}
      >
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
