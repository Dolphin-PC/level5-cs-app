import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_JSON_SERVER_URL,
});

api.interceptors.response.use(
  async (response) => {
    // 로딩 테스트용
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return response;
  },
  (error) => {
    if (error.response?.status !== 200) {
      // alert("오류가 발생했습니다.");
      console.error(error);
    }
    return Promise.reject(error);
  }
);

export const authApi = axios.create({
  baseURL: import.meta.env.VITE_AUTH_URL,
});

authApi.interceptors.response.use(
  async (response) => {
    // 로딩 테스트용
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    return response;
  },
  (error) => {
    if (error.response?.status !== 200) {
      console.error(error);

      if (error.response.data.message) {
        alert(error.response.data.message);
      }
    }
    return Promise.reject(error);
  }
);

export default api;
