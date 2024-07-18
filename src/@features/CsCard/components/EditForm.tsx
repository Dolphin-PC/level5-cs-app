import { AuthCardFormSchema, CardFormSchema } from "../yup";
import useCsCard from "../useCsCard";
import useCsCardQuery from "../useCsCardQuery";
import useAuth from "@/@features/Auth/useAuth";

import CardFormAuth from "@/components/organisms/CardFormAuth";
import CardForm from "@/components/organisms/CardForm";

const EditForm = () => {
  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.userId);
  const csCard = useCsCard((state) => state.csCard);
  const setIsEditMode = useCsCard((state) => state.setIsEditMode);

  const { mutationUpdate } = useCsCardQuery();

  const onEdit = (data: AuthCardFormSchema | CardFormSchema) => {
    if (csCard === null) return;
    mutationUpdate.mutate({ ...csCard, ...data });
    setIsEditMode(false);
  };

  const onEditCardAuth = (data: AuthCardFormSchema) => onEdit(data);
  const onEditCard = (data: CardFormSchema) => onEdit(data);

  if (csCard === null) return null;
  return isAuth() && userId === csCard.userId ? <CardFormAuth onSubmit={onEditCardAuth} csCard={csCard} /> : <CardForm onSubmit={onEditCard} csCard={csCard} />;
};

export default EditForm;
