import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import * as Styled from "./styles";

import logoImg from "../../assets/logo.svg";
import { LogoutComponent } from "../LogoutComponent";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  const { user } = useContext(AuthContext);

  return (
    <Styled.Container>
      <Styled.Content>
        <div>
          <img src={logoImg} alt="dt money" draggable="false" />
          {user.name && (
            <>
              <h2>| {user.name}</h2>
              <LogoutComponent />
            </>
          )}
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Styled.Content>
    </Styled.Container>
  );
};

export { Header };
