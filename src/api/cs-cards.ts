import api from "@/config/axios";
import { ICsCard } from "@/types/csCard";
import { encrypt } from "@/util/util";

const BASE_URL = "/cs_cards";

interface SearchQuery {
  title?: string;
}

export const getCsCardList = async ({
  title,
}: SearchQuery): Promise<ICsCard[]> => {
  let url = BASE_URL;
  if (title) url += `?title_like=${title}`;
  const res = await api.get<ICsCard[]>(url);

  return res.data;
};

export const getCsCardById = async (id: number): Promise<ICsCard> => {
  const res = await api.get<ICsCard>(`${BASE_URL}/${id}`);

  // 3초의 지연을 추가하여 데이터 로딩을 시뮬레이션합니다.
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.data;
};

export const addNewCsCard = async (data: ICsCard): Promise<ICsCard> => {
  data.password = encrypt(data.password);
  const res = await api.post<ICsCard>("${BASE_URL}", data);

  return res.data;
};

export const updateCsCard = async (data: ICsCard): Promise<ICsCard> => {
  data.password = encrypt(data.password);
  const res = await api.put<ICsCard>(`${BASE_URL}/${data.id}`, data);

  return res.data;
};

export const deleteCsCard = async (id: number): Promise<void> => {
  await api.delete(`${BASE_URL}/${id}`);
};
