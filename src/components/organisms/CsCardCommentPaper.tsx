import { addComment, getCommentListById } from "@/api/comments";
import * as S from "@/styles/index.style";
import { IComment } from "@/types/comment";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

const CsCardCommentPaper = ({ csCardId }: { csCardId: number }) => {
  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", csCardId],
    queryFn: ({ queryKey }) => getCommentListById(queryKey[1] as number),
  });

  const { register, handleSubmit } = useForm<IComment>({
    defaultValues: {
      cs_card_id: csCardId,
      author: "",
      content: "",
      password: "",
    },
  });

  const queryClient = useQueryClient();
  const mutateAddComment = useMutation({
    mutationFn: (data: IComment) => addComment(data),
    onSuccess: () => {
      alert("댓글이 추가되었습니다.");
      queryClient.invalidateQueries({ queryKey: ["comments", csCardId] });
    },
  });

  const onAddComment: SubmitHandler<IComment> = async (data) => {
    mutateAddComment.mutate(data);
  };

  return (
    <S.div.Paper>
      <form onSubmit={handleSubmit(onAddComment)}>
        <S.div.Row $gap={10}>
          <S.input.Input
            type="text"
            placeholder="작성자명"
            {...register("author")}
          />
          <S.input.Input
            type="password"
            placeholder="비밀번호"
            {...register("password")}
          />
        </S.div.Row>
        <S.input.TextArea placeholder="댓글" {...register("content")} />
        <S.button.Button $fullWidth>작성</S.button.Button>
      </form>
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
    </S.div.Paper>
  );
};

export default CsCardCommentPaper;
