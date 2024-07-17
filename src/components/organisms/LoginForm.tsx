import { login } from "@/api/auth";
import * as S from "@/styles/index.style";
import { IAuth } from "@/types/auth";
import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IAuth>({
    defaultValues: {
      id: "",
      password: "",
    },
  });

  const handleLogin = async (data: IAuth) => {
    const res = await login(data);
    console.log({ res });
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.div.Column $gap={30}>
        <div>
          <label htmlFor="id">아이디</label>
          <S.input.Input
            type="text"
            id="id"
            placeholder="아이디"
            {...register("id", { required: "아이디를 입력해주세요." })}
          />
          {errors.id && (
            <S.span.ErrorSpan>{errors.id.message}</S.span.ErrorSpan>
          )}
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <S.input.Input
            type="password"
            id="password"
            placeholder="비밀번호"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
          />
          {errors.password && (
            <S.span.ErrorSpan>{errors.password.message}</S.span.ErrorSpan>
          )}
        </div>
        <S.button.Button $size="large">로그인</S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default LoginForm;
