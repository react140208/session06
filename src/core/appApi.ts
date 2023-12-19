import axios from "axios";
// import { store } from "../redux/store";
import { notification } from "antd";

export const appApi = axios.create({
  baseURL: "http://localhost:3010",
});

appApi.interceptors.request.use(async (config) => {
  const { store } = await import("../redux/store");
  const token = store.getState().auth.token;
  if (token) {
    config.headers["token"] = token;
  }
  return config;
});

appApi.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    console.log(error);
    if (error.response?.data?.message) {
      notification.error({ message: error.response?.data?.message });
    }
    if (error.response?.data?.error) {
      notification.error({ message: error.response?.data?.error });
    }
    return Promise.reject(error);
  }
);
