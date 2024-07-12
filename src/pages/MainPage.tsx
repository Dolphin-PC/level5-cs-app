import Header from "@/components/atoms/Header";
import CsCardList from "@/components/organisms/CsCardList/CsCardList";
import SearchForm from "@/components/organisms/SearchForm/SearchForm";
import * as S from "@/styles/index.style";
import { Link } from "react-router-dom";

const MainPage = (): React.ReactNode => {
  return (
    <S.div.Container>
      <Header />
      <h1>Dev Study Hub</h1>
      <SearchForm />

      <S.div.Gap $height={30} $width={0} />
      <S.button.Button $color="primary">
        <Link to="/card">내 지식 공유하기</Link>
      </S.button.Button>

      <S.div.Gap $height={50} $width={0} />

      <CsCardList />
    </S.div.Container>
  );
};

export default MainPage;
