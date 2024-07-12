import api from "@/config/axios";

interface CsCard {
  id: string;
  title: string;
}

interface SearchQuery {
  title?: string;
}

export const getCsCardList = async ({
  title,
}: SearchQuery): Promise<CsCard[]> => {
  let url = `/cs-card`;
  if (title) url += `?title_like=${title}`;
  const res = await api.get<CsCard[]>(url);

  return res.data;
};
