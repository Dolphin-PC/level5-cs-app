import { useSuspenseQuery } from "@tanstack/react-query";

import * as S from "@/styles/index.style";
import { getCommentListById } from "../api";
import useComment from "../useComment";
import Comment from "./Comment";

const List = () => {
  const csCardId = useComment((state) => state.csCardId);
  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", csCardId],
    queryFn: ({ queryKey }) =>
      queryKey[1] ? getCommentListById(queryKey[1] as number) : null,
  });

  return (
    <S.div.Column
      $gap={10}
      style={{
        height: "500px",
        overflow: "scroll",
        scrollbarWidth: "none",
        padding: "5px",
      }}
    >
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
