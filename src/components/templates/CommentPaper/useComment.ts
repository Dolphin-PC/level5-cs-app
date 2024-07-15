import { create } from "zustand";

interface Comment {
  csCardId: number;
  setCsCardId: (csCardId: number) => void;
}

const useComment = create<Comment>((set) => ({
  csCardId: 0,
  setCsCardId: (csCardId: number) => set({ csCardId }),
}));

export default useComment;
