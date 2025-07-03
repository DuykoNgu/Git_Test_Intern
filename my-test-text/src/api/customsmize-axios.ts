import axios from "axios";
import { refreshAccessToken } from "./useSevice";

const instance = axios.create();

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      const newToken = await refreshAccessToken();
      if (newToken) {
        error.config.headers["Authorization"] = `Bearer ${newToken}`;
        error.config._retry = true;
        return instance(error.config);
      } else {
        alert("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
