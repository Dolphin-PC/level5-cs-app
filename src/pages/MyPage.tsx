import { profile } from "@/@features/Auth/api";
import UserProfile from "@/@features/Auth/components/UserProfile";
import useAuth from "@/@features/Auth/useAuth";
import LoadingFallbackUI from "@/components/atoms/LoadingFallbackUI/LoadingFallbackUI";
import * as S from "@/styles/index.style";
import { FormEvent, Suspense } from "react";

const MyPage = () => {
  const accessToken = useAuth((state) => state.accessToken);

  const handleUpdateProfile = async (e: FormEvent) => {
    e.preventDefault();
    if (accessToken === null) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const nickname = formData.get("nickname") as string;
    const avatar = formData.get("avatar") as File;

    const res = await profile({ nickname, avatar, accessToken });

    console.log({ res });
  };
  return (
    <S.div.Container>
      <Suspense fallback={<LoadingFallbackUI />}>
        <UserProfile />
      </Suspense>

      <h4>프로필 변경</h4>
      <form onSubmit={handleUpdateProfile}>
        <input type="file" />
        <input type="text" placeholder="닉네임" />
      </form>
    </S.div.Container>
  );
};

export default MyPage;
