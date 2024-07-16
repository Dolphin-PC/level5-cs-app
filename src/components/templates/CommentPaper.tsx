import * as S from "@/styles/index.style";
import useComment from "@/@features/Comment/useComment";
import Comment from "@/@features/Comment";
import { useLayoutEffect } from "react";

const CommentPaper = ({ csCardId }: { csCardId: number }) => {
  const setCsCardId = useComment((state) => state.setCsCardId);

  //* 렌더가 되기전에, csCardId를 설정
  // useEffect로 할 경우, 하위 컴포넌트에서 api 호출 -> 지연 -> csCardId설정 -> api 호출 -> 지연 의 경우가 발생함
  useLayoutEffect(() => {
    setCsCardId(csCardId);
  }, [csCardId, setCsCardId]);

  return (
    <S.div.Paper>
      <Comment.NewForm />
      <S.div.Gap $height={30} $width={0} />
      <Comment.List />
    </S.div.Paper>
  );
};

export default CommentPaper;
