import { SubmitHandler } from "react-hook-form";

import CardForm from "@/components/molecules/CardForm";
import useCsCard from "../useCsCard";
import useCsCardQuery from "../useCsCardQuery";
import { ICsCard } from "../type";

const EditForm = () => {
  const csCard = useCsCard((state) => state.csCard);
  const toggleEditMode = useCsCard((state) => state.toggleEditMode);

  const { mutationUpdate } = useCsCardQuery();

  const onEditCard: SubmitHandler<ICsCard> = async (data) => {
    mutationUpdate.mutate(data);
    toggleEditMode();
  };

  if (csCard === null) return null;
  return <CardForm onSubmit={onEditCard} card={csCard} />;
};

export default EditForm;
