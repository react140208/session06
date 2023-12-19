import axios from "axios";
// import { store } from "../redux/store";

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
