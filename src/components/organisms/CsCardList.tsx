import * as S from "@/styles/index.style";
import { useEffect, useState } from "react";
import CsCardButton from "@/components/atoms/CsCardButton";
import { ICsCard } from "@/types/csCard";
import { getCsCardList } from "@/api/cs-cards";

interface Props {
  searchText?: string;
}

const CsCardList = ({ searchText }: Props) => {
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
