import axios from "axios";

const ApiConfig = axios.create({
  // baseURL: "http://localhost:3001/api/iot-data",
  baseURL: "https://iot-backend-x17e.onrender.com/api/iot-data",
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiConfig;
