import { IComment } from "@/types/comment";
import { SubmitHandler } from "react-hook-form";
import useComment from "../useComment";
import CommentForm from "@/components/molecules/CommentForm";
import useCommentQuery from "../useCommentQuery";

const NewForm = () => {
  const csCardId = useComment((state) => state.csCardId);

  const { mutateAddComment } = useCommentQuery();

  const onAddComment: SubmitHandler<IComment> = (data) =>
    mutateAddComment.mutate(data);

  return <CommentForm csCardId={csCardId} onSubmit={onAddComment} />;
};

export default NewForm;
