import useAuth from "@/@features/Auth/useAuth";
import * as S from "@/styles/index.style";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const accessToken = useAuth((state) => state.accessToken);
  const handleLogout = useAuth((state) => state.handleLogout);

  const toggleAuth = () => {
    if (accessToken) {
      handleLogout();
    } else {
      navigate("/login");
    }
  };

  return (
    <S.layout.Header>
      <Link to="/">
        <h1>D.S.H</h1>
      </Link>
      <S.button.Button onClick={toggleAuth}>
        {accessToken ? "로그아웃" : "로그인"}
      </S.button.Button>
    </S.layout.Header>
  );
};

export default Header;
