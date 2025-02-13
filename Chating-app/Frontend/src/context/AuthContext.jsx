import { createContext, useMemo } from "react";

//===> Utilities
import { GetCookie } from "../assets/js/GetCookie";
import { Decryption } from "../assets/js/Encryption";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const secretKey = import.meta.env.VITE_SECRET_KEY;

  //===> Retrieve cookies
  const authToken = GetCookie("_Auth_AJS+c0mPanY-07@12#31_token") || "";
  const userRoleCookie = GetCookie("_Role_AJS+c0mPanY-07@12#31_user") || "";

  //===> Memoize decrypted values
  const userRole = useMemo(() => {
    return userRoleCookie
      ? Decryption(userRoleCookie, secretKey).split(",")
      : [];
  }, [userRoleCookie, secretKey]);

  const headers = useMemo(() => {
    return {
      authorization: `${Decryption(authToken, secretKey)}`,
    };
  }, [authToken, secretKey]);

  const uid = useMemo(() => {
    return GetCookie("_UID_AJS+c0mPanY-07@12#31_user") || null;
  }, [authToken, secretKey]);

  const uImg = useMemo(() => {
    return Decryption(
      GetCookie("_Uimg_AJS+c0mPanY-07@12#31_user") || "",
      secretKey || ""
    );
  }, [authToken, secretKey]);

  return (
    <AuthContext.Provider value={{ headers, uid, userRole, uImg }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
