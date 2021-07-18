import axios from "axios";
import {getToken} from "../services/auth";

const api = axios.create({
    baseURL: "http://18.222.237.53:8079/api/mobile"
});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token != null) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;
