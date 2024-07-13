import * as S from "@/styles/index.style";
import { getCsCardById } from "@/api/cs-card";
import { useSuspenseQuery } from "@tanstack/react-query";
import EditIcon from "@/assets/icons/edit.svg?react";

const CsCardPaper = ({ id }: { id: number }) => {
  const { data: card } = useSuspenseQuery({
    queryKey: ["card", id],
    queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
  });

  return (
    <S.div.Paper>
      <S.div.Row style={{ justifyContent: "space-between" }}>
        <small>id: {card.id}</small>
        <div>
          <S.button.IconButton>
            <EditIcon />
          </S.button.IconButton>
        </div>
      </S.div.Row>
      <h1>{card.title}</h1>
      <hr />
      <span>{card.content}</span>
    </S.div.Paper>
  );
};

export default CsCardPaper;
