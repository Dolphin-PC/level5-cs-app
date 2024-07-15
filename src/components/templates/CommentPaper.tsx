import * as S from "@/styles/index.style";
import useComment from "@/@features/Comment/useComment";
import Comment from "@/@features/Comment";

const CommentPaper = ({ csCardId }: { csCardId: number }) => {
  const setCsCardId = useComment((state) => state.setCsCardId);
  setCsCardId(csCardId);

  return (
    <S.div.Paper>
      <Comment.Form />
      <Comment.List />
    </S.div.Paper>
  );
};

export default CommentPaper;
