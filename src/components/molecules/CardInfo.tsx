import { ICsCard } from "@/types/csCard";
import { Fragment } from "react/jsx-runtime";

interface Props {
  card: ICsCard;
}

const CardInfo = ({ card }: Props) => {
  return (
    <Fragment>
      <h1>{card.title}</h1>
      <hr />
      <span>{card.content}</span>
    </Fragment>
  );
};

export default CardInfo;
