import useSearch from "@/@features/Search/useSearch";
import { Fragment } from "react";
import CsCardList from "@/components/organisms/CsCardList";
import Search from "@/@features/Search";
import * as S from "@/styles/index.style";

const SearchCard = () => {
  const searchText = useSearch((state) => state.searchText);

  return (
    <Fragment>
      <Search.Form />
      <S.div.Gap $height={30} $width={0} />
      <CsCardList searchText={searchText} />;
    </Fragment>
  );
};

export default SearchCard;
