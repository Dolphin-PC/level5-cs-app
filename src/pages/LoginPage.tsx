import * as S from "@/styles/index.style";
import Header from "@/components/atoms/Header";
import { Link } from "react-router-dom";
import LoginForm from "@/components/organisms/LoginForm";

const LoginPage = () => {
  return (
    <S.div.Container>
      <Header />
      <S.div.Gap $height={100} $width={0} />
      <h1>로그인</h1>
      <S.div.Paper $width="50%">
        <LoginForm />
      </S.div.Paper>
      <S.div.Gap $height={20} $width={0} />
      <Link to="/register">
        <h2 style={{ textDecoration: "underline" }}>회원가입</h2>
      </Link>
    </S.div.Container>
  );
};

export default LoginPage;
