export interface IComment {
  id: number;
  csCardId: number;
  author: string;
  content: string;
  password: string;

  userId: string;

  createdAt: string;
  updatedAt: string;
}
