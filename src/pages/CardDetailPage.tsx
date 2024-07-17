import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useParams } from "react-router-dom";

import * as S from "@/styles/index.style";
import ErrorFallbackUI from "@/components/atoms/ErrorFallback";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";
import RightPanel from "@/components/templates/RightPanel";
import CsCardNavigation from "@/components/organisms/CsCardNavigation";
import CsCardPaper from "@/@features/CsCard/components/CsCardPaper";
import CommentPaper from "@/@features/Comment/components/CommentPaper";

const CardDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id || isNaN(Number(id))) return <Navigate to="/" />;

  return (
    <S.div.Container>
      {/* <ErrorBoundary fallback={<ErrorFallbackUI />}>
        <Suspense fallback={<LoadingFallbackUI />}>
          <h2>CS카드</h2>
          <CsCardPaper id={Number(id)} />
        </Suspense>
      </ErrorBoundary>

      <Suspense fallback={<LoadingFallbackUI />}>
        <h2>댓글</h2>
        <CommentPaper csCardId={Number(id)} />
      </Suspense> */}

      <RightPanel
        main={
          <ErrorBoundary fallback={<ErrorFallbackUI />}>
            <Suspense fallback={<LoadingFallbackUI />}>
              <h2>CS카드</h2>
              <CsCardPaper id={Number(id)} />
            </Suspense>
          </ErrorBoundary>
        }
        right={
          <Suspense fallback={<LoadingFallbackUI />}>
            <h2>댓글</h2>
            <CommentPaper csCardId={Number(id)} />
          </Suspense>
        }
      />
      <Suspense fallback={<LoadingFallbackUI />}>
        <CsCardNavigation csCardId={Number(id)} />
      </Suspense>
    </S.div.Container>
  );
};

export default CardDetailPage;
