import { getCommentListById } from "@/api/comments";
import * as S from "@/styles/index.style";
import { useSuspenseQuery } from "@tanstack/react-query";

const CsCardCommentPaper = ({ id }: { id: number }) => {
  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", id],
    queryFn: ({ queryKey }) => getCommentListById(queryKey[1] as number),
  });

  return (
    <S.div.Paper>
      <p>댓글이 없습니다.</p>
      {comments?.map((comment) => (
        <div key={comment.id}>
          <p>{comment.content}</p>
        </div>
      ))}
    </S.div.Paper>
  );
};

export default CsCardCommentPaper;
