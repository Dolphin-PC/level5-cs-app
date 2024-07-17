import { useMutation, useQueryClient } from "@tanstack/react-query";

import useComment from "./useComment";
import { addComment, deleteComment, updateComment } from "./api";
import { AuthCommentReq, CommentReq, IComment } from "./type";

const useCommentMutation = () => {
  const [csCardId] = useComment((state) => [state.csCardId]);

  const queryClient = useQueryClient();

  const mutationAddComment = useMutation({
    mutationFn: (data: CommentReq) => addComment(data),
    onSuccess: (res) => {
      alert("댓글이 추가되었습니다.");
      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) => [
        ...prev,
        res,
      ]);
    },
  });

  const mutationAddCommentAuth = useMutation({
    mutationFn: (data: AuthCommentReq) => addComment(data),
    onSuccess: (res) => {
      alert("댓글이 추가되었습니다.");
      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) => [
        ...prev,
        res,
      ]);
    },
  });

  const mutationDeleteComment = useMutation({
    mutationFn: (id: number) => deleteComment(id),
    onSuccess: (deletedId) => {
      alert("댓글이 삭제되었습니다.");

      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) =>
        prev.filter((comment) => comment.id !== deletedId)
      );
    },
  });
  const mutationUpateComment = useMutation({
    mutationFn: (data: IComment) => updateComment(data),
    onSuccess: (res) => {
      alert("댓글이 수정되었습니다.");
      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) => [
        ...prev.map((comment) =>
          comment.id === res.id ? { ...comment, ...res } : comment
        ),
      ]);
    },
  });

  return {
    // comments,
    mutationAddComment,
    mutationAddCommentAuth,
    mutationUpateComment,
    mutationDeleteComment,
  };
};

export default useCommentMutation;
