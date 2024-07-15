import useSearch from "@/@features/Search/useSearch";
import { Fragment, Suspense } from "react";
import CsCardList from "@/components/organisms/CsCardList";
import Search from "@/@features/Search";
import * as S from "@/styles/index.style";
import LoadingFallbackUI from "../atoms/LoadingFallbackUI/LoadingFallbackUI";

const SearchCard = () => {
  const searchText = useSearch((state) => state.searchText);

  return (
    <Fragment>
      <Search.Form />
      <S.div.Gap $height={30} $width={0} />
      <Suspense fallback={<LoadingFallbackUI />}>
        <CsCardList searchText={searchText} />;
      </Suspense>
    </Fragment>
  );
};

export default SearchCard;
