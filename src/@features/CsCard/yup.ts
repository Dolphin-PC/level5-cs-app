import * as yup from "yup";

const title = yup.string().required("제목을 입력해주세요.");
const content = yup.string().required("내용을 입력해주세요.");
const password = yup.string().required("비밀번호를 입력해주세요.");

export const authCardFormSchema = yup.object().shape({
  title,
  content,
});
export type AuthCardFormSchema = yup.InferType<typeof authCardFormSchema>;

export const cardFormSchema = yup.object().shape({
  title,
  content,
  password,
});
export type CardFormSchema = yup.InferType<typeof cardFormSchema>;
