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
