import { deleteCsCard, getCsCardById, updateCsCard } from "@/api/cs-card";
import { ICsCard } from "@/types/card";
import { decrypt } from "@/util/util";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
}

export const useHook = ({ id }: Props) => {
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  /** 카드 데이터 호출 */
  const { data: card } = useSuspenseQuery({
    queryKey: ["card", id],
    queryFn: ({ queryKey }) => getCsCardById(queryKey[1] as number),
  });

  /**
   * @desc 카드 수정 API
   * @param {ICsCard} data
   */
  const onEditCard: SubmitHandler<ICsCard> = async (data) => {
    await updateCsCard(data);
    alert("정상 수정되었습니다.");
    navigate(0);
  };

  /**
   * @desc 카드 삭제 API
   * @param id
   */
  const onDeleteCard = async (id: ICsCard["id"]) => {
    if (confirmPassword() === false) return;

    await deleteCsCard(id);
    alert("정상 삭제되었습니다.");
    navigate("/");
  };

  /**
   * @desc 편집/보기 모드 전환
   * - 편집 모드일 경우 비밀번호 확인
   */
  const onEditMode = () => {
    if (isEditMode == false) {
      if (confirmPassword() === false) return;
    }
    setIsEditMode((prev) => !prev);
  };

  /** 비밀번호 확인 로직 */
  const confirmPassword = (): boolean => {
    const inputPassword = prompt("비밀번호를 입력해주세요");
    if (inputPassword === null) return false;
    if (inputPassword !== decrypt(card.password)) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }
    return true;
  };

  return {
    card,
    isEditMode,
    onEditMode,
    onEditCard,
    onDeleteCard,
  };
};
