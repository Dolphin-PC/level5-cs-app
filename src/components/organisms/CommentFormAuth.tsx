import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import * as S from "@/styles/index.style";
import { IComment } from "@/@features/Comment/type";
import { AuthCommentFormSchema, authCommentFormSchema } from "@/@features/Comment/yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  comment?: IComment;
  onSubmit: SubmitHandler<AuthCommentFormSchema>;
}

const CommentFormAuth = ({ comment, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthCommentFormSchema>({
    defaultValues: comment,
    resolver: yupResolver(authCommentFormSchema),
  });

  const isEditMode = useRef(comment !== undefined);

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e);
        reset();
      }}
    >
      <S.div.Column $gap={10}>
        <S.div.Column>
          <S.input.TextArea placeholder="댓글" {...register("content")} />
          {errors.content && <S.span.ErrorSpan>{errors.content.message}</S.span.ErrorSpan>}
        </S.div.Column>
        <S.button.Button>댓글 {isEditMode.current ? "수정" : "작성"}</S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default CommentFormAuth;
