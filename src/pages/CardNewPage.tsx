import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import * as S from "@/styles/index.style";
import { addNewCsCard } from "@/@features/CsCard/api";
import { ICsCard } from "@/@features/CsCard/type";
import CardForm from "@/components/molecules/CardForm";

const CardNewPage = () => {
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
  return (
    <S.div.Container>
      <main style={{ width: "50%" }}>
        <h1>CS카드 만들기</h1>
        <CardForm onSubmit={onAddNewCard} />;
      </main>
    </S.div.Container>
  );
};

export default CardNewPage;
