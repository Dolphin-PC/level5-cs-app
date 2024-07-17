import api from "@/config/axios";
import { encrypt } from "@/util/util";
import { ICsCard, NewAuthCardReq, NewCardReq } from "./type";

const BASE_URL = "/cs_cards";

interface SearchQuery {
  title?: string;
  _page?: number;
  _limit?: number;
}

export const getCsCardList = async ({
  title,
  _page = 1,
  _limit = 6,
}: SearchQuery): Promise<ICsCard[]> => {
  const queryParam = new URLSearchParams();
  title && queryParam.append("title_like", title);
  _page && queryParam.append("_page", _page.toString());
  _limit && queryParam.append("_limit", _limit.toString());
  const res = await api.get<ICsCard[]>(`${BASE_URL}?${queryParam.toString()}`);

  return res.data;
};

export const getCsCardById = async (id: number): Promise<ICsCard> => {
  const res = await api.get<ICsCard>(`${BASE_URL}/${id}`);

  return res.data;
};

export const addNewCsCard = async <T extends NewAuthCardReq | NewCardReq>(
  data: T
): Promise<ICsCard> => {
  if (data.password) data.password = encrypt(data.password);

  const res = await api.post<ICsCard>(BASE_URL, data);
  return res.data;
};

export const updateCsCard = async (data: ICsCard): Promise<ICsCard> => {
  if (data.password) data.password = encrypt(data.password);
  const res = await api.put<ICsCard>(`${BASE_URL}/${data.id}`, data);

  return res.data;
};

export const deleteCsCard = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`);
};

export const getNextCsCardId = async (
  id: number,
  search?: string
): Promise<ICsCard[]> => {
  id++;

  let url = `${BASE_URL}?id_gte=${id}`;
  if (search) url += `&title_like=${search}`;
  const res = await api.get<ICsCard[]>(url);

  return res.data;
};

export const getPrevCsCardId = async (
  id: number,
  search?: string
): Promise<ICsCard[]> => {
  id -= 1;

  let url = `${BASE_URL}?id_lte=${id}&_sort=id&_order=desc`;
  if (search) url += `&title_like=${search}`;
  const res = await api.get<ICsCard[]>(url);

  return res.data;
};
