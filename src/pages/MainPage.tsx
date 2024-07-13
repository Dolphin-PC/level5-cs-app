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
      <Link to="/card">
        <S.button.Button $color="primary">내 지식 공유하기</S.button.Button>
      </Link>

      <S.div.Gap $height={50} $width={0} />

      <CsCardList />
    </S.div.Container>
  );
};

export default MainPage;
