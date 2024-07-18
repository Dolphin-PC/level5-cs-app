import { useQueryClient, useMutation } from "@tanstack/react-query";

import * as S from "@/styles/index.style";
import useAuth from "../useAuth";
import { profile } from "../api";
import { ProfileReq } from "../types";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const UpdateUserProfile = () => {
  const navigate = useNavigate();
  const accessToken = useAuth((state) => state.accessToken);

  const queryClient = useQueryClient();
  const updateProfileMutation = useMutation({
    mutationFn: (data: ProfileReq) => {
      return profile(data);
    },
    onSuccess: (res) => {
      console.log({ res });
      alert(res.message);
      queryClient.invalidateQueries({
        queryKey: ["user", accessToken],
      });
      navigate(0);
    },
  });

  const handleUpdateProfile = (e: FormEvent) => {
    e.preventDefault();
    if (!accessToken) return;

    const formData = new FormData(e.target as HTMLFormElement);
    const avatar = formData.get("avatar") as File;
    const nickname = formData.get("nickname") as string;

    updateProfileMutation.mutate({ accessToken, avatar, nickname });
  };
  return (
    <S.div.Paper>
      <form onSubmit={handleUpdateProfile}>
        <S.div.Column $gap={20}>
          <S.div.Column>
            <label htmlFor="avatar">프로필 사진</label>
            <input type="file" accept="image/*" name="avatar" />
          </S.div.Column>

          <S.div.Column>
            <label htmlFor="nickname">닉네임</label>
            <input type="text" placeholder="닉네임" name="nickname" />
          </S.div.Column>

          <S.button.Button type="submit">변경</S.button.Button>
        </S.div.Column>
      </form>
    </S.div.Paper>
  );
};

export default UpdateUserProfile;
