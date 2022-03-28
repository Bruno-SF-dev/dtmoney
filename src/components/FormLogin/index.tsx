import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

import * as Styled from "./styles";

export function FormLogin() {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    try {
      await onLogin({ email, password });

      navigate("/");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <Styled.Container>
      <h2>Entrar</h2>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button className="btn-submit" onClick={handleSubmit}>
        Entrar
      </button>
    </Styled.Container>
  );
}
