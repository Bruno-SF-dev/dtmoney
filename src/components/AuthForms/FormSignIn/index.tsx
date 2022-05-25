import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./schemaValidation";

import { AuthContext } from "../../../contexts/authContext";

import * as Styled from "../styles";

type SignInFormData = {
  email: string;
  password: string;
};

export function FormSignIn() {
  const navigate = useNavigate();
  const { onSignIn } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(schemaValidation),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    try {
      await onSignIn({ email, password });

      setSignInError("");
      navigate("/auth/login");
    } catch (err) {
      setSignInError("Usuário não encontrado.");
      return;
    }
  };

  return (
    <Styled.Container>
      <h2>Entrar</h2>
      {signInError && <p className="alert-message">{signInError}</p>}

      <form onSubmit={handleSubmit(handleSignIn)}>
        <Styled.FieldContainer>
          <input {...register("email")} name="email" placeholder="E-mail" />
          <p className="error-message">{errors.email?.message}</p>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <input
            {...register("password")}
            name="password"
            placeholder="Senha"
            type="password"
          />
          <p className="error-message">{errors.password?.message}</p>
        </Styled.FieldContainer>

        <button className="btn-submit" type="submit">
          Entrar
        </button>
      </form>
    </Styled.Container>
  );
}
