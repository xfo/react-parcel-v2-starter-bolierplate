import axios from "axios";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  (config) => {
    const accessToken = "your secret token";

    config.headers.Authorization = `Bearer ${accessToken}`;
    config.headers["Accept-Language"] = "en"; // send current user's locale to backend

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
