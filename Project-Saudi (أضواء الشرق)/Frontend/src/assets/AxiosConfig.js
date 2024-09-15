import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    baseURL: "https://project.molla-properties.com/backend/public/api",
    // baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}

// http://localhost:8000/
