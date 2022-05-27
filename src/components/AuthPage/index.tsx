import { Link, Outlet, useLocation } from "react-router-dom";

import * as Styled from "./styles";

export function AuthPage() {
  const { pathname } = useLocation();

  return (
    <Styled.Container>
      <header>
        <Link
          to="sign-in"
          className={pathname === "/auth/sign-in" ? "is-active" : ""}
        >
          Entrar
        </Link>
        <Link
          to="sign-up"
          className={pathname === "/auth/sign-up" ? "is-active" : ""}
        >
          Criar conta
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </Styled.Container>
  );
}
