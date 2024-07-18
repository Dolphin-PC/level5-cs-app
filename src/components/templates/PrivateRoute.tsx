import useAuth from "@/@features/Auth/useAuth";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  /** true:인증, false:인증불필요 */
  isNeedAuth: boolean;
}

const PrivateRoute = ({ isNeedAuth }: Props) => {
  const accessToken = useAuth((state) => state.accessToken);
  const isAuth = useAuth((state) => state.isAuth);

  // TODO navigate를 뒤로가기로 사용할 수 있도록 수정

  //* 인증 불필요 페이지
  if (!isNeedAuth) {
    return accessToken ? <Navigate to="/" /> : <Outlet />;
  }

  //* 인증 필요 페이지
  return isAuth() && accessToken ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
