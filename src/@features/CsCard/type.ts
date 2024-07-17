export interface ICsCard {
  id: number;
  title: string;
  content: string;
  password?: string;
  userId?: string;
}

export type NewAuthCardReq = Omit<ICsCard, "id"> & {
  userId: string;
};

export type NewCardReq = Omit<ICsCard, "id"> & {
  password: string;
};
