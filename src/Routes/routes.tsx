import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/Home";
import { FormLogin } from "../components/FormLogin";
import { FormCreateUser } from "../components/FormCreateUser";
import { AuthPage } from "../components/AuthPage";
import { AuthRequire } from "./AuthRequire";
import { SignOutRequire } from "./SignOutRequire";

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
        <Route
          path="/auth"
          element={
            <SignOutRequire>
              <AuthPage />
            </SignOutRequire>
          }
        >
          <Route path="sign-up" element={<FormCreateUser />} />
          <Route path="login" element={<FormLogin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
