import * as S from "@/styles/index.style";
import { ICsCard } from "@/types/card";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  onSubmit: SubmitHandler<ICsCard>;
  card?: ICsCard;
}

const CardForm = ({ card, onSubmit }: Props) => {
  const isEditMode = !card;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICsCard>({
    defaultValues: {
      id: card?.id || 0,
      title: card?.title || "",
      content: card?.content || "",
      password: "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">제목</label>
      <S.input.Input type="text" {...register("title", { required: true })} />
      {errors.title && <S.span.ErrorSpan>제목을 입력해주세요</S.span.ErrorSpan>}
      <S.div.Gap $height={20} $width={0} />

      <label htmlFor="content">내용</label>
      <S.input.TextArea {...register("content", { required: true })} />
      {errors.content && (
        <S.span.ErrorSpan>내용을 입력해주세요</S.span.ErrorSpan>
      )}
      <S.div.Gap $height={20} $width={0} />

      <label htmlFor="password">비밀번호</label>
      <S.input.Input
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <S.span.ErrorSpan>비밀번호를 입력해주세요</S.span.ErrorSpan>
      )}
      <S.div.Gap $height={20} $width={0} />

      <S.button.Button $fullWidth type="submit">
        {isEditMode ? "제출" : "수정"}
      </S.button.Button>
    </form>
  );
};

export default CardForm;
