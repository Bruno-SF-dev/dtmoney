import { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { AuthContext } from "../contexts/authContext";

interface AuthRequireProps {
  children: JSX.Element;
}

export function AuthRequire({ children }: AuthRequireProps) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  const location = useLocation();

  const [showPage, setShowPage] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  // para não redirecionar direto para Home
  setTimeout(() => {
    setShowPage(true);
  }, 1000);

  if (!showPage) {
    return <Loading />;
  }
  //

  return isAuthenticated && showPage ? (
    children
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
}
