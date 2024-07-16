import { ICsCard } from "@/types/csCard";
import { decrypt } from "@/util/util";
import { create } from "zustand";

interface CsCard {
  csCard: ICsCard | null;
  setCsCard: (csCard: ICsCard) => void;

  isEditMode: boolean;
  setIsEditMode: (isEditMode: boolean) => void;

  toggleEditMode: () => void;

  confirmPassword: () => boolean;
}

const useCsCard = create<CsCard>((set, get) => ({
  csCard: null,
  setCsCard: (csCard) => set({ csCard }),

  isEditMode: false,
  setIsEditMode: (isEditMode) => set({ isEditMode }),

  toggleEditMode: () => {
    const { isEditMode, setIsEditMode, confirmPassword } = get();
    if (isEditMode == false) {
      if (confirmPassword() === false) return;
    }
    setIsEditMode(!isEditMode);
  },

  confirmPassword: () => {
    const { csCard } = get();
    if (csCard === null) return false;

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
