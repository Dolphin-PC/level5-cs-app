import { addNewCsCard } from "@/api/cs-card";
import { ICsCard } from "@/types/card";
import { encrypt } from "@/util/util";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CardForm from "../molecules/CardForm";

const EditCardForm = () => {
  const navigate = useNavigate();

  const onEditCard: SubmitHandler<ICsCard> = async (data) => {
    console.log({ data });
  };

  return <CardForm onSubmit={onEditCard} />;
};

export default EditCardForm;
