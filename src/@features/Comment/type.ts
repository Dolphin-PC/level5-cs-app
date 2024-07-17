export interface IComment {
  id: number;
  csCardId: number;
  content: string;

  author?: string;
  password?: string;

  userId?: string;
}

export type AuthCommentReq = Omit<IComment, "id"> & {
  userId: string;
};

export type CommentReq = Omit<IComment, "id"> & {
  author: string;
  password: string;
};
