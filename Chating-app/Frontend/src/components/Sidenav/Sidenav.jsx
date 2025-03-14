import React, { useEffect, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

//===> Css
import "./Sidenav.css";

//===> Utility
import { AuthContext } from "../../context/AuthContext";
import ApiConfig from "../../assets/js/ApiConfig";
import Logout from "../../assets/js/Logout";
import demoImg from "../../assets/images/profile.png";

const Sidenav = (props) => {
  const { toggleSideNav, setToggleSideNav, setLoader } = props;
  const { headers } = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      setLoader(true);
      await ApiConfig.get("/message/users", { headers })
        .then((res) => {
          setData(res.data.data);
          setLoader(false);
        })
        .catch((err) => {
          setLoader(false);
          toast.error(err.response.data.message);
        });
    };
    getUsers();
  }, []);

  const CloseSideNav = () => {
    setToggleSideNav(false);
  };

  return (
    <div
      className={`Sidenav flex flex-col ${toggleSideNav == true && "active"}`}
    >
      <div className="sideNavHead">
        <h1>S Chat</h1>
      </div>
      <ul className="users mt-5 px-3">
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <li key={item._id} onClick={CloseSideNav}>
                <NavLink to={item._id}>
                  <img
                    src={item.profilePic != "" ? item.profilePic : demoImg}
                    alt=""
                  />
                  <p>
                    {item.fullname}{" "}
                    <span className="text-[.8rem]">{item.email}</span>
                  </p>
                </NavLink>
              </li>
            );
          })}
      </ul>
      <div className="sideNavBottom">
        <button className="button w-40" onClick={() => Logout(headers)}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidenav;
