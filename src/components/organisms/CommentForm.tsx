import { SubmitHandler, useForm } from "react-hook-form";

import * as S from "@/styles/index.style";
import { IComment } from "@/@features/Comment/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { CommentFormSchema, commentFormSchema } from "@/@features/Comment/yup";

interface Props {
  comment?: IComment;
  onSubmit: SubmitHandler<CommentFormSchema>;
}

const CommentForm = ({ comment, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommentFormSchema>({
    defaultValues: comment,
    resolver: yupResolver(commentFormSchema),
  });

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
        reset();
      }}
    >
      <S.div.Column $gap={10}>
        <S.div.Row $gap={10} style={{}}>
          <S.div.Column>
            <S.input.Input
              type="password"
              placeholder="비밀번호"
              {...register("password")}
            />
            {errors.password && (
              <S.span.ErrorSpan>{errors.password.message}</S.span.ErrorSpan>
            )}
          </S.div.Column>
        </S.div.Row>
        <S.div.Column>
          <S.input.TextArea placeholder="댓글" {...register("content")} />
          {errors.content && (
            <S.span.ErrorSpan>{errors.content.message}</S.span.ErrorSpan>
          )}
        </S.div.Column>
        <S.button.Button>댓글 {comment ? "수정" : "작성"}</S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default CommentForm;
