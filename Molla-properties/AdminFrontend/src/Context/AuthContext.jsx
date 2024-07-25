import { createContext, useContext, useState } from "react";

const AuthInfo = createContext({
  user: "",
  token: null,
  setUser: () => {},
  SetToken: () => {},
});

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("USER"));
  const [token, setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

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
    <AuthInfo.Provider value={{ user, token, setUser, SetToken }}>
      {children}
    </AuthInfo.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthInfo);
