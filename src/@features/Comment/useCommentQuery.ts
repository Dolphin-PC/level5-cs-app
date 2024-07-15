import {
  addComment,
  deleteComment,
  getCommentListById,
  updateComment,
} from "@/api/comments";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import useComment from "./useComment";
import { IComment } from "@/types/comment";

const useCommentQuery = () => {
  const [csCardId, toggleEditComment] = useComment((state) => [
    state.csCardId,
    state.toggleEditComment,
  ]);

  const queryClient = useQueryClient();

  const { data: comments } = useSuspenseQuery({
    queryKey: ["comments", csCardId],
    queryFn: ({ queryKey }) => getCommentListById(queryKey[1] as number),
  });

  const mutateAddComment = useMutation({
    mutationFn: (data: IComment) => addComment(data),
    onSuccess: (res) => {
      alert("댓글이 추가되었습니다.");
      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) => [
        ...prev,
        res,
      ]);
    },
  });

  const mutateUpateComment = useMutation({
    mutationFn: (data: IComment) => updateComment(data),
    onSuccess: (res) => {
      alert("댓글이 수정되었습니다.");
      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) => [
        ...prev.map((comment) =>
          comment.id === res.id ? { ...comment, ...res } : comment
        ),
      ]);
      toggleEditComment(null);
    },
  });

  const mutateDeleteComment = useMutation({
    mutationFn: (id: number) => deleteComment(id),
    onSuccess: (res) => {
      alert("댓글이 삭제되었습니다.");
      queryClient.setQueryData(["comments", csCardId], (prev: IComment[]) => [
        ...prev.filter((comment) => comment.id !== res),
      ]);
    },
  });

  return {
    comments,
    mutateAddComment,
    mutateUpateComment,
    mutateDeleteComment,
  };
};

export default useCommentQuery;
