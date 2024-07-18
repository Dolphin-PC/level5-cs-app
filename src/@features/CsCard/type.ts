export interface ICsCard {
  id: number;
  title: string;
  content: string;
  password?: string;
  userId?: string;
  nickname?: string;
  avatar?: string | null;
}

export type AuthCsCardReq = Omit<ICsCard, "id"> & {
  userId: string;
  nickname: string;
  avatar: string | null;
};

export type CsCardReq = Omit<ICsCard, "id"> & {
  password: string;
};
