import api from "@/config/axios";
import { encrypt } from "@/util/util";
import { AuthCommentReq, CommentReq, IComment } from "./type";

const BASE_URL = "/comments";

export const getCommentListById = async (id: number): Promise<IComment[]> => {
  const url = `${BASE_URL}?csCardId=${id}`;
  const res = await api.get<IComment[]>(url);

  return res.data;
};

export const addComment = async <T extends AuthCommentReq | CommentReq>(
  data: T
): Promise<IComment> => {
  if (data.password) data.password = encrypt(data.password);

  const url = BASE_URL;
  const res = await api.post<IComment>(url, data);

  return res.data;
};

export const updateComment = async (data: IComment): Promise<IComment> => {
  if (data.password) data.password = encrypt(data.password);

  const url = `${BASE_URL}/${data.id}`;
  const res = await api.put<IComment>(url, data);

  return res.data;
};

export const deleteComment = async (id: number): Promise<IComment["id"]> => {
  const url = `${BASE_URL}/${id}`;
  await api.delete(url);

  return id;
};
