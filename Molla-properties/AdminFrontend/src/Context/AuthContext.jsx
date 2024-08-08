import { createContext, useContext, useState } from "react";

const AuthInfo = createContext({
  uid: "",
  user: "",
  token: null,
  setUser: () => {},
  setUid: () => {},
  SetToken: () => {},
  loader: "",
  setLoader: () => {},
});

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("USER"));
  const [uid, setUid] = useState(localStorage.getItem("UID"));
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const [loader, setLoader] = useState(false);

  const SetToken = (uid, user, token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
      localStorage.setItem("USER", user);
      localStorage.setItem("UID", uid);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
      localStorage.removeItem("UID");
    }
  };

  return (
    <AuthInfo.Provider
      value={{ uid, user, token, setUid, setUser, SetToken, loader, setLoader }}
    >
      {children}
    </AuthInfo.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthInfo);
