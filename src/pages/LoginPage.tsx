import * as S from "@/styles/index.style";
import { Link } from "react-router-dom";
import LoginForm from "@/components/organisms/LoginForm";

import useAuth from "@/@features/Auth/useAuth";
import { IAuth } from "@/@features/Auth/types";
import { login } from "@/@features/Auth/api";
import dayjs from "@/config/dayjsConfig";

const LoginPage = () => {
  const setLoginInfo = useAuth((state) => state.setLoginInfo);

  const handleLogin = async (data: IAuth) => {
    const res = await login(data, "1h");

    const expiredAt = dayjs().add(1, "hour").format();

    setLoginInfo({ ...res, expiredAt });
  };

  return (
    <S.div.Container>
      <S.div.Gap $height={100} $width={0} />
      <h1>로그인</h1>
      <S.div.Paper $width="50%">
        <LoginForm handleLogin={handleLogin} />
      </S.div.Paper>
      <S.div.Gap $height={20} $width={0} />
      <Link to="/register">
        <h2 style={{ textDecoration: "underline" }}>회원가입</h2>
      </Link>
    </S.div.Container>
  );
};

export default LoginPage;
