import * as S from "@/styles/index.style";
import { addComment } from "@/api/comments";
import useComment from "@/components/templates/CommentPaper/useComment";
import { IComment } from "@/types/comment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";

const CommentForm = () => {
  const csCardId = useComment((state) => state.csCardId);

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

  const onAddComment: SubmitHandler<IComment> = async (data) =>
    mutateAddComment.mutate(data);

  return (
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
  );
};

export default CommentForm;
