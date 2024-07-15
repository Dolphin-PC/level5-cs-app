import { getCommentListById } from "@/api/comments";
import useComment from "@/components/templates/CommentPaper/useComment";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Fragment } from "react";

const CommentList = () => {
  const csCardId = useComment((state) => state.csCardId);

  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", csCardId],
    queryFn: ({ queryKey }) => getCommentListById(queryKey[1] as number),
  });

  return (
    <Fragment>
      {comments.length === 0 ? (
        <p>댓글이 없습니다.</p>
      ) : (
        comments?.map((comment) => (
          <div key={comment.id}>
            <h3>{comment.author}</h3>
            <p>{comment.content}</p>
          </div>
        ))
      )}
    </Fragment>
  );
};

export default CommentList;
