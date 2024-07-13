import * as S from "@/styles/index.style";
import { getCsCardById } from "@/api/cs-card";
import { useSuspenseQuery } from "@tanstack/react-query";

const CsCardDetail = ({ id }: { id: number }) => {
  const { data: card } = useSuspenseQuery({
    queryKey: ["card", id],
    queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
  });

  return (
    <S.div.Paper>
      <small>id: {card.id}</small>
      <h1>{card.title}</h1>
      <hr />
      <span>{card.content}</span>
    </S.div.Paper>
  );
};

export default CsCardDetail;
