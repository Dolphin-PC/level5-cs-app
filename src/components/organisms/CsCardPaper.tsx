import * as S from "@/styles/index.style";
import { getCsCardById } from "@/api/cs-card";
import { useSuspenseQuery } from "@tanstack/react-query";
import EditIcon from "@/assets/icons/edit.svg?react";
import { useState } from "react";
import CardInfo from "../molecules/CardInfo";
import EditCardForm from "./EditCardForm";

const CsCardPaper = ({ id }: { id: number }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const { data: card } = useSuspenseQuery({
    queryKey: ["card", id],
    queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
  });

  return (
    <S.div.Paper>
      <S.div.Row style={{ justifyContent: "space-between" }}>
        <small>id: {card.id}</small>
        <div>
          <S.button.IconButton onClick={() => setIsEditMode((prev) => !prev)}>
            <EditIcon />
          </S.button.IconButton>
        </div>
      </S.div.Row>
      {isEditMode ? <EditCardForm /> : <CardInfo card={card} />}
    </S.div.Paper>
  );
};

export default CsCardPaper;
