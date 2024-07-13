import { addNewCsCard } from "@/api/cs-card";
import * as S from "@/styles/index.style";
import { ICsCard } from "@/types/card";
import { SubmitHandler, useForm } from "react-hook-form";

const CardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICsCard>();

  const onAddNewCard: SubmitHandler<ICsCard> = async (data) => {
    const res = await addNewCsCard(data);
    console.log({ res });
  };

  return (
    <form onSubmit={handleSubmit(onAddNewCard)}>
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

      {/* <label htmlFor="tags">태그</label>
    <S.input.Input type="text" id="tags" name="tags" />
    <S.div.Gap $height={20} $width={0} /> */}

      <S.button.Button $fullWidth type="submit">
        제출
      </S.button.Button>
    </form>
  );
};

export default CardForm;
