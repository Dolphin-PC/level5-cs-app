import UpdateUserProfile from "@/@features/Auth/components/UpdateUserProfile";
import UserProfile from "@/@features/Auth/components/UserProfile";
import ErrorFallbackUI from "@/components/atoms/ErrorFallback";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";
import * as S from "@/styles/index.style";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const MyPage = () => {
  return (
    <S.div.Container>
      <ErrorBoundary fallback={<ErrorFallbackUI />}>
        <Suspense fallback={<LoadingFallbackUI />}>
          <h1>마이페이지</h1>
          <UserProfile />

          <h2>프로필 변경</h2>
          <UpdateUserProfile />
        </Suspense>
      </ErrorBoundary>
    </S.div.Container>
  );
};

export default MyPage;
