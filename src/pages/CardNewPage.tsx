import Header from "@/components/atoms/Header";
import NewCardForm from "@/components/organisms/NewCardForm";
import * as S from "@/styles/index.style";

const CardNewPage = () => {
  return (
    <S.div.Container>
      <Header />

      <main style={{ width: "50%" }}>
        <h1>CS카드 만들기</h1>
        <NewCardForm />
      </main>
    </S.div.Container>
  );
};

export default CardNewPage;
