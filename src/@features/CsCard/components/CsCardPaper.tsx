import * as S from "@/styles/index.style";

import useCsCard from "@/@features/CsCard/useCsCard";
import CsCard from "@/@features/CsCard";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getCsCardById } from "@/api/cs-cards";
import { Fragment, useEffect } from "react";

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
    <S.div.Paper>
      <CsCard.Header />
      {isEditMode ? (
        <CsCard.EditForm />
      ) : (
        <Fragment>
          <h1>{card.title}</h1>
          <hr />
          <h3>{card.content}</h3>
        </Fragment>
      )}
    </S.div.Paper>
  );
};

export default CsCardPaper;
