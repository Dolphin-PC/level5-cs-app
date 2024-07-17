import { create } from "zustand";

import { decrypt } from "@/util/util";
import { IComment } from "./type";

interface Comment {
  csCardId: number | null;
  setCsCardId: (csCardId: number) => void;

  confirmPassword: (comment: IComment) => boolean;
}

const useComment = create<Comment>((set) => ({
  csCardId: null,
  setCsCardId: (csCardId: number) => set({ csCardId }),

  confirmPassword: (comment: IComment) => {
    const inputPassword = prompt("비밀번호를 입력해주세요");
    if (
      inputPassword &&
      comment.password &&
      inputPassword === decrypt(comment.password)
    ) {
      return true;
    }
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  },
}));

export default useComment;
