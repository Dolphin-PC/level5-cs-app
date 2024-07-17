import { Link } from "react-router-dom";

import * as S from "@/styles/index.style";
import { ICsCard } from "@/@features/CsCard/type";

const CsCardButton = (props: ICsCard) => {
  return (
    <Link to={`/card/${props.id}`}>
      <S.div.ArcadeCard>{props.title}</S.div.ArcadeCard>
    </Link>
  );
};

export default CsCardButton;
