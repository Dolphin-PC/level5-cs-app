import api from "@/config/axios";
import { ICsCard } from "@/types/card";


interface SearchQuery {
  title?: string;
}

export const getCsCardList = async ({
  title,
}: SearchQuery): Promise<ICsCard[]> => {
  let url = `/cs-card`;
  if (title) url += `?title_like=${title}`;
  const res = await api.get<ICsCard[]>(url);

  return res.data;
};

export const addNewCsCard = async (data: ICsCard): Promise<ICsCard> => {
  const res = await api.post<ICsCard>("/cs-card", data);

  return res.data;
}