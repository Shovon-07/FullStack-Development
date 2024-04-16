import { React, useState } from "react";
import { Link } from "react-router-dom";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

//___ CSS ___//
import "./Form.scss";

const Form = (props) => {
  // Props
  const {
    mainTitle,
    mainRightTitle,
    title,
    url,
    inputFields,
    loginOrSingupUrl,
    loginOrSingup,
    resetPass,
  } = props;

  // States
  const [showHide, setShowHide] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="FormContainer container d-flex">
      <div className="formCard">
        <div className="titleBar d-flex">
          <h3>{mainTitle}</h3>
          <p>
            {mainRightTitle} <Link to={loginOrSingupUrl}>{loginOrSingup}</Link>
          </p>
        </div>
        <form className="d-flex gap-20" onSubmit={handleForm}>
          <div className="left">
            {inputFields.map((items, index) => {
              return (
                <div className={items.className} key={index}>
                  <input
                    type={items.type}
                    name={items.field}
                    placeholder={items.placeholder}
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
                    <RiEyeCloseLine
                      size={20}
                      className={showHide == true ? "d-none" : ""}
                    />
                  </div>
                </div>
              );
            })}
            <div className="resetPass">
              <Link>{resetPass}</Link>
            </div>
          </div>
          <div className="right">
            {/* <NavLink to={url} className="button">
              <input type="submit" value={title} />
            </NavLink> */}
            <button type="submit" className="button d-flex login">
              {title}
            </button>
            {title === "Sign up" ? (
              <p className="privaciyPolicy">
                <input type="checkbox" /> By clicking “SIGN UP”, I agree to
                Company's <Link to="/terms">Terms of Use</Link> and{" "}
                <Link to="/policy">Privacy Policy</Link>
              </p>
            ) : (
              ""
            )}
            <p style={{ fontSize: "12px", margin: "10px 0" }}>
              Or, {title} with
            </p>
            <Link to="" className="button d-flex facebook">
              <FaFacebookF size={20} className="icon" />
              Facebook
            </Link>
            <Link
              to=""
              className="button d-flex google"
              style={{ marginTop: "20px" }}
            >
              <FaGooglePlusG size={30} className="icon" />
              Google
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
