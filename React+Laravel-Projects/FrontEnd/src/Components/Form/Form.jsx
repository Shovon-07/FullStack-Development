import React from "react";

//___ Css ___//
import "./Form.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Form = () => {
  return (
    <div className="Form">
      <h3 className="formTitle">Login</h3>
      <div className="inputBox">
        <input type="text" className="input" placeholder="Enter your name" />
      </div>
      <div className="inputBox">
        <input
          type="password"
          className="input"
          placeholder="Enter your password"
        />
        <div className="showHide">
          <FaEye size={20} className="show c_pointer" />
          <FaEyeSlash size={20} className="hide c_pointer" />
        </div>
      </div>
      <div className="btnBox">
        <button className="submitBtn c_pointer">next</button>
      </div>

      <div className="formBottom">
        <div className="d-flex gap-20">
          <a href="">Sign up</a>
          <span>|</span>
          <a href="">Forgot password</a>
        </div>
      </div>
    </div>
  );
};

export default Form;
