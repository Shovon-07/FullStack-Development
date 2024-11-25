import axios from "axios";

const ApiConfig = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com",
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "multipart/form-data",
    API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  },
});

// ApiConfig.interceptors.request.use((config) => {
//   const token = localStorage.getItem("ACCESS_TOKEN");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// ApiConfig.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;
//     if (response.status == false) {
//       localStorage.removeItem("ACCESS_TOKEN");
//     }
//   }
// );

export default ApiConfig;
