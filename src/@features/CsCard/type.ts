export interface ICsCard {
  id: number;
  title: string;
  content: string;
  password?: string;
  userId?: string;
  nickname?: string;
}

export type AuthCsCardReq = Omit<ICsCard, "id"> & {
  userId: string;
  nickname: string;
};

export type CsCardReq = Omit<ICsCard, "id"> & {
  password: string;
};
