import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./schemaValidation";

import * as Styled from "../styles";

import { AuthContext } from "../../../contexts/authContext";
import { Input } from "../Input";
import { SubmitButton } from "../../SubmitButton";

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
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(schemaValidation),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // just to display the loader animation

    try {
      await onSignIn({ email, password });

      setSignInError("");
      navigate("/auth/sign-in");
    } catch (err) {
      setSignInError("Usuário não encontrado.");
      return;
    }
  };

  return (
    <Styled.FormContainer>
      <h2>Entrar</h2>
      {signInError && <p className="alert-message">{signInError}</p>}

      <form onSubmit={handleSubmit(handleSignIn)}>
        <Input
          {...register("email")}
          placeholder="E-mail"
          error={errors.email}
        />

        <Input
          {...register("password")}
          type="password"
          placeholder="Senha"
          error={errors.password}
        />

        <SubmitButton isSubmitting={isSubmitting}>Entrar</SubmitButton>
      </form>
    </Styled.FormContainer>
  );
}
