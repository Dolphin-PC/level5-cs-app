import * as S from "@/styles/index.style";
import useComment from "@/@features/Comment/useComment";
import Comment from "@/@features/Comment";
import { useLayoutEffect } from "react";

const CommentPaper = ({ csCardId }: { csCardId: number }) => {
  const setCsCardId = useComment((state) => state.setCsCardId);

  useLayoutEffect(() => {
    setCsCardId(csCardId);
  }, [setCsCardId, csCardId]);

  return (
    <S.div.Paper $width="50%">
      <Comment.NewForm />
      <S.div.Gap $height={50} $width={0} />
      <Comment.List />
    </S.div.Paper>
  );
};

export default CommentPaper;
