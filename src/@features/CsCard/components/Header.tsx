import * as S from "@/styles/index.style";
import EditIcon from "@/assets/icons/edit.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import useCsCard from "../useCsCard";
import { deleteCsCard } from "@/api/cs-cards";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { csCard, toggleEditMode, confirmPassword } = useCsCard();
  const navigate = useNavigate();

  if (csCard === null) return null;

  const onDeleteCard = async () => {
    if (confirmPassword() === false) return;
    await deleteCsCard(csCard.id);
    alert("삭제되었습니다.");
    navigate("/");
  };

  return (
    <S.div.Row style={{ justifyContent: "space-between" }}>
      <small>id: {csCard.id}</small>
      <S.div.Row>
        <S.button.IconButton onClick={onDeleteCard}>
          <DeleteIcon />
        </S.button.IconButton>
        <S.button.IconButton onClick={toggleEditMode}>
          <EditIcon />
        </S.button.IconButton>
      </S.div.Row>
    </S.div.Row>
  );
};

export default Header;
