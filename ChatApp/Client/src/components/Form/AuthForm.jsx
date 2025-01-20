import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

//___ Css ___//
import "./AuthForm.css";

//___ Icons ___//
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

//___ Additional utilities ___//
import ApiConfig from "../../assets/js/ApiConfig";
import { Encryption, secretKey } from "../../assets/js/Encryption";

const AuthForm = (props) => {
  const navigate = useNavigate();
  const {
    setIsAuthenticated,
    setUserRole,
    title,
    inputFields,
    api,
    loginOrSingupUrl,
    loginOrSingup,
    setLoader,
  } = props;
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

    if (api == "/auth/login") {
      if (inputData.email == "") {
        toast.error("Please enter email address");
      } else if (inputData.password == "") {
        toast.error("Please enter password");
      } else {
        const payload = {
          email: inputData.email,
          password: inputData.password,
        };
        setLoader(true);
        ApiConfig.post(api, payload)
          .then((response) => {
            if (response.data.status == true) {
              toast.success(response.data.msg);

              setTimeout(() => {
                // Set user data
                setIsAuthenticated(response.data.data.password);
                setUserRole(response.data.data.role);

                // Set token in cookie
                document.cookie = `_Auth_AJS+c0mPanY-07@12#31_token=${Encryption(
                  response.data.data.password,
                  secretKey
                )}`;

                // Set user role in cookie
                document.cookie = `_Role_AJS+c0mPanY-07@12#31_user=${Encryption(
                  response.data.data.role,
                  secretKey
                )}`;

                // Set user id in cookie
                document.cookie = `_UID_AJS+c0mPanY-07@12#31_user=${response.data.data.id}`;

                // Set user name in cookie
                document.cookie = `_Unme_AJS+c0mPanY-07@12#31_user=${Encryption(
                  response.data.data.name,
                  secretKey
                )}`;

                // Set user image in cookie
                document.cookie = `_Uimg_AJS+c0mPanY-07@12#31_user=${Encryption(
                  "response.data.user.employee.image",
                  secretKey
                )}`;

                setLoader(false);
                navigate("/");
                console.log(response.data);
                // console.clear();
              }, 1000);
            } else {
              // console.clear();
              setLoader(false);
              toast.error(response.msg);
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
    <div className="form_box">
      <h3 className="title">{title}</h3>
      <form onSubmit={submit}>
        {inputFields.map((items, index) => (
          <div className="inputBox" key={index}>
            <input
              type={items.type}
              className={items.className}
              name={items.field}
              placeholder={items.placeholder}
              onChange={handleInputValues}
              autoComplete={items.autoCompleteAttr}
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
                className={inputTypes == false ? "d-none" : "c-pointer"}
              />
              <FaEyeSlash
                size={20}
                className={inputTypes == true ? "d-none" : "c-pointer"}
              />
            </div>
          </div>
        ))}
        <div className="next_button">
          <button className="button">next</button>
        </div>
      </form>

      <div className="d-flex form_bottom">
        <p>
          {loginOrSingupUrl == "/signup"
            ? "Don't have an account? "
            : "Already have an account? "}{" "}
          <Link to={loginOrSingupUrl}>{loginOrSingup}</Link>
        </p>
        {loginOrSingupUrl == "/signup" ? (
          <p>
            <Link href="#">Forgot password</Link>
          </p>
        ) : (
          ""
        )}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
