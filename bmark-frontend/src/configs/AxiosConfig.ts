import axios from "axios";
import {BASE_BACKEND_URL} from "@/configs/EnvConfig";

export const baseAxios = axios.create({baseURL: BASE_BACKEND_URL});