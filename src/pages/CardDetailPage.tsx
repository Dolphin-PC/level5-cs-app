import { Suspense } from "react";
import * as S from "@/styles/index.style";
import Header from "@/components/atoms/Header";
import { Navigate, useParams } from "react-router-dom";
import CsCardPaper from "@/components/organisms/CsCardPaper";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallbackUI from "@/components/atoms/ErrorFallback";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";

const CardDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(Number(id))) return <Navigate to="/" />;

  return (
    <S.div.Container>
      <Header />

      <ErrorBoundary fallback={<ErrorFallbackUI />}>
        <Suspense fallback={<LoadingFallbackUI />}>
          <CsCardPaper id={Number(id)} />
        </Suspense>
      </ErrorBoundary>
    </S.div.Container>
  );
};

export default CardDetailPage;
