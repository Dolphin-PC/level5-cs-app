import { addNewCsCard } from "@/api/cs-card";
import { ICsCard } from "@/types/card";
import { encrypt } from "@/util/util";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CardForm from "../molecules/CardForm";

const NewCardForm = () => {
  const navigate = useNavigate();

  const onAddNewCard: SubmitHandler<ICsCard> = async (data) => {
    try {
      data.password = encrypt(data.password);
      const res = await addNewCsCard(data);

      alert("정상 등록되었습니다.");
      navigate("/card/" + res.id);
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
      window.location.reload();
    }
  };

  return <CardForm onSubmit={onAddNewCard} />;
};

export default NewCardForm;
