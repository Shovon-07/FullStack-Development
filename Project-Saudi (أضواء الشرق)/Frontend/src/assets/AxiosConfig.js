import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    baseURL: "https://tailor.asikurrahman.com/backend/public/api",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}
