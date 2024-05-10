// axios instance
import axios from "axios";

const $axios = axios.create({
  baseURL: "http://localhost:5066",
  timeout: 5000,
});

// axios request interceptor
$axios.interceptors.request.use(function (config) {
  
 const token =  localStorage.getItem("token");
  console.log("Access Token:", token); // Debug: Check the retrieved token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default $axios;