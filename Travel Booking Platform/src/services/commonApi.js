import axios from "axios";
import base_url from "./base_url";
const commonApi = axios.create({
  baseURL: base_url,
  headers: {
    "Content-Type": "application/json",
  },
});

export default commonApi;
