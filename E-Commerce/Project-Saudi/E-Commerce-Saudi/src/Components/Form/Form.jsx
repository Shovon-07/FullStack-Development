import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ CSS ___//
import "./Form.css";

//___ Additional utility ___//
import AxiosConfig from "../../assets/AxiosConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = (props) => {
  const navigate = useNavigate();
  const {
    title,
    url,
    inputFields,
    loginOrSingupUrl,
    loginOrSingup,
    auth,
    setAuth,
  } = props;

  // States
  const [showHide, setShowHide] = useState(false);
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
  });

  const handleFormInput = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleForm = (e) => {
    e.preventDefault();

    let u_email = "shovon@gmail.com";
    let u_pass = "sho";

    if (formInput.email === u_email && formInput.password === u_pass) {
      toast.success("Login successful");
      setInterval(() => {
        navigate("/home");
      }, 1000);
    } else {
      toast.error("User not found !");
    }
    // console.log(formInput.email);
  };

  return (
    <div className="FormContainer d-flex">
      <form className="d-flex" onSubmit={handleForm}>
        <h3>{title}</h3>
        {inputFields.map((items, index) => {
          return (
            <div className={items.className} key={index}>
              <input
                type={items.type}
                name={items.field}
                value={formInput.name}
                placeholder={items.placeholder}
                onChange={handleFormInput}
              />

              <div
                className={`showHide d-flex ${
                  items.field !== "password" ? "d-none" : ""
                }`}
                onClick={() => {
                  if (showHide == false) {
                    setShowHide(true);
                    items.type = "text";
                  } else if (showHide == true) {
                    setShowHide(false);
                    items.type = "password";
                  }
                }}
              >
                <FaEye
                  size={20}
                  className={showHide == false ? "d-none" : ""}
                />
                <FaEyeSlash
                  size={20}
                  className={showHide == true ? "d-none" : ""}
                />
              </div>
            </div>
          );
        })}
        <div>
          {/* <NavLink to={url} className="button">
            <button type="submit">next</button>
          </NavLink> */}
          <button type="submit" className="button">
            next
          </button>
        </div>
        {/* <div className="form-bottom d-flex">
          <NavLink to={loginOrSingupUrl}>{loginOrSingup}</NavLink>
          <span>|</span>
          <NavLink to="forgot-password">Forgot password</NavLink>
        </div> */}
      </form>

      <ToastContainer position="top-center" theme="colored" />
    </div>
  );
};

export default Form;
