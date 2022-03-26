import * as Styled from "./styles";

import logoImg from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  const { user } = useContext(AuthContext);

  console.log(user.userName);

  return (
    <Styled.Container>
      <Styled.Content>
        <div>
          <img src={logoImg} alt="dt money" />
          {user.userName && <h2>| {user.userName}</h2>}
        </div>
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Styled.Content>
    </Styled.Container>
  );
};

export { Header };
