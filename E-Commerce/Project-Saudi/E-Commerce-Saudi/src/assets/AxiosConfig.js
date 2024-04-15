import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    baseURL: "https://shovon-portfolio.wuaze.com/public",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}

// http://shovon-portfolio.wuaze.com/Backend/public/api
