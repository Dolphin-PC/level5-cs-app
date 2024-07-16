import axios from "axios";

const api = axios.create({
  baseURL: "/api",
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

export default api;
