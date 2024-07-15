import CommentForm from "@/components/molecules/CommentForm";
import useComment from "../useComment";
import { IComment } from "@/types/comment";
import { SubmitHandler } from "react-hook-form";
import useCommentQuery from "../useCommentQuery";

const EditForm = () => {
  const [csCardId, editComment] = useComment((state) => [
    state.csCardId,
    state.editComment,
  ]);

  const { mutateUpateComment } = useCommentQuery();

  const onEditComment: SubmitHandler<IComment> = (data) =>
    mutateUpateComment.mutate(data);

  return (
    editComment && (
      <CommentForm
        csCardId={csCardId}
        onSubmit={onEditComment}
        comment={editComment}
      />
    )
  );
};

export default EditForm;
