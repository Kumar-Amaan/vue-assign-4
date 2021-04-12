import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
(config) =>{ 
    axios.defaults.headers.common.Authorization='AUTH_TOKEN';
    return config;
  },
  (error)=>  Promise.reject(error),
);

// Add a response interceptor
axios.interceptors.response.use(
  (response)=>  response,
  (error) => Promise.reject(error),
);
