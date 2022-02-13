import axios from "axios";

// Custom config of an axios instance - used widely all over the app in each http request

const defaultOptions = {
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json",
  },
};

// Create instance
let api = axios.create(defaultOptions);

// Append AUTH token (if available) for each request
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export { api };
