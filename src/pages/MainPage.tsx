import Search from "@/@features/Search";
import useSearch from "@/@features/Search/useSearch";
import Header from "@/components/atoms/Header";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";
import CsCardList from "@/components/organisms/CsCardList";
import * as S from "@/styles/index.style";
import { Suspense } from "react";
import { Link } from "react-router-dom";

const MainPage = (): React.ReactNode => {
  const searchText = useSearch((state) => state.searchText);

  return (
    <S.div.Container>
      <Header />
      <h1>Dev Study Hub</h1>

      <Link to="/card">
        <S.button.Button $color="primary">내 지식 공유하기</S.button.Button>
      </Link>
      <S.div.Gap $height={30} $width={0} />

      <Search.Form />
      <S.div.Gap $height={30} $width={0} />
      <Suspense fallback={<LoadingFallbackUI />}>
        <CsCardList searchText={searchText} />
      </Suspense>
    </S.div.Container>
  );
};

export default MainPage;
