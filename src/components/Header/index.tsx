import * as Styled from "./styles";
import logoImg from "../../assets/logo.svg";

const Header = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </Styled.Content>
    </Styled.Container>
  );
};

export { Header };
