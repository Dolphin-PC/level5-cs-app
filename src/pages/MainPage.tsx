import CsCardList from "@/components/organisms/CsCardList/CsCardList";
import SearchForm from "@/components/organisms/SearchForm/SearchForm";
import * as S from "@/styles/index.style";

const MainPage = (): React.ReactNode => {
  return (
    <S.div.Container>
      <S.layout.Header>
        <h1>D.S.H</h1>
      </S.layout.Header>

      <h1>Dev Study Hub</h1>
      <SearchForm />

      <S.div.Gap $height={30} $width={0} />
      <S.button.Button $color="primary">내 지식 공유하기</S.button.Button>

      <S.div.Gap $height={50} $width={0} />

      <CsCardList />

      <footer>Footer content</footer>
    </S.div.Container>
  );
};

export default MainPage;
