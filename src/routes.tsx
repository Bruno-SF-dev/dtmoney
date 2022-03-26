import { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { AuthContext } from "./contexts/authContext";

import { Home } from "./components/Home";
import { FormLogin } from "./components/FormLogin";
import { FormCreateUser } from "./components/FormCreateUser";

interface AuthRequireProps {
  children: JSX.Element;
}

function AuthRequire({ children }: AuthRequireProps) {
  const { user } = useContext(AuthContext);
  let location = useLocation();

  if (!user.id) {
    console.log("Não logado.");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  console.log("Logado.");
  return children;
}

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AuthRequire>
              <Home />
            </AuthRequire>
          }
        />
        <Route path="/signIn" element={<FormCreateUser />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
