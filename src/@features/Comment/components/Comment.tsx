import { SubmitHandler } from "react-hook-form";
import React, { Fragment, useState } from "react";

import * as S from "@/styles/index.style";
import EditIcon from "@/assets/icons/edit.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import useComment from "../useComment";
import useCommentMutation from "../useCommentMutation";
import { IComment } from "../type";
import CommentForm from "@/components/organisms/CommentForm";
import useAuth from "@/@features/Auth/useAuth";
import AuthCommentForm from "@/components/organisms/AuthCommentForm";
import { AuthCommentFormSchema, CommentFormSchema } from "../yup";

interface Props {
  comment: IComment;
}

const Comment = ({ comment }: Props) => {
  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.userId);

  const [isEditMode, setIsEditMode] = useState(false);
  const confirmPassword = useComment((state) => state.confirmPassword);

  const { mutationDeleteComment, mutationUpateComment } = useCommentMutation();

  const isOwner = comment.userId === userId;
  const isAnonymousOwner = comment.password !== undefined;

  const toggleEditMode = () => {
    switch (true) {
      // 수정모드 -> 뷰모드
      case isEditMode:
        setIsEditMode(false);
        break;
      // 소유자 -> 수정모드
      case isOwner:
        setIsEditMode(true);
        break;
      // 익명소유자 -> 비밀번호 확인 후 수정모드
      default: {
        if (confirmPassword(comment)) setIsEditMode(true);
      }
    }
  };

  const handleUpdateComment: SubmitHandler<
    AuthCommentFormSchema | CommentFormSchema
  > = (data) => {
    mutationUpateComment.mutate({ ...comment, ...data });
    setIsEditMode(false);
  };

  const handleDeleteComment = () => {
    if (isOwner && !confirm("정말 삭제하시겠습니까?")) return;
    if (isAnonymousOwner && !confirmPassword(comment)) return;

    mutationDeleteComment.mutate(comment.id);
  };

  const onUpdateCommentAuth = (data: AuthCommentFormSchema) =>
    handleUpdateComment(data);
  const onUpdateComment = (data: CommentFormSchema) =>
    handleUpdateComment(data);

  return (
    <S.div.Paper key={comment.id}>
      {(isOwner || isAnonymousOwner) && (
        <S.div.Row style={{ justifyContent: "flex-end" }}>
          <S.button.IconButton onClick={handleDeleteComment}>
            <DeleteIcon />
          </S.button.IconButton>
          <S.button.IconButton onClick={toggleEditMode}>
            <EditIcon />
          </S.button.IconButton>
        </S.div.Row>
      )}

      {!isEditMode && (
        <Fragment>
          <h3>{comment.userId ?? "익명"}</h3>
          <p>{comment.content}</p>
        </Fragment>
      )}

      {isEditMode &&
        (isAuth() ? (
          <AuthCommentForm onSubmit={onUpdateCommentAuth} comment={comment} />
        ) : (
          <CommentForm onSubmit={onUpdateComment} comment={comment} />
        ))}
    </S.div.Paper>
  );
};

export default React.memo(Comment);
