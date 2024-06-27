import { createContext, useContext, useState } from "react";

const AuthInfo = createContext({
  user: null,
  token: null,
  setUser: () => {},
  SetToken: () => {},
});

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState("Shovon");
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

  const SetToken = (token) => {
    setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <AuthInfo.Provider value={{ user, token, setUser, SetToken }}>
      {children}
    </AuthInfo.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthInfo);
