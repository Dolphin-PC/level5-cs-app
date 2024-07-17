export interface IAuth {
  id: string;
  password: string;
}

export interface RegisterReq extends IAuth {
  nickname: string;
}

export interface RegisterRes {
  message: string;
  success: boolean;
}

export interface LoginReq extends IAuth {}

export interface LoginRes {
  accessToken: string;
  userId: string;
  success: boolean;
  avatar: string;
  nickname: string;
}
export type ExpiresIn = "10s" | "10m" | "1h" | "1d";

export interface UserRes {
  id: string;
  nickname: string;
  avatar: unknown;
  success: boolean;
}

export interface ProfileReq {
  avatar: File;
  nickname: string;
}
