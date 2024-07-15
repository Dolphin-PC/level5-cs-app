import * as S from "@/styles/index.style";
import { IComment } from "@/types/comment";
import useComment from "../useComment";
import { Fragment } from "react";
import EditForm from "./EditForm";
import EditIcon from "@/assets/icons/edit.svg?react";
import DeleteIcon from "@/assets/icons/delete.svg?react";
import useCommentQuery from "../useCommentQuery";

interface Props {
  comment: IComment;
}

const Comment = ({ comment }: Props) => {
  const [editComment, toggleEditComment, confirmPassword] = useComment(
    (state) => [
      state.editComment,
      state.toggleEditComment,
      state.confirmPassword,
    ]
  );

  const { mutateDeleteComment } = useCommentQuery();

  const onDeleteCard = () =>
    confirmPassword(comment) && mutateDeleteComment.mutate(comment.id);

  return (
    <S.div.Paper key={comment.id}>
      <S.div.Row style={{ justifyContent: "flex-end" }}>
        <S.button.IconButton onClick={onDeleteCard}>
          <DeleteIcon />
        </S.button.IconButton>
        <S.button.IconButton onClick={() => toggleEditComment(comment)}>
          <EditIcon />
        </S.button.IconButton>
      </S.div.Row>
      {comment === editComment ? (
        <EditForm />
      ) : (
        <Fragment>
          <h3>{comment.author}</h3>
          <p>{comment.content}</p>
        </Fragment>
      )}
    </S.div.Paper>
  );
};

export default Comment;
