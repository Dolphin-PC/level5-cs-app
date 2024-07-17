import * as S from "@/styles/index.style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema, RegisterSchema } from "@/@features/Auth/yup";
import { RegisterReq } from "@/@features/Auth/types";

interface Props {
  onSubmit: (data: RegisterReq) => void;
}

const RegisterForm = ({ onSubmit }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <label htmlFor="nickname">닉네임</label>
          <S.input.Input
            type="nickname"
            id="nickname"
            placeholder="닉네임"
            {...register("nickname")}
          />
          {errors.nickname && (
            <S.span.ErrorSpan>{errors.nickname.message}</S.span.ErrorSpan>
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
        <S.button.Button $size="large">회원가입</S.button.Button>
      </S.div.Column>
    </form>
  );
};

export default RegisterForm;
