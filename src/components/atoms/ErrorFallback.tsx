import { Link } from "react-router-dom";
import * as S from "@/styles/index.style";

const ErrorFallbackUI = () => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <Link to="/">
        <S.button.Button $color="secondary">Go to Home</S.button.Button>
      </Link>
    </div>
  );
};

export default ErrorFallbackUI;
