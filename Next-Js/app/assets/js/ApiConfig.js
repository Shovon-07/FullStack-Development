import axios from "axios";

const ApiConfig = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    "Content-type": "multipart/form-data",
    // Authorization: `Bearer ${AuthToken}`,
    // API_KEY: "83b6349651735fb8b3c6b20b1bc882ba",
  },
});

// ApiConfig.interceptors.request.use((config) => {
//   // const token = localStorage.getItem("ACCESS_TOKEN");

//   function getCookie(name) {
//     const cookies = document.cookie.split("; ");
//     for (const cookie of cookies) {
//       const [key, value] = cookie.split("=");
//       if (key === name) {
//         return decodeURIComponent(value);
//       }
//     }
//     return null;
//   }
//   const AuthToken = getCookie("AuthToken");
//   if (AuthToken) {
//     config.headers.Authorization = `Bearer ${AuthToken}`;
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
