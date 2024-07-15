import Header from "@/components/atoms/Header";
import SearchCard from "@/components/templates/SearchCard";
import * as S from "@/styles/index.style";
import { Link } from "react-router-dom";

const MainPage = (): React.ReactNode => {
  return (
    <S.div.Container>
      <Header />
      <h1>Dev Study Hub</h1>

      <Link to="/card">
        <S.button.Button $color="primary">내 지식 공유하기</S.button.Button>
      </Link>
      <S.div.Gap $height={30} $width={0} />

      <SearchCard />
    </S.div.Container>
  );
};

export default MainPage;
