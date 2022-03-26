import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

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
    <form>
      <h1>Entrar</h1>

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
      <button type="button" onClick={handleSubmit}>
        Enviar
      </button>
    </form>
  );
}
