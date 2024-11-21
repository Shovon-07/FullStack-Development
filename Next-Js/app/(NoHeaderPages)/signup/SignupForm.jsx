"use client";
import Link from "next/link";
import { useState } from "react";

//___ Css ___//
import FormStyle from "@/app/assets/css/form.module.css";

const SignupForm = () => {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInputValues = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const Signup = async (evt) => {
    evt.preventDefault();
    console.log(`${inputData.email} \n ${inputData.password}`);
    redirect("/");
  };

  return (
    <div className={FormStyle.form_box}>
      <h3 className={FormStyle.title}>Sign Up</h3>
      <form>
        <div className={FormStyle.input_box}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleInputValues}
          />
        </div>
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
          <button className="button" onClick={Signup}>
            next
          </button>
        </div>
      </form>

      <div className={`d-flex ${FormStyle.form_bottom}`}>
        <p>
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
