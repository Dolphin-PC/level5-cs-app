import { SubmitHandler, useForm } from "react-hook-form";

import { ICsCard } from "@/@features/CsCard/type";
import * as S from "@/styles/index.style";
import { useRef } from "react";
import { authCardFormSchema, AuthCardFormSchema } from "@/@features/CsCard/yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Props {
  onSubmit: SubmitHandler<AuthCardFormSchema>;
  csCard?: ICsCard;
}

const CardFormAuth = ({ csCard, onSubmit }: Props) => {
  const isEditMode = useRef<boolean>(!csCard);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthCardFormSchema>({
    defaultValues: csCard,
    resolver: yupResolver(authCardFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">제목</label>
      <S.input.Input type="text" {...register("title")} />
      {errors.title && <S.span.ErrorSpan>{errors.title.message}</S.span.ErrorSpan>}
      <S.div.Gap $height={20} $width={0} />

      <label htmlFor="content">내용</label>
      <S.input.TextArea {...register("content")} />
      {errors.content && <S.span.ErrorSpan>{errors.content.message}</S.span.ErrorSpan>}
      <S.div.Gap $height={20} $width={0} />

      <S.button.Button $fullWidth type="submit">
        {isEditMode.current ? "작성" : "수정"}
      </S.button.Button>
    </form>
  );
};

export default CardFormAuth;
