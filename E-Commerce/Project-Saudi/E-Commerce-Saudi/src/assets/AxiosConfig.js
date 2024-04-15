import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    baseURL: "http://shovon-portfolio.wuaze.com/public/api",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}
