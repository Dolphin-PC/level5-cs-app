import { Suspense } from "react";
import * as S from "@/styles/index.style";
import Header from "@/components/atoms/Header";
import { Navigate, useParams } from "react-router-dom";
import CsCardDetail from "@/components/atoms/CsCardDetail";

const CardDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(Number(id))) return <Navigate to="/" />;

  return (
    <S.div.Container>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <CsCardDetail id={Number(id)} />
      </Suspense>
    </S.div.Container>
  );
};

export default CardDetailPage;
