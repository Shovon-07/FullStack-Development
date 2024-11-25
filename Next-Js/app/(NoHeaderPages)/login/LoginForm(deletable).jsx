"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

//___ Css ___//
import FormStyle from "@/app/assets/css/form.module.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginForm = (props) => {
  const { title, inputFields, api, loginOrSingupUrl, loginOrSingup } = props;

  const [inputTypes, setInputTypes] = useState(false);
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });
  const handleInputValues = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const Login = async (evt) => {
    evt.preventDefault();
    console.log(`${inputData.email} \n ${inputData.password}`);
    toast.success("Login successful");

    setTimeout(() => {
      redirect("/");
    }, 1000);
  };

  return (
    <div className={FormStyle.form_box}>
      <h3 className={FormStyle.title}>{title}</h3>
      {/* <form>
        <div className={FormStyle.input_box}>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            onChange={handleInputValues}
          />
        </div>
        <div className={FormStyle.input_box}>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInputValues}
          />
        </div>
        <div className={FormStyle.next_button}>
          <button className="button" onClick={Login}>
            next
          </button>
        </div>
      </form> */}

      <form>
        {inputFields.map((items, index) => (
          <div className={FormStyle.inputBox} key={index}>
            <input
              type={items.type}
              className="input"
              name={items.field}
              placeholder={items.placeholder}
              onChange={handleInputValues}
            />
            <div
              className={
                items.field != "password" ? "d-none" : FormStyle.showHide
              }
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
                className={inputTypes == false ? "d-none" : "c-pointer"}
              />
              <FaEyeSlash
                size={20}
                className={inputTypes == true ? "d-none" : "c-pointer"}
              />
            </div>
          </div>
        ))}
        <div className={FormStyle.next_button}>
          <button className="button" onClick={Login}>
            next
          </button>
        </div>
      </form>

      <div className={`d-flex ${FormStyle.form_bottom}`}>
        <p>
          {loginOrSingupUrl == "/signup"
            ? "Don't have an account? "
            : "Already have an account? "}{" "}
          <Link href={loginOrSingupUrl}>{loginOrSingup}</Link>
        </p>
        {loginOrSingupUrl == "/signup" ? (
          <p>
            <Link href="#">Forgot password</Link>
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginForm;
