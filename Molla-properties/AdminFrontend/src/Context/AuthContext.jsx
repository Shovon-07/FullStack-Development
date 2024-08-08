import { createContext, useContext, useState } from "react";

const AuthInfo = createContext({
  uid: "",
  user: "",
  token: null,
  uimg: "",
  setUser: () => {},
  setUid: () => {},
  setUimg: () => {},
  SetToken: () => {},
  loader: "",
  setLoader: () => {},
  reloadData: "",
  setReloadData: () => {},
});

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("USER"));
  const [uid, setUid] = useState(localStorage.getItem("UID"));
  const [uimg, setUimg] = useState(localStorage.getItem("UIMG"));
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const [loader, setLoader] = useState(false);
  const [reloadData, setReloadData] = useState(false);

  const SetToken = (uid, user, uimg, token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
      localStorage.setItem("USER", user);
      localStorage.setItem("UID", uid);
      localStorage.setItem("UIMG", uimg);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("USER");
      localStorage.removeItem("UID");
      localStorage.removeItem("UIMG");
    }
  };

  return (
    <AuthInfo.Provider
      value={{
        uid,
        uimg,
        user,
        token,
        setUid,
        setUimg,
        setUser,
        SetToken,

        loader,
        setLoader,

        reloadData,
        setReloadData,
      }}
    >
      {children}
    </AuthInfo.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthInfo);
