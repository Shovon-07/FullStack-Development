import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://backend.molla-properties.com/public/api",
  headers: {
    "Content-Type": "application/json",
    API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  },
});

export default AxiosClient;
