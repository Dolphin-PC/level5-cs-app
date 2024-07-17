import { useSuspenseQuery } from "@tanstack/react-query";

import * as S from "@/styles/index.style";
import useAuth from "../useAuth";
import { user } from "../api";

const UserProfile = () => {
  const accessToken = useAuth((state) => state.accessToken);

  const { data: profile } = useSuspenseQuery({
    queryKey: ["user", accessToken],
    queryFn: ({ queryKey }) => user(queryKey[1] as string),
  });

  return (
    <S.div.Paper $width="50%">
      <p>ID</p>
      <h4>{profile.id}</h4>

      <p>닉네임</p>
      <h4>{profile.nickname}</h4>
      {/* {profile.avatar} */}
    </S.div.Paper>
  );
};

export default UserProfile;
