import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

import * as Styled from "./styles";

export function LogoutComponent() {
  const { onSignOut } = useContext(AuthContext);
  const [isLogout, setIsLogout] = useState(false);

  async function handleSignOut() {
    await onSignOut();
  }

  return (
    <Styled.Container>
      {isLogout && (
        <div className="actions-logout">
          <span>Sair?</span>
          <button onClick={() => setIsLogout(false)}>Cancelar</button>
          <button className="logout-danger" onClick={handleSignOut}>
            Sim
          </button>
        </div>
      )}

      {!isLogout && (
        <div className="actions-logout">
          <button onClick={() => setIsLogout(true)}>Sair</button>
        </div>
      )}
    </Styled.Container>
  );
}
