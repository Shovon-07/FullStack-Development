import { createContext } from "react";
const AuthContext = createContext();
import { uInfo } from "@/assets/js/data";

const AuthContextProvider = ({ children }) => {
  const contextVal = {
    uInfo,
    txt: `${uInfo.uName} will be a good men but he can't`,
  };
  return (
    <AuthContext.Provider value={contextVal}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
