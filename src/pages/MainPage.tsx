import Search from "@/@features/Search";
import useSearch from "@/@features/Search/useSearch";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";
import CsCardList from "@/components/organisms/CsCardList";
import * as S from "@/styles/index.style";
import { Suspense } from "react";
import { Link } from "react-router-dom";

const MainPage = (): React.ReactNode => {
  const searchText = useSearch((state) => state.searchText);

  return (
    <S.div.Container>
      <h1>Dev Study Hub</h1>

      <S.div.Column $gap={30} style={{ width: "100%", alignItems: "center" }}>
        <Link to="/card">
          <S.button.Button $color="primary">내 지식 공유하기</S.button.Button>
        </Link>
        <Search.Form />
        <Suspense fallback={<LoadingFallbackUI />}>
          <CsCardList searchText={searchText} />
        </Suspense>
      </S.div.Column>
    </S.div.Container>
  );
};

export default MainPage;
