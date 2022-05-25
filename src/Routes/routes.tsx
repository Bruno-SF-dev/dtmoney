import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../components/Home";
import { FormSignIn } from "../components/AuthForms/FormSignIn";
import { FormCreateUser } from "../components/AuthForms/FormCreateUser";
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
          <Route path="login" element={<FormSignIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
