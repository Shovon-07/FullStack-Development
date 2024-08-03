import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://backend.molla-properties.com/public/api/admin",
  // baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "application/json",
    API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  },
});

AxiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("ACCESS_TOKEN");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

AxiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status == false) {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  }
);

export default AxiosClient;
