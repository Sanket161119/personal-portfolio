import axios from "axios";
import { BASE_URL } from "../Shared/Utils/Config";
import store from "../store";
import { addLoader } from "../reducers";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (req) => {
    console.log("Request initiated:", req.url);
    store.dispatch(addLoader(true));
    return req;
  },
  (error) => {
    console.error("Request interceptor error:", error);
    store.dispatch(addLoader(false));
    return Promise.reject(new Error(`Request error: ${error.message}`));
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received from:", response.config.url);
    setTimeout(() => {
      store.dispatch(addLoader(false));
    }, 500);
    
    return response.data;
  },
  (error) => {
    console.error("Response error:", error);
    store.dispatch(addLoader(false));
    
    const errorMessage = error.response
      ? error.response.data?.message || error.response.statusText || error.message
      : "Network error: Unable to reach the server.";
      
    return Promise.reject(new Error(errorMessage));
  }
);

const httpLayer = {
  getBlogArticles: async (url= "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e0e54a16b8c14b95b65d174f56f63785") => {
    try{
      const resp = await axiosInstance.get(url);
      return resp.articles;
    }
    catch(error){
      console.error("Error fetching articles:", error); 
      throw error;
    }
  },
  getRequest: async (url, config = {}) => {
    try {
      const response = await axiosInstance.get(url, config);
      return response.data;
    } catch (error) {
      console.error(`GET request failed for ${url}:`, error);
      throw error;
    }
  },
  
  postRequest: async (url, data, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config);
      return response;
    } catch (error) {
      console.error(`POST request failed for ${url}:`, error);
      throw error;
    }
  },
  
  putRequest: async (url, params) => {
    console.log("Recieved data", params)
    try {
      const response =  await axiosInstance.put(url, params);
      return response;
    } catch (error) {
      console.error(`PUT request failed for ${url}:`, error);
      throw error;
    }
  },
  
  deleteRequest: async (url,params = {}, config = {}) => {
    try {
      const response=  await axiosInstance.delete(url,{data:params, ...config});
      return response;
    } catch (error) {
      console.error(`DELETE request failed for ${url}:`, error);
      throw error;
    }
  }
};

export default httpLayer;