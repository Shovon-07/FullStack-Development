import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    // baseURL: "https://project.preview.com.aljubairshovon.com/backend/public/api",
    baseURL: "http://127.0.0.1:8000/api",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}

// http://localhost:8000/
