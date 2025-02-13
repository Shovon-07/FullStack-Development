import React, { useEffect, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

//===> Css
import "./Sidenav.css";

//===> Utility
import { AuthContext } from "../../context/AuthContext";
import ApiConfig from "../../assets/js/ApiConfig";
import demoImg from "../../assets/images/profile.png";

const Sidenav = (props) => {
  const { setLoader } = props;
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
    <div className="Sidenav flex flex-col">
      <div className="sideNavHead">
        <h1>S Chat</h1>
      </div>
      <ul className="users mt-5">
        {Array.isArray(data) &&
          data.map((item) => {
            return (
              <li key={item._id}>
                <NavLink to={item._id}>
                  <img src={demoImg} alt="" />
                  <p>{item.fullname}</p>
                </NavLink>
              </li>
            );
          })}
      </ul>
      <div className="sideNavBottom">
        <button className="button w-40">Logout</button>
      </div>
    </div>
  );
};

export default Sidenav;
