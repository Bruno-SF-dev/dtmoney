import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export function FormCreateUser() {
  const navigate = useNavigate();
  const { onCreateUser } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit() {
    try {
      await onCreateUser({ email, password, userName });

      navigate("/login");
    } catch (err: any) {
      console.log(err.message);
    }
  }

  return (
    <form>
      <h1>Cadastrar</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Nome"
      />
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
