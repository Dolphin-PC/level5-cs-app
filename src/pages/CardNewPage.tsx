import Header from "@/components/atoms/Header";
import CardForm from "@/components/organisms/CardForm/CardForm";
import * as S from "@/styles/index.style";

const CardNewPage = () => {
  return (
    <S.div.Container>
      <Header />

      <main style={{ width: "50%" }}>
        <h1>CS카드 만들기</h1>
        <CardForm />
      </main>
    </S.div.Container>
  );
};

export default CardNewPage;
