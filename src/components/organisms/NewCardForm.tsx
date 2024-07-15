import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ICsCard } from "@/types/csCard";
import { addNewCsCard } from "@/api/cs-cards";
import CardForm from "@/components/molecules/CardForm";

const NewCardForm = () => {
  const navigate = useNavigate();

  const onAddNewCard: SubmitHandler<ICsCard> = async (data) => {
    try {
      const res = await addNewCsCard(data);

      alert("정상 등록되었습니다.");
      navigate("/card/" + res.id);
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
    }
  };

  return <CardForm onSubmit={onAddNewCard} />;
};

export default NewCardForm;
