import axios from "axios";

export const appApi = axios.create({
  baseURL: "http://localhost:3010",
});
