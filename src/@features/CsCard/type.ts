export interface ICsCard {
  id: number;
  title: string;
  content: string;
  password?: string;
  userId?: string;
}

export type AuthCsCardReq = Omit<ICsCard, "id"> & {
  userId: string;
};

export type CsCardReq = Omit<ICsCard, "id"> & {
  password: string;
};
