import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = tokenString;
    // const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const userDetails = userString;
    // const userDetails = JSON.parse(userString);
    return userDetails;
  };

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());

  const saveToken = (token, user) => {
    // localStorage.setItem("token", JSON.stringify(token));
    // localStorage.setItem("user", JSON.stringify(user));

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", user);

    setToken(token);
    setUser(user);
    if (token === "admin@mail.com") {
      navigate("/dashboard/home");
    } else if (token === "worker@mail.com") {
      navigate("/dashboard/sell");
    }
  };

  const http = axios.create({
    baseURL: "https://project.preview.com.aljubairshovon.com/backend/public",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    http,
  };
}
