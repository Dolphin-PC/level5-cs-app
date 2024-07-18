import * as yup from "yup";

const id = yup.string().required("아이디를 입력해주세요.").min(4, "아이디는 4글자 이상이어야 합니다.");
const password = yup.string().required("비밀번호를 입력해주세요.").min(4, "비밀번호는 4글자 이상이어야 합니다.");
const nickname = yup.string().required("닉네임을 입력해주세요.");

export const loginSchema = yup.object().shape({
  id,
  password,
});
export type LoginSchema = yup.InferType<typeof loginSchema>;

export const registerSchema = yup.object().shape({
  id,
  password,
  nickname,
});
export type RegisterSchema = yup.InferType<typeof registerSchema>;
