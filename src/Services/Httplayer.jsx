import axios from "axios";
import { fetchUrl } from "../Shared/Utils/Config";
import store from "../store";
import { addLoader } from "../reducers";

const axiosInstance = axios.create({
  baseURL: fetchUrl,
  timeout: 1000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (req) => {
    console.log("Calling before api");
    store.dispatch(addLoader(true));
    return req; // Ensure the request is returned
  },
  (error) => {
    store.dispatch(addLoader(false)); // Hide loader on error
    return Promise.reject(new Error(`Request error: ${error.message}`));
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    setTimeout(() => {
      store.dispatch(addLoader(false));
    }, 2000);
    console.log("Calling after api");
    return response.data; // Ensure the response data is returned
  },
  (error) => {
    store.dispatch(addLoader(false)); // Hide loader on error
    const errorMessage = error.response
      ? error.response.data.message || error.message
      : "Network error: Unable to reach the server.";
    return Promise.reject(new Error(`Response error: ${errorMessage}`));
  }
);

const httpLayer = {
  getRequest: async (url, config = {}) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response.articles;
    } catch (error) {
      throw new Error(`GET request failed: ${error.message}`);
    }
  },

  // postRequest: async (url, data, config = {}) => {
  //   try {
  //     return await axiosInstance.post(url, data, config);
  //   } catch (error) {
  //     throw new Error(`POST request failed: ${error.message}`);
  //   }
  // },
};

export default httpLayer;
