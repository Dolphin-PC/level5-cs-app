import * as yup from "yup";

const password = yup.string().required("비밀번호를 입력해주세요.");
const content = yup.string().required("댓글내용을 입력해주세요.");

export const authCommentFormSchema = yup.object().shape({
  content,
});
export type AuthCommentFormSchema = yup.InferType<typeof authCommentFormSchema>;

export const commentFormSchema = yup.object().shape({
  password,
  content,
});
export type CommentFormSchema = yup.InferType<typeof commentFormSchema>;
