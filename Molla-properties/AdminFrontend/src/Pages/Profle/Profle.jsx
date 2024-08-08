import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UseAuthContext } from "../../Context/AuthContext";

//___ Css ___//
import "./Profle.css";
import "react-toastify/dist/ReactToastify.css";

//___ Additional utilitis ___//
import AxiosClient from "../../assets/Js/AxiosClient";

const Profle = () => {
  const { setLoader, setReloadData } = UseAuthContext();

  const [inputVal, setInputVal] = useState({
    userName: "",
    prevPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [userImg, setUserImg] = useState();

  const handleInput = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  };

  //___ User information start ___//
  const SubmitUserInfo = async (e) => {
    e.preventDefault();

    if (inputVal.userName == "" && userImg == null) {
      toast.error("You don't edit anything");
    } else {
      const payload = new FormData();
      payload.append("id", localStorage.getItem("UID"));
      payload.append("user_name", inputVal.userName);
      payload.append("user_img", userImg);

      setLoader(true);
      await AxiosClient.post("/update-user-info", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setReloadData((prev) => !prev);
            setLoader(false);
          } else {
            setLoader(false);
            console.log(res.data.msg);
          }
        })
        .catch((e) => {
          console.log(`Error = ${e}`);
          setLoader(false);
        });
    }
  };
  //___ User information end ___//

  //___ Password start ___//
  const SubmitPassword = async (e) => {
    e.preventDefault();

    if (inputVal.prevPassword == "") {
      toast.error("Please enter old password");
    } else if (inputVal.newPassword == "") {
      toast.error("Please enter new password");
    } else if (inputVal.newPassword != inputVal.confirmPassword) {
      toast.error("Please confirm password");
    } else {
      const payload = new FormData();
      payload.append("id", localStorage.getItem("UID"));
      payload.append("prev_pass", inputVal.prevPassword);
      payload.append("new_pass", inputVal.newPassword);

      setLoader(true);
      await AxiosClient.post("/update-password", payload)
        .then((res) => {
          if (res.data.status == true) {
            toast.success(res.data.msg);
            setInputVal({
              prevPassword: "",
              newPassword: "",
              confirmPassword: "",
            });
            setReloadData((prev) => !prev);
            setLoader(false);
          } else {
            setLoader(false);
            toast.error(res.data.msg);
            console.log(res.data.msg);
          }
        })
        .catch((e) => {
          console.log(`Error = ${e}`);
          setLoader(false);
        });
    }
  };
  //___ Password end ___//

  return (
    <div className="Profle">
      <h3 className="pageTitle">Profle</h3>

      <div className="card">
        <h2 className="cardTitle">User information</h2>
        <form encType="multipart/form-data" onSubmit={SubmitUserInfo}>
          <input
            type="text"
            name="userName"
            placeholder="Enter user name"
            value={inputVal.userName}
            onChange={handleInput}
          />
          <input
            type="file"
            name="bannerImg"
            placeholder="Enter banner image"
            onChange={(e) => {
              setUserImg(e.target.files[0]);
            }}
          />
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>

      <div className="card">
        <h2 className="cardTitle">Change password</h2>
        <form onSubmit={SubmitPassword}>
          <input
            type="password"
            name="prevPassword"
            placeholder="Enter old password"
            value={inputVal.prevPassword}
            onChange={handleInput}
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={inputVal.newPassword}
            onChange={handleInput}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={inputVal.confirmPassword}
            onChange={handleInput}
          />
          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Profle;
