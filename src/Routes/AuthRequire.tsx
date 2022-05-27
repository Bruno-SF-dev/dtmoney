import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { AuthContext } from "../contexts/authContext";

interface AuthRequireProps {
  children: JSX.Element;
}

export function AuthRequire({ children }: AuthRequireProps) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  const location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  );
}
