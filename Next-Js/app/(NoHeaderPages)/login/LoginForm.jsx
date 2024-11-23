"use client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

//___ Css ___//
import FormStyle from "@/app/assets/css/form.module.css";

const LoginForm = () => {
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
      <h3 className={FormStyle.title}>Sign In</h3>
      <form>
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
      </form>
      <div className={`d-flex ${FormStyle.form_bottom}`}>
        <p>
          Don't have an account? <Link href="/signup">Signup</Link>
        </p>{" "}
        {/* <span>|</span> */}
        <p>
          <Link href="#">Forgot password</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
