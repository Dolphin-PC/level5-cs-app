import * as S from "@/styles/index.style";
import { IComment } from "@/types/comment";
import useComment from "../useComment";
import React, { Fragment, useState } from "react";
import EditIcon from "@/assets/icons/edit.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import useCommentMutation from "../useCommentMutation";
import CommentForm from "@/components/molecules/CommentForm";
import { SubmitHandler } from "react-hook-form";

interface Props {
  comment: IComment;
}

const Comment = ({ comment }: Props) => {
  const [isEdit, setIsEdit] = useState(false);
  const confirmPassword = useComment((state) => state.confirmPassword);

  const { mutationDeleteComment, mutationUpateComment } = useCommentMutation();

  const handleUpdateComment: SubmitHandler<IComment> = (data) => {
    mutationUpateComment.mutate(data);
    setIsEdit(false);
  };
  const handleDeleteComment = () => {
    if (confirmPassword(comment)) {
      mutationDeleteComment.mutate(comment.id);
    }
  };

  const toggleEditComment = () => {
    if (isEdit) {
      setIsEdit(false);
      return;
    }
    if (confirmPassword(comment)) {
      setIsEdit(true);
    }
  };

  return (
    <S.div.Paper key={comment.id}>
      <S.div.Row style={{ justifyContent: "flex-end" }}>
        <S.button.IconButton onClick={handleDeleteComment}>
          <DeleteIcon />
        </S.button.IconButton>
        <S.button.IconButton onClick={toggleEditComment}>
          <EditIcon />
        </S.button.IconButton>
      </S.div.Row>

      {isEdit ? (
        <CommentForm
          csCardId={comment.cs_card_id}
          onSubmit={handleUpdateComment}
          comment={comment}
        />
      ) : (
        <Fragment>
          <h3>{comment.author}</h3>
          <p>{comment.content}</p>
        </Fragment>
      )}
    </S.div.Paper>
  );
};

export default React.memo(Comment);
