import * as S from "@/styles/index.style";
import { ICsCard } from "@/types/card";
import { Link } from "react-router-dom";

const CsCard = (props: ICsCard) => {
  return (
    <Link to={`/card/${props.id}`}>
      <S.div.ArcadeCard>{props.title}</S.div.ArcadeCard>
    </Link>
  );
};

export default CsCard;
