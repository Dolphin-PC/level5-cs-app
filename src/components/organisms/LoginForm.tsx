import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import * as S from "@/styles/index.style";
import { IAuth } from "@/@features/Auth/types";
import { loginSchema, LoginSchema } from "@/@features/Auth/yup";

interface Props {
  handleLogin: (data: IAuth) => void;
}

const LoginForm = ({ handleLogin }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchema>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <S.div.Column $gap={30}>
        <div>
          <label htmlFor="id">아이디</label>
          <S.input.Input
            type="text"
            id="id"
            placeholder="아이디"
            {...register("id")}
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
            {...register("password")}
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
