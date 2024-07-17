import CardForm from "@/components/organisms/CardForm";
import { useNavigate } from "react-router-dom";
import useAuth from "@/@features/Auth/useAuth";
import AuthCardForm from "@/components/organisms/AuthCardForm";
import { AuthCardFormSchema, CardFormSchema } from "../yup";
import { addNewCsCard } from "../api";
import { AuthCsCardReq, CsCardReq } from "../type";

const NewForm = () => {
  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.userId);
  const navigate = useNavigate();

  const onSuccess = (id: number) => {
    alert("정상 등록되었습니다.");
    navigate("/card/" + id);
  };

  const onAddNewCardAuth = async (data: AuthCardFormSchema): Promise<void> => {
    if (!userId) return;

    const res = await addNewCsCard<AuthCsCardReq>({ ...data, userId });
    onSuccess(res.id);
  };

  const onAddNewCard = async (data: CardFormSchema): Promise<void> => {
    const res = await addNewCsCard<CsCardReq>(data);
    onSuccess(res.id);
  };

  return isAuth() ? (
    <AuthCardForm onSubmit={onAddNewCardAuth} />
  ) : (
    <CardForm onSubmit={onAddNewCard} />
  );
};

export default NewForm;
