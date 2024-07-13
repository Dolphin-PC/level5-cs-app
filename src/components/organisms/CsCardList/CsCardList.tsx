import * as S from "@/styles/index.style";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchTextState } from "../SearchForm/atom";
import { ICsCard } from "@/types/card";
import { getCsCardList } from "@/api/cs-card";
import CsCardButton from "@/components/atoms/CsCardButton";

const CsCardList = () => {
  const searchText = useRecoilValue(searchTextState);
  const [cards, setCards] = useState<ICsCard[]>([]);

  useEffect(() => {
    console.log({ searchText });

    const fetchCards = async () => {
      const data = await getCsCardList({ title: searchText });
      setCards(data);
    };

    fetchCards();
  }, [searchText]);
  return (
    <S.div.Grid>
      {cards.map((card) => (
        <CsCardButton key={card.id} {...card} />
      ))}
    </S.div.Grid>
  );
};

export default CsCardList;
