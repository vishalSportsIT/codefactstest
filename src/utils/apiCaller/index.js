import axios from "axios";
import { getFromLocalStorage, removeFromLocalStorage } from "../helper";


export async function getRequest(url, isNeedHeader, { headers } = {}) {
  const defaultHeaders = isNeedHeader ? { Authorization: `Bearer ${getFromLocalStorage("gk")}` } : {};
  const configHeaders = headers || defaultHeaders;
  try {
        const response = await axios
            .get(url, { headers: configHeaders });
        return response;
    } catch (error) {
        return ({ response: error.response });
    }
}


export async function postRequest(url, parameters, { headers } = {}) {
  const defaultHeaders = { Authorization: `Bearer ${getFromLocalStorage("gk")}` };
  const configHeaders = headers || defaultHeaders;
  try {
        const response = await axios
            .post(url, parameters, { headers: configHeaders });
        return response;
    } catch (error) {
        return ({ response: error.response });
    }
}

export async function putRequest(url, parameters, { headers } = {}) {
  const defaultHeaders = { Authorization: `Bearer ${getFromLocalStorage("gk")}` };
  const configHeaders = headers || defaultHeaders;
  try {
        const response = await axios
            .put(url, parameters, { headers: configHeaders });
        return response;
    } catch (error) {
        return ({ response: error?.response });
    }
}

// Request interceptors for API calls
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if ((error.response.status === 401 && error.response.data.message === "No authorization token was found") || (error.response.status === 401 && error.response.data === "Unauthorized") || (error.response.status === 401 && error.response.data.message === "Invalid authorization token or expired")) {
      // window.location.href = "/";
      removeFromLocalStorage("gk")
    }
    return Promise.reject(error);
  }
);