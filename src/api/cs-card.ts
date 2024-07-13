import api from "@/config/axios";
import { ICsCard } from "@/types/card";


interface SearchQuery {
  title?: string;
}

export const getCsCardList = async ({
  title,
}: SearchQuery): Promise<ICsCard[]> => {
  let url = `/cs-cards`;
  if (title) url += `?title_like=${title}`;
  const res = await api.get<ICsCard[]>(url);

  return res.data;
};

export const getCsCardById = async (id: number): Promise<ICsCard> => {
  const res = await api.get<ICsCard>(`/cs-cards/${id}`);
  
  // 3초의 지연을 추가하여 데이터 로딩을 시뮬레이션합니다.
  await new Promise(resolve => setTimeout(resolve, 3000));
  return res.data;
}

export const addNewCsCard = async (data: ICsCard): Promise<ICsCard> => {
  const res = await api.post<ICsCard>("/cs-cards", data);

  return res.data;
}