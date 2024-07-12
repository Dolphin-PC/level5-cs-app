import * as S from "@/styles/index.style";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { searchTextState } from "../SearchForm/atom";
import CsCard from "@/components/atoms/CsCard";

const CsCardList = () => {
  const searchText = useRecoilValue(searchTextState);

  useEffect(() => {
    console.log({ searchText });
  }, [searchText]);
  return (
    <S.div.Grid>
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
    </S.div.Grid>
  );
};

export default CsCardList;
