import * as S from "@/styles/index.style";
import EditIcon from "@/assets/icons/edit.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import CardInfo from "@/components/molecules/CardInfo";
import CardForm from "@/components/molecules/CardForm";
import { useHook } from "./useHook";

const CsCardPaper = ({ id }: { id: number }) => {
  const { card, isEditMode, onEditCard, onEditMode, onDeleteCard } = useHook({
    id,
  });

  return (
    <S.div.Paper>
      <S.div.Row style={{ justifyContent: "space-between" }}>
        <small>id: {card.id}</small>
        <S.div.Row>
          <S.button.IconButton onClick={() => onDeleteCard(card.id)}>
            <DeleteIcon />
          </S.button.IconButton>
          <S.button.IconButton onClick={onEditMode}>
            <EditIcon />
          </S.button.IconButton>
        </S.div.Row>
      </S.div.Row>
      {isEditMode ? (
        <CardForm onSubmit={onEditCard} card={card} />
      ) : (
        <CardInfo card={card} />
      )}
    </S.div.Paper>
  );
};

export default CsCardPaper;
