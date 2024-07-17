import { authApi } from "@/config/axios";
import { IAuth } from "@/types/auth";

interface RegisterReq extends IAuth {
  nickname: string;
}
interface RegisterRes {
  message: string;
  success: boolean;
}

export const register = async (req: RegisterReq): Promise<RegisterRes> => {
  const res = await authApi.post("/register", req);
  return res.data;
};

interface LoginReq extends IAuth {}

interface LoginRes {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
}

type ExpiresIn = "10s" | "10m" | "1h" | "1d";

export const login = async (
  req: LoginReq,
  expiresIn?: ExpiresIn
): Promise<LoginRes> => {
  if (!expiresIn) expiresIn = "1h";

  const res = await authApi.post(`/login?expiresIn=${expiresIn}`, req);
  return res.data;
};

interface UserRes {
  id: string;
  nickname: string;
  avatar: unknown;
  success: boolean;
}

export const user = async (): Promise<UserRes> => {
  const res = await authApi.get("/user", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
  return res.data;
};
