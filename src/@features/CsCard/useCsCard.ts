import { create } from "zustand";

import { ICsCard } from "./type";
import { decrypt } from "@/util/util";

interface CsCard {
  csCard: ICsCard | null;
  setCsCard: (csCard: ICsCard) => void;

  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;

  confirmPassword: () => boolean;
}

const useCsCard = create<CsCard>((set, get) => ({
  csCard: null,
  setCsCard: (csCard) => set({ csCard, isEditMode: false }),

  isEditMode: false,
  setIsEditMode: (isEditMode) => set({ isEditMode }),

  confirmPassword: () => {
    const { csCard } = get();
    if (csCard === null || csCard.password === undefined) return false;

    const inputPassword = prompt("비밀번호를 입력해주세요");
    if (inputPassword === null) return false;
    if (inputPassword !== decrypt(csCard.password)) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    return true;
  },
}));

export default useCsCard;
