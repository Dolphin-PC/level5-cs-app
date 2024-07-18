import { useNavigate } from "react-router-dom";

import { AuthCardFormSchema, CardFormSchema } from "../yup";
import { AuthCsCardReq, CsCardReq } from "../type";
import { addNewCsCard } from "../api";
import useAuth from "@/@features/Auth/useAuth";

import CardFormAuth from "@/components/organisms/CardFormAuth";
import CardForm from "@/components/organisms/CardForm";

const NewForm = () => {
  const [isAuth, userId, nickname, avatar] = useAuth((state) => [state.isAuth, state.userId, state.nickname, state.avatar]);

  const navigate = useNavigate();

  const onSuccess = (id: number) => {
    alert("정상 등록되었습니다.");
    navigate("/card/" + id);
  };

  const onAddNewCardAuth = async (data: AuthCardFormSchema): Promise<void> => {
    if (!userId) return;

    const res = await addNewCsCard<AuthCsCardReq>({
      ...data,
      userId,
      nickname: nickname || userId,
      avatar,
    });
    onSuccess(res.id);
  };

  const onAddNewCard = async (data: CardFormSchema): Promise<void> => {
    const res = await addNewCsCard<CsCardReq>(data);
    onSuccess(res.id);
  };

  return isAuth() ? <CardFormAuth onSubmit={onAddNewCardAuth} /> : <CardForm onSubmit={onAddNewCard} />;
};

export default NewForm;
