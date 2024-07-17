import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuth } from "./types";
import dayjs, { Dayjs } from "dayjs";

interface Auth {
  accessToken: string | null;
  userId: IAuth["id"] | null;
  avatar: unknown | null;
  success: boolean;
  nickname: string | null;
  expiredAt: Dayjs | null;
}

interface Action {
  handleLogin: (data: Auth) => void;
  handleLogout: () => void;
  isExpired: () => boolean;
  isAuth: () => boolean;
}

const initialState: Auth = {
  accessToken: null,
  userId: null,
  avatar: null,
  nickname: null,
  success: false,
  expiredAt: null,
};

const useAuth = create(
  persist<Auth & Action>(
    (set, get) => ({
      ...initialState,

      handleLogin: (data) => set(data),
      handleLogout: () => set(initialState),
      isExpired: () => {
        const now = dayjs();
        return now.isAfter(dayjs());
      },
      isAuth: () => {
        // TODO expired시, 로그아웃 처리
        const { accessToken, isExpired } = get();
        return !!(accessToken && !isExpired());
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
