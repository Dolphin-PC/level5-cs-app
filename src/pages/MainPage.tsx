import CsCard from "@/components/atoms/CsCard";
import * as S from "@/styles/index.style";

const MainPage = (): React.ReactNode => {
  return (
    <S.div.Container>
      <S.layout.Header>Header content</S.layout.Header>

      <h1>Dev Study Hub</h1>
      <S.button.Button>내 지식 공유하기</S.button.Button>

      <S.input.SearchInput />

      <S.div.Row>
        <S.button.Button>BUTTON</S.button.Button>
        <S.button.Button>BUTTON</S.button.Button>
        <S.button.Button>BUTTON</S.button.Button>
      </S.div.Row>

      <S.div.Row $gap="20" $wrap>
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
        <CsCard />
      </S.div.Row>

      <footer>Footer content</footer>
    </S.div.Container>
  );
};

export default MainPage;
