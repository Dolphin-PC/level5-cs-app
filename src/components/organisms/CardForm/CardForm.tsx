import { addNewCsCard } from "@/api/cs-card";
import * as S from "@/styles/index.style";
import { ICsCard } from "@/types/card";
import { encrypt } from "@/util/util";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CardForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICsCard>();

  const onAddNewCard: SubmitHandler<ICsCard> = async (data) => {
    try {
      data.password = encrypt(data.password);
      const res = await addNewCsCard(data);

      alert("정상 등록되었습니다.");
      navigate("/card/" + res.id);
    } catch (error) {
      console.error(error);
      alert("오류가 발생했습니다.");
      window.location.reload();
    }
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
        제출
      </S.button.Button>
    </form>
  );
};

export default CardForm;
