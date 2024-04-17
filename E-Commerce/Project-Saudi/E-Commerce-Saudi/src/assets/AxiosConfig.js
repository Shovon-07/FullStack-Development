import axios from "axios";

export default function AxiosConfig() {
  const http = axios.create({
    baseURL: "http://project.preview.com.aljubairshovon.com/backend/public",
    headers: {
      "Content-type": "application/json",
    },
  });
  return {
    http,
  };
}
