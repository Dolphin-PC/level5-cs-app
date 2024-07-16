import * as S from "@/styles/index.style";
import Comment from "./Comment";
import { getCommentListById } from "@/api/comments";
import { useSuspenseQuery } from "@tanstack/react-query";
import useComment from "../useComment";

const List = () => {
  const csCardId = useComment((state) => state.csCardId);
  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", csCardId],
    queryFn: ({ queryKey }) =>
      queryKey[1] ? getCommentListById(queryKey[1] as number) : null,
  });

  return (
    <S.div.Column $gap={10} style={{ height: "500px", overflow: "scroll" }}>
      {comments && comments.length === 0 ? (
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
