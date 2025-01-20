import axios from "axios";
const ApiConfig = axios.create({
  // baseURL: "https://project.molla-properties.com/backend/public/api",
  baseURL: "http://localhost:3001/api",
  // headers: {
  //   "Content-type": "multipart/form-data",
  // },
});

export default ApiConfig;

// export const imgUrl = `https://project.molla-properties.com/backend/storage/app/public/`;

export const imgUrl = "http://localhost:8000/storage/";
