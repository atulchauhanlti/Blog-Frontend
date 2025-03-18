import Auth from "./auth";
import { BASE_URL } from "./endpoints";
import axios from "axios";
export const controller = new AbortController();

class API {
  // UNSECURE POST REQUEST
  static postRequest(endPoint, data) {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    return axios.post(BASE_URL + endPoint, data, config);
  }

  // SECURE POST REQUEST
  static postSecureRequest(endPoint, data) {
    const config = {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include'
    };
    return axios.post(BASE_URL + endPoint, data, config);
  }

  static postSecureFormDataRequest(endPoint, data) {
    const config = {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`,
        "Content-Type": "multipart/form-data",
      },
      credentials: 'include'
    };
    return axios.post(BASE_URL + endPoint, data, config);
  }

   // SECURE POST REQUEST
   static putSecureRequest(endPoint, data) {
    const config = {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: 'include'
    };
    return axios.put(BASE_URL + endPoint, data, config);
  }

  // GET SECURE REQUEST
  static getSecureRequests(endPoint) {
    const config = {
      headers: {
        'Authorization': `Bearer ${Auth.getToken()}`,
        'Accept': "application/json",
      },
      credentials: 'include'
    };

    return axios.get(BASE_URL + endPoint, config);
  }
}

export default API;