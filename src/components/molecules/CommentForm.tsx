import * as S from "@/styles/index.style";
import { IComment } from "@/types/comment";
import React, { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  csCardId: number;
  comment?: IComment;
  onSubmit: SubmitHandler<IComment>;
}

const CommentForm = ({ csCardId, comment, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IComment>({
    defaultValues: {
      id: comment?.id || 0,
      cs_card_id: csCardId,
      author: comment?.author || "",
      content: comment?.content || "",
      password: "",
    },
  });

  const isEditMode = useRef(comment !== undefined);

  return (
    <form
      onSubmit={handleSubmit((res) => {
        onSubmit(res);
        reset();
      })}
    >
      <S.div.Column $gap={10}>
        <S.div.Row $gap={10} style={{}}>
          <S.div.Column>
            <S.input.Input
              type="text"
              placeholder="작성자명"
              readOnly={isEditMode.current}
              {...register("author", {
                required: true,
              })}
            />
            {errors.author && (
              <S.span.ErrorSpan>작성자명을 입력해주세요.</S.span.ErrorSpan>
            )}
          </S.div.Column>
          <S.div.Column>
            <S.input.Input
              type="password"
              placeholder="비밀번호"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <S.span.ErrorSpan>비밀번호를 입력해주세요.</S.span.ErrorSpan>
            )}
          </S.div.Column>
        </S.div.Row>
        <S.div.Column>
          <S.input.TextArea
            placeholder="댓글"
            {...register("content", { required: true })}
          />
          {errors.content && (
            <S.span.ErrorSpan>댓글내용을 입력해주세요.</S.span.ErrorSpan>
          )}
        </S.div.Column>
        <S.button.Button>댓글 {comment ? "수정" : "작성"}</S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default CommentForm;
