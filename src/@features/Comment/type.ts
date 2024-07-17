export interface IComment {
  id: number;
  csCardId: number;
  content: string;

  password?: string;

  userId?: string;
}

export type AuthCommentReq = Omit<IComment, "id"> & {
  userId: string;
};

export type CommentReq = Omit<IComment, "id"> & {
  password: string;
};
