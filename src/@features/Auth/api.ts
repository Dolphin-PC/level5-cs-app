import { authApi } from "../../config/axios";
import {
  ExpiresIn,
  LoginReq,
  LoginRes,
  ProfileReq,
  RegisterReq,
  RegisterRes,
  UserRes,
} from "./types";

/** POST::회원가입 */
export const register = async (req: RegisterReq): Promise<RegisterRes> => {
  const res = await authApi.post("/register", req);
  return res.data;
};

/** POST::로그인 */
export const login = async (
  req: LoginReq,
  expiresIn?: ExpiresIn
): Promise<LoginRes> => {
  if (!expiresIn) expiresIn = "1h";

  const res = await authApi.post(`/login?expiresIn=${expiresIn}`, req);
  return res.data;
};

/** GET::사용자 정보확인 */
export const user = async (): Promise<UserRes> => {
  const res = await authApi.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return res.data;
};

/** PATCH::프로필 변경 */
export const profile = async ({
  avatar,
  nickname,
}: ProfileReq): Promise<UserRes> => {
  const formData = new FormData();
  formData.append("avatar", avatar);
  formData.append("nickname", nickname);

  const res = await authApi.post("/profile", formData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return res.data;
};
