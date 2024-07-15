import api from "@/config/axios";
import { IComment } from "@/types/comment";
import { encrypt } from "@/util/util";

const BASE_URL = "/comments";

export const getCommentListById = async (id: number): Promise<IComment[]> => {
  const url = `${BASE_URL}?cs_card_id=${id}`;
  const res = await api.get<IComment[]>(url);

  // 3초 지연
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return res.data;
};

export const addComment = async (data: IComment): Promise<IComment> => {
  data.password = encrypt(data.password);

  const url = BASE_URL;
  const res = await api.post<IComment>(url, data);

  return res.data;
};

export const updateComment = async (data: IComment): Promise<IComment> => {
  data.password = encrypt(data.password);

  const url = `${BASE_URL}/${data.id}`;
  const res = await api.put<IComment>(url, data);

  return res.data;
};

export const deleteComment = async (id: number): Promise<IComment["id"]> => {
  const url = `${BASE_URL}/${id}`;
  await api.delete(url);

  return id;
};
