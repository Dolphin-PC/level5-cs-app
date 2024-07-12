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
    <S.div.Row $gap={20} $wrap>
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
  );
};

export default CsCardList;
