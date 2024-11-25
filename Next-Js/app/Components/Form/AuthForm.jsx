"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

//___ Css ___//
import FormStyle from "./form.module.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ Additional utilities ___//
import ApiConfig from "@/app/assets/js/ApiConfig";

const AuthForm = (props) => {
  const { title, inputFields, api, loginOrSingupUrl, loginOrSingup } = props;

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

    if (api == "/login") {
      if (inputData.email == "") {
        toast.error("Please enter email address.");
      } else if (inputData.password == "") {
        toast.error("Please enter password.");
      } else {
        const payload = {
          email: inputData.email,
          password: inputData.password,
        };
        toast.success("Login successful");

        setTimeout(() => {
          console.log(payload);
          redirect("/");
        }, 1000);

        // ApiConfig.post(api, payload).then((res) => {
        //   //   console.log(res);
        //   if (res.data.status == true) {
        //     setTimeout(() => {
        //       redirect("/");
        //     }, 1000);
        //   } else {
        //     toast.error(res.data.message);
        //   }
        // });
      }
    } else if (api == "/signup") {
      if (inputData.name == "") {
        toast.error("Please enter your name.");
      } else if (inputData.email == "") {
        toast.error("Please enter email address.");
      } else if (inputData.password == "") {
        toast.error("Please enter password.");
      } else if (inputData.password != inputData.confirmPassword) {
        toast.error("Password not matched.");
      } else {
        const payload = {
          name: inputData.name,
          email: inputData.email,
          password: inputData.password,
        };
        toast.success("Account created");

        setTimeout(() => {
          console.log(payload);
          redirect("/login");
        }, 1000);

        // ApiConfig.post(api, payload).then((res) => {
        //   if (res.data.status == true) {
        //     toast.success(res.data.message);
        //     setTimeout(() => {
        //       redirect("/login");
        //     }, 1000);
        //   } else {
        //     toast.error(res.data.message.errorInfo[2]);
        //   }
        // });
      }
    }
  };

  return (
    <div className={FormStyle.form_box}>
      <h3 className={FormStyle.title}>{title}</h3>
      <form onSubmit={submit}>
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
          <button className="button">next</button>
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

export default AuthForm;
