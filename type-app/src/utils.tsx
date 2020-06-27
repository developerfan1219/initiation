import axios from "axios";
import { endpoint } from "./constants";

export const authAxios = axios.create({
  baseURL: endpoint,
  headers: {
    token: ``
  }
});
