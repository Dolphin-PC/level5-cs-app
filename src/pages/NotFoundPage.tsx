import * as S from "@/styles/index.style";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <S.div.Container $center>
      <h1>아무것도 없어요.</h1>
      <Link to="/">
        <S.button.Button $color="secondary" $size="large">
          돌아가기
        </S.button.Button>
      </Link>
    </S.div.Container>
  );
};

export default NotFoundPage;
