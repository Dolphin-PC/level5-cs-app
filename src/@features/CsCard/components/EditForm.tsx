import CardForm from "@/components/molecules/CardForm";
import { ICsCard } from "@/types/csCard";
import { SubmitHandler } from "react-hook-form";
import useCsCard from "../useCsCard";
import useCsCardQuery from "../useCsCardQuery";

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
