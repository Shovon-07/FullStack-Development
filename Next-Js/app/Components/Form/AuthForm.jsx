"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

//___ Css ___//
import FormStyle from "./authForm.module.css";

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
        toast.error("Please enter email address");
      } else if (inputData.password == "") {
        toast.error("Please enter password");
      } else if (inputData.password.length < 8) {
        toast.error("Password must be 8 characters or more");
      } else {
        const payload = {
          email: inputData.email,
          password: inputData.password,
        };
        ApiConfig.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              toast.success(response.data.message);
              // Set auth info in cookie
              document.cookie = `AuthToken=${response.data.token}`;
              document.cookie = `UserRole=${response.data.data.employee.designation.name}`;
              document.cookie = `UID=${response.data.id}`;
              // Redirecting
              setTimeout(() => {
                console.clear();
                redirect("/");
              }, 1000);
            } else {
              console.clear();
              toast.error(response.data.message);
            }
          })
          .catch((err) => {
            console.log(err);
          });
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
              className={items.className}
              name={items.field}
              placeholder={items.placeholder}
              onChange={handleInputValues}
              autoComplete={items.autoCompleteAttr}
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

/***
 * Email : shovon@mail.com
 * Pass : 123456789
 * Encrypted : $2y$12$sClCjNbLjgksnzIW672QhO.kZjgoarTFnG2h8kKcU9eIrSGL4uh5G
 *
 ****/
