import { authApi } from "../../config/axios";
import { ExpiresIn, LoginReq, LoginRes, ProfileReq, ProfileRes, RegisterReq, RegisterRes, UserRes } from "./types";

/** POST::회원가입 */
export const register = async (req: RegisterReq): Promise<RegisterRes> => {
  const res = await authApi.post("/register", req);
  return res.data;
};

/** POST::로그인 */
export const login = async (req: LoginReq, expiresIn?: ExpiresIn): Promise<LoginRes> => {
  if (!expiresIn) expiresIn = "1h";

  const res = await authApi.post(`/login?expiresIn=${expiresIn}`, req);
  return res.data;
};

/** GET::사용자 정보확인 */
export const user = async (accessToken: string): Promise<UserRes> => {
  const res = await authApi.get("/user", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};

/** PATCH::프로필 변경 */
export const profile = async ({ accessToken, avatar, nickname }: ProfileReq): Promise<ProfileRes> => {
  const formData = new FormData();
  avatar && formData.append("avatar", avatar);
  nickname && formData.append("nickname", nickname);

  const res = await authApi.patch("/profile", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return res.data;
};
