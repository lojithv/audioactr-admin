import axios from "axios";
import { Env } from "../env/env";

export const serverConnInstance = axios.create({
  baseURL: Env.API_URL,
});
