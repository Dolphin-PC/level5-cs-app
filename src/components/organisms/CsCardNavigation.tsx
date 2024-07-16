import useSearch from "@/@features/Search/useSearch";
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
  const searchText = useSearch((state) => state.searchText);
  const navigate = useNavigate();

  const [{ data: nextData }, { data: prevData }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["nextCsCard", csCardId],
        queryFn: () => getNextCsCardId(csCardId, searchText),
      },
      {
        queryKey: ["prevCsCard", csCardId],
        queryFn: () => getPrevCsCardId(csCardId, searchText),
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

  const handleHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleRandom = useCallback(() => {
    const ids: number[] = [];
    nextData.forEach((data) => ids.push(data.id));
    prevData.forEach((data) => ids.push(data.id));

    const randomId = ids[Math.floor(Math.random() * ids.length)];
    ids.length > 0 && navigate(`/card/${randomId}`, { replace: true });
  }, [navigate, nextData, prevData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          handleNext();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowUp":
          handleRandom();
          break;
        case "ArrowDown":
          handleHome();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, handleRandom, handleHome]);

  return (
    <S.div.Column style={{ position: "fixed", bottom: 20, padding: 10 }}>
      <S.div.Row $gap={20}>
        {prevData.length > 0 && (
          <S.button.CircleButton onClick={handlePrev}>
            이전
            <br />
            (PREV)
          </S.button.CircleButton>
        )}
        <S.div.Column $gap={20}>
          <S.button.CircleButton onClick={handleRandom}>
            랜덤
            <br />
            (UP)
          </S.button.CircleButton>
          <S.button.CircleButton onClick={handleHome}>
            HOME
            <br />
            (DOWN)
          </S.button.CircleButton>
        </S.div.Column>
        {nextData.length > 0 && (
          <S.button.CircleButton onClick={handleNext}>
            다음
            <br />
            (NEXT)
          </S.button.CircleButton>
        )}
      </S.div.Row>
    </S.div.Column>
  );
};

export default CsCardNavigation;
