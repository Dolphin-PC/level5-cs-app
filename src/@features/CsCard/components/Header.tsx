import { useNavigate } from "react-router-dom";

import * as S from "@/styles/index.style";
import EditIcon from "@/assets/icons/edit.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import useCsCard from "../useCsCard";
import { deleteCsCard } from "../api";
import useAuth from "@/@features/Auth/useAuth";

const Header = () => {
  const userId = useAuth((state) => state.userId);
  const nickname = useAuth((state) => state.nickname);
  const { csCard, confirmPassword, setIsEditMode, isEditMode } = useCsCard();
  const navigate = useNavigate();

  if (csCard === null) return null;

  const isOwner = csCard.userId === userId;
  const isAnonymousOwner = csCard.password !== undefined;

  const toggleEditMode = () => {
    switch (true) {
      // 수정모드 -> 뷰모드
      case isEditMode:
        setIsEditMode(false);
        break;
      // 소유자 -> 수정모드
      case isOwner:
        setIsEditMode(true);
        break;
      // 익명소유자 -> 비밀번호 확인 후 수정모드
      default: {
        if (confirmPassword()) setIsEditMode(true);
      }
    }
  };

  const onDeleteCard = async () => {
    if (isOwner && !confirm("정말 삭제하시겠습니까?")) return;
    if (isAnonymousOwner && !confirmPassword()) return;

    await deleteCsCard(csCard.id);
    alert("삭제되었습니다.");
    navigate("/");
  };

  return (
    <S.div.Row style={{ justifyContent: "space-between" }}>
      <p>
        작성자 : {isOwner && nickname} {isAnonymousOwner && "익명"}
      </p>
      {isOwner || isAnonymousOwner ? (
        <S.div.Row>
          <S.button.IconButton onClick={onDeleteCard}>
            <DeleteIcon />
          </S.button.IconButton>
          <S.button.IconButton onClick={toggleEditMode}>
            <EditIcon />
          </S.button.IconButton>
        </S.div.Row>
      ) : null}
    </S.div.Row>
  );
};

export default Header;
