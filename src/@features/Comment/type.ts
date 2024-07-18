export interface IComment {
  id: number;
  csCardId: number;
  content: string;

  password?: string;

  userId?: string;
  avatar?: string | null;
}

export type AuthCommentReq = Omit<IComment, "id"> & {
  userId: string;
  avatar: string | null;
};

export type CommentReq = Omit<IComment, "id"> & {
  password: string;
};
