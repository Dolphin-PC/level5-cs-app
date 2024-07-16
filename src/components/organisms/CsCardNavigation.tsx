import { getNextCsCardId, getPrevCsCardId } from "@/api/cs-cards";
import * as S from "@/styles/index.style";
import { ICsCard } from "@/types/csCard";
import { useSuspenseQueries } from "@tanstack/react-query";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  csCardId: ICsCard["id"];
}

const CsCardNavigation = ({ csCardId }: Props) => {
  const navigate = useNavigate();

  const [{ data: nextData }, { data: prevData }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["nextCsCard", csCardId],
        queryFn: () => getNextCsCardId(csCardId),
      },
      {
        queryKey: ["prevCsCard", csCardId],
        queryFn: () => getPrevCsCardId(csCardId),
      },
    ],
  });

  const handleNext = useCallback(() => {
    nextData.length > 0 &&
      navigate(`/card/${nextData[0].id}`, { replace: true });
  }, [navigate, nextData]);

  const handlePrev = useCallback(() => {
    prevData.length > 0 && navigate(`/card/${prevData[0].id}`);
  }, [navigate, prevData]);
  const handleRandom = useCallback(() => {
    const ids: number[] = [];
    nextData.forEach((data) => ids.push(data.id));
    prevData.forEach((data) => ids.push(data.id));

    const randomId = ids[Math.floor(Math.random() * ids.length)];
    ids.length > 0 && navigate(`/card/${randomId}`, { replace: true });
  }, [navigate, nextData, prevData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowUp") {
        handleRandom();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, handleRandom]);

  return (
    <S.div.Column style={{ position: "fixed", bottom: 20, padding: 10 }}>
      <S.div.Row $gap={20}>
        {prevData.length > 0 && (
          <S.button.CircleButton onClick={handlePrev}>
            이전
            <br />
            (left)
          </S.button.CircleButton>
        )}
        <S.button.CircleButton onClick={handleRandom}>
          랜덤
          <br />
          (UP)
        </S.button.CircleButton>
        {nextData.length > 0 && (
          <S.button.CircleButton onClick={handleNext}>
            다음
            <br />
            (next)
          </S.button.CircleButton>
        )}
      </S.div.Row>
    </S.div.Column>
  );
};

export default CsCardNavigation;
