import axios from "axios";
// import { GetCookie } from "./GetCookie";
// import { Decryption, secretKey } from "./Encryption";

const ApiConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // headers: {
  //   // "Content-type": "multipart/form-data",
  //   // Authorization: `Bearer ${
  //   //   Decryption(
  //   //     GetCookie("_Auth_AJS+c0mPanY-07@12#31_token") || "",
  //   //     secretKey
  //   //   ) || ""
  //   // }`,
  //   // API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  // },
});

export default ApiConfig;

export const imgUrl = import.meta.env.VITE_IMG_URL;

/***
 * For use backend from localhost
 * > https://radient-agrovet.netlify.app
 ****/
