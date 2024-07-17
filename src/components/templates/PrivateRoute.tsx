import useAuth from "@/@features/Auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  /** true:인증, false:인증불필요 */
  isAuth: boolean;
}

const PrivateRoute = ({ isAuth }: Props) => {
  const accessToken = useAuth((state) => state.accessToken);

  // TODO navigate를 뒤로가기로 사용할 수 있도록 수정

  //* 인증 필요 페이지
  if (isAuth) {
    return accessToken ? <Outlet /> : <Navigate to="/" />;
  }

  //* 인증 불필요 페이지
  return accessToken ? <Navigate to="/" /> : <Outlet />;
};

export default PrivateRoute;
