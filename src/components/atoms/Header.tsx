import * as S from "@/styles/index.style";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.layout.Header>
      <Link to="/">
        <h1>D.S.H</h1>
      </Link>
    </S.layout.Header>
  );
};

export default Header;
