import { createContext, useContext, useState } from "react";

const AuthInfo = createContext({
  user: "",
  token: null,
  setUser: () => {},
  SetToken: () => {},
  loader: "",
  setLoader: () => {},
});

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("USER"));
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [loader, setLoader] = useState(false);

  const SetToken = (user, token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
      localStorage.setItem("USER", user);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
    }
  };

  return (
    <AuthInfo.Provider
      value={{ user, token, setUser, SetToken, loader, setLoader }}
    >
      {children}
    </AuthInfo.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthInfo);
