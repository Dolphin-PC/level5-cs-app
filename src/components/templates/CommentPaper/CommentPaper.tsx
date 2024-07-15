import * as S from "@/styles/index.style";
import useComment from "./useComment";
import CommentForm from "@/components/organisms/CommentForm/CommentForm";
import CommentList from "@/components/organisms/CommentList/CommentList";

const CommentPaper = ({ csCardId }: { csCardId: number }) => {
  const setCsCardId = useComment((state) => state.setCsCardId);
  setCsCardId(csCardId);

  return (
    <S.div.Paper>
      <CommentForm />
      <CommentList />
    </S.div.Paper>
  );
};

export default CommentPaper;
