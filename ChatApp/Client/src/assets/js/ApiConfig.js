import axios from "axios";
// import { GetCookie } from "./GetCookie";
// import { Decryption, secretKey } from "./Encryption";

const ApiConfig = axios.create({
  // baseURL: "https://project.molla-properties.com/backend/public/api",
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-type": "multipart/form-data",
    // Authorization: `Bearer ${
    //   Decryption(
    //     GetCookie("_Auth_AJS+c0mPanY-07@12#31_token") || "",
    //     secretKey
    //   ) || ""
    // }`,
    // API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  },
});

export default ApiConfig;

// export const imgUrl = `https://project.molla-properties.com/backend/storage/app/public/`;

export const imgUrl = "http://localhost:8000/storage/";
