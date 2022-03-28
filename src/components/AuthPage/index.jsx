import { Link, Outlet, useLocation } from "react-router-dom";

import * as Styled from "./styles";

export function AuthPage() {
  const { pathname } = useLocation();

  return (
    <Styled.Container>
      <header>
        <Link
          to="login"
          className={pathname === "/auth/login" ? "is-active" : ""}
        >
          Login
        </Link>
        <Link
          to="signIn"
          className={pathname === "/auth/signIn" ? "is-active" : ""}
        >
          SignIn
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </Styled.Container>
  );
}
