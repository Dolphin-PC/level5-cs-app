import { IComment } from "@/types/comment";
import { decrypt } from "@/util/util";
import { create } from "zustand";

interface Comment {
  csCardId: number;
  setCsCardId: (csCardId: number) => void;

  editComment: IComment | null;
  toggleEditComment: (currentComment: IComment | null) => void;

  confirmPassword: (comment: IComment) => boolean;

  commentsCount: number;
  setCommentsCount: (commentsCount: number) => void;
}

const useComment = create<Comment>((set, get) => ({
  csCardId: 0,
  setCsCardId: (csCardId: number) => set({ csCardId }),

  editComment: null,
  toggleEditComment: (comment: IComment | null) => {
    if (comment === null) {
      set({ editComment: null });
      return;
    }

    const { editComment, confirmPassword } = get();

    if (editComment && editComment.id === comment.id) {
      set({ editComment: null });
      return;
    }

    if (confirmPassword(comment)) {
      set({ editComment: comment });
    }
  },
  confirmPassword: (comment: IComment) => {
    const inputPassword = prompt("비밀번호를 입력해주세요");
    if (inputPassword && inputPassword === decrypt(comment.password)) {
      return true;
    }
    alert("비밀번호가 일치하지 않습니다.");
    return false;
  },

  commentsCount: 0,
  setCommentsCount: (commentsCount: number) => set({ commentsCount }),
}));

export default useComment;
