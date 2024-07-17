import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IAuth } from "./types";

interface Auth {
  accessToken: string | null;
  userId: IAuth["id"] | null;
  avatar: unknown | null;
  success: boolean;
  nickname: string | null;
  expiredAt?: number;
}

interface Action {
  handleLogin: (data: Auth) => void;
  handleLogout: () => void;
}

const initialState: Auth = {
  accessToken: null,
  userId: null,
  avatar: null,
  nickname: null,
  success: false,
  expiredAt: 0,
};

const useAuth = create(
  persist<Auth & Action>(
    (set) => ({
      ...initialState,

      handleLogin: (data) => set(data),
      handleLogout: () => set(initialState),
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// const useAuth = create<Auth & Action>((set) => ({
//   accessToken: null,
//   userId: null,
//   avatar: null,
//   nickname: null,
//   action: {
//     login: (data) => set(data),
//   },
// }));

export default useAuth;
