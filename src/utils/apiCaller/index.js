import axios from "axios";
import { getFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from "../helper";


async function refreshToken() {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/refresh-token`, {
      token: getFromLocalStorage("refreshToken")
    });
    const { accessToken } = response.data;
    
    saveToLocalStorage("gk", accessToken);
    return accessToken;
  } catch (error) {
    
    removeFromLocalStorage("gk");
    removeFromLocalStorage("refreshToken");
    
    return null;
  }
}


export async function getRequest(url, isNeedHeader, { headers } = {}) {
  const defaultHeaders = isNeedHeader ? { Authorization: `Bearer ${getFromLocalStorage("gk")}` } : {};
  const configHeaders = headers || defaultHeaders;
  try {
    const response = await axios.get(url, { headers: configHeaders });
    return response;
  } catch (error) {
    return { response: error.response };
  }
}


export async function postRequest(url, parameters, { headers } = {}) {
  const defaultHeaders = { Authorization: `Bearer ${getFromLocalStorage("gk")}` };
  const configHeaders = headers || defaultHeaders;
  try {
    const response = await axios.post(url, parameters, { headers: configHeaders });
    return response;
  } catch (error) {
    return { response: error.response };
  }
}


export async function putRequest(url, parameters, { headers } = {}) {
  const defaultHeaders = { Authorization: `Bearer ${getFromLocalStorage("gk")}` };
  const configHeaders = headers || defaultHeaders;
  try {
    const response = await axios.put(url, parameters, { headers: configHeaders });
    return response;
  } catch (error) {
    return { response: error?.response };
  }
}

// Interceptor for handling expired access tokens
axios.interceptors.response.use(
  response => response, // Pass through successful responses
  async error => {
    const originalRequest = error.config;
    
    // Check if error is due to token expiration
    if (
      error.response &&
      error.response.status === 401 &&
      (error.response.data.message === "Invalid authorization token or expired" ||
       error.response.data === "Unauthorized")
    ) {
      // Attempt to refresh token
      const newAccessToken = await refreshToken();
      if (newAccessToken) {
        // Update the token in the header and retry the original request
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axios(originalRequest); // Retry the original request
      } else {
        // Redirect or handle logout if token refresh failed
        removeFromLocalStorage("gk");
        removeFromLocalStorage("refreshToken");
        // Optional: Redirect to login
        // window.location.href = "/login";
      }
    }

    return Promise.reject(error); // Return the error if refresh token fails
  }
);
