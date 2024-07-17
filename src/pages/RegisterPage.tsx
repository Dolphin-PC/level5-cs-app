import { Link, useNavigate } from "react-router-dom";
import * as S from "@/styles/index.style";
import RegisterForm from "@/components/organisms/RegisterForm";
import { register } from "@/@features/Auth/api";
import { RegisterReq } from "@/@features/Auth/types";

const RegisterPage = () => {
  const navigate = useNavigate();

  const handleRegister = async (data: RegisterReq) => {
    const res = await register(data);

    const { success, message } = res;

    alert(message);
    if (success) {
      navigate("/login");
    }
  };
  return (
    <S.div.Container>
      <S.div.Gap $height={100} $width={0} />
      <h1>회원가입</h1>
      <S.div.Paper $width="50%">
        <RegisterForm onSubmit={handleRegister} />
      </S.div.Paper>
      <S.div.Gap $height={20} $width={0} />
      <Link to="/login">
        <h2 style={{ textDecoration: "underline" }}>로그인</h2>
      </Link>
    </S.div.Container>
  );
};

export default RegisterPage;
