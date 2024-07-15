import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useParams } from "react-router-dom";

import * as S from "@/styles/index.style";
import Header from "@/components/atoms/Header";
import ErrorFallbackUI from "@/components/atoms/ErrorFallback";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";
import CsCardPaper from "@/components/organisms/CsCardPaper/CsCardPaper";
import CsCardCommentPaper from "@/components/organisms/CsCardCommentPaper";

const CardDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(Number(id))) return <Navigate to="/" />;

  return (
    <S.div.Container>
      <Header />

      <ErrorBoundary fallback={<ErrorFallbackUI />}>
        <Suspense fallback={<LoadingFallbackUI />}>
          <h2>게시글</h2>
          <CsCardPaper id={Number(id)} />
        </Suspense>
      </ErrorBoundary>

      <Suspense fallback={<LoadingFallbackUI />}>
        <h2>댓글</h2>
        <CsCardCommentPaper csCardId={Number(id)} />
      </Suspense>
    </S.div.Container>
  );
};

export default CardDetailPage;
