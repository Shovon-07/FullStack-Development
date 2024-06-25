import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    // baseURL: "https://project.preview.com.aljubairshovon.com/backend/public",
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}

// http://localhost:8000/
