import * as S from "@/styles/index.style";
import Comment from "./Comment";
import useCommentQuery from "../useCommentQuery";
import { useEffect } from "react";
import useComment from "../useComment";

const List = () => {
  const { comments } = useCommentQuery();
  const setCommentsCount = useComment((state) => state.setCommentsCount);

  useEffect(() => {
    setCommentsCount(comments.length);
  }, [comments, setCommentsCount]);

  return (
    <S.div.Column $gap={10}>
      {comments.length === 0 ? (
        <p>댓글이 없습니다.</p>
      ) : (
        comments?.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))
      )}
    </S.div.Column>
  );
};

export default List;
