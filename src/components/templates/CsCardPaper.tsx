import * as S from "@/styles/index.style";

import useCsCard from "@/@features/CsCard/useCsCard";
import CsCard from "@/@features/CsCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getCsCardById } from "@/api/cs-cards";
import CardInfo from "@/components/molecules/CardInfo";
import { useEffect } from "react";

const CsCardPaper = ({ id }: { id: number }) => {
  const { data: card } = useSuspenseQuery({
    queryKey: ["cs-cards", id],
    queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
  });
  const [setCsCard, isEditMode] = useCsCard((state) => [
    state.setCsCard,
    state.isEditMode,
  ]);

  useEffect(() => {
    setCsCard(card);
  }, [card, setCsCard]);

  return (
    <S.div.Paper $width="50%">
      <CsCard.Header />
      {isEditMode ? <CsCard.EditForm /> : <CardInfo card={card} />}
    </S.div.Paper>
  );
};

export default CsCardPaper;
