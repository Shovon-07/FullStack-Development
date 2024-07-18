import axios from "axios";

const AxiosClient = axios.create({
  baseURL: "https://molla-properties.com/backend/public/api",
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
