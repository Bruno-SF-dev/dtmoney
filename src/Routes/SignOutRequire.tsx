import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { AuthContext } from "../contexts/authContext";

interface SignOutRequireProps {
  children: JSX.Element;
}

export function SignOutRequire({ children }: SignOutRequireProps) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  let location = useLocation();

  if (isLoading) {
    return <Loading />;
  }

  return !isAuthenticated ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
