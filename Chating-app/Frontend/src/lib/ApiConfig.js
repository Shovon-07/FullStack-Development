import axios from "axios";

const ApiConfig = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // headers: {
  //   // API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  // },
});

export default ApiConfig;

export const imgUrl = import.meta.env.VITE_IMG_URL;
