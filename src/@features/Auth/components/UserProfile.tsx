import { useSuspenseQuery } from "@tanstack/react-query";

import * as S from "@/styles/index.style";
import useAuth from "../useAuth";
import { user } from "../api";
import { useEffect } from "react";

const UserProfile = () => {
  const accessToken = useAuth((state) => state.accessToken);
  const updateProfile = useAuth((state) => state.updateProfile);

  const { data: profile } = useSuspenseQuery({
    queryKey: ["user", accessToken],
    queryFn: ({ queryKey }) => user(queryKey[1] as string),
  });

  useEffect(() => {
    updateProfile(profile);
  }, [updateProfile, profile]);

  return (
    <S.div.Paper $width="50%">
      <S.div.Column $gap={20}>
        <S.div.Column>
          <label>ID</label>
          <span>{profile.id}</span>
        </S.div.Column>

        <S.div.Column>
          <label>닉네임</label>
          <span>{profile.nickname}</span>
        </S.div.Column>

        <S.div.Column>
          <label>프로필 이미지</label>
          <S.img.Profile $imgSrc={profile.avatar} />
        </S.div.Column>
      </S.div.Column>

      {/* {profile.avatar} */}
    </S.div.Paper>
  );
};

export default UserProfile;
