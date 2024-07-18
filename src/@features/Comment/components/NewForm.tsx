import { SubmitHandler } from "react-hook-form";

import useComment from "../useComment";
import useCommentMutation from "../useCommentMutation";
import CommentForm from "@/components/organisms/CommentForm";
import useAuth from "@/@features/Auth/useAuth";
import { AuthCommentFormSchema, CommentFormSchema } from "../yup";
import CommentFormAuth from "@/components/organisms/CommentFormAuth";

const NewForm = () => {
  const isAuth = useAuth((state) => state.isAuth);
  const userId = useAuth((state) => state.userId);
  const avatar = useAuth((state) => state.avatar);
  const csCardId = useComment((state) => state.csCardId);

  const { mutationAddComment, mutationAddCommentAuth } = useCommentMutation();

  const onAddCommentAuth: SubmitHandler<AuthCommentFormSchema> = (data) => {
    if (csCardId === null || userId === null) return;
    mutationAddCommentAuth.mutate({ ...data, csCardId, userId, avatar });
  };

  const onAddComment: SubmitHandler<CommentFormSchema> = (data) => {
    if (csCardId === null) return;
    mutationAddComment.mutate({ ...data, csCardId });
  };

  if (csCardId === null) return null;
  return isAuth() ? <CommentFormAuth onSubmit={onAddCommentAuth} /> : <CommentForm onSubmit={onAddComment} />;
};

export default NewForm;
