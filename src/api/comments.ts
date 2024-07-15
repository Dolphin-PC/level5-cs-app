import api from "@/config/axios";
import { IComment } from "@/types/comment";

const BASE_URL = "/comments";

export const getCommentListById = async (id: number): Promise<IComment[]> => {
  const url = `${BASE_URL}?cs_card_id=${id}`;
  const res = await api.get<IComment[]>(url);

  return res.data;
};
