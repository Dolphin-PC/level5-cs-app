import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuth } from "./types";
import dayjs from "@/config/dayjsConfig";

interface Auth {
  accessToken: string | null;
  userId: IAuth["id"] | null;
  avatar: unknown | null;
  success: boolean;
  nickname: string | null;
  expiredAt: string | null;
}

interface Action {
  setLoginInfo: (data: Auth) => void;
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

      setLoginInfo: (data) => set(data),
      handleLogout: () => set(initialState),
      isExpired: () => {
        const { expiredAt } = get();

        const now = dayjs();
        return now.isAfter(expiredAt);
      },
      isAuth: () => {
        // TODO expired시, 로그아웃 처리
        const { accessToken, isExpired } = get();

        if (!accessToken) return false;

        if (isExpired()) {
          alert("로그아웃 되었습니다.");
          get().handleLogout();
          window.location.reload();
        }

        return true;
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuth;
