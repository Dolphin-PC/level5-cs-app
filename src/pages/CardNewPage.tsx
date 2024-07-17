import * as S from "@/styles/index.style";

import CsCard from "@/@features/CsCard";

const CardNewPage = () => {
  return (
    <S.div.Container>
      <main style={{ width: "50%" }}>
        <h1>CS카드 만들기</h1>
        <CsCard.NewForm />
      </main>
    </S.div.Container>
  );
};

export default CardNewPage;
