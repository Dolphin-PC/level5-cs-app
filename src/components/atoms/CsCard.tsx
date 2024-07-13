import * as S from "@/styles/index.style";
import { ICsCard } from "@/types/card";

const CsCard = (props: ICsCard) => {
  return <S.div.ArcadeCard>{props.title}</S.div.ArcadeCard>;
};

export default CsCard;
