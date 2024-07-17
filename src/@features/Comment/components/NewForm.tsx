import { SubmitHandler } from "react-hook-form";

import useComment from "../useComment";
import useCommentMutation from "../useCommentMutation";
import { IComment } from "../type";
import CommentForm from "@/components/molecules/CommentForm";

const NewForm = () => {
  const csCardId = useComment((state) => state.csCardId);

  const { mutationAddComment } = useCommentMutation();
  const onAddComment: SubmitHandler<IComment> = (data) =>
    mutationAddComment.mutate(data);

  return (
    csCardId && <CommentForm csCardId={csCardId} onSubmit={onAddComment} />
  );
};

export default NewForm;
