import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./schemaValidation";

import * as Styled from "../styles";

import { AuthContext } from "../../../contexts/authContext";
import { Input } from "../Input";
import { SubmitButton } from "../../SubmitButton";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
};

export function FormCreateUser() {
  const navigate = useNavigate();
  const { onCreateUser } = useContext(AuthContext);
  const [createUserError, setCreateUserError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: yupResolver(schemaValidation),
  });

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async ({
    name,
    email,
    password,
  }) => {
    try {
      await onCreateUser({ email, password, name });

      setCreateUserError("");
      navigate("/auth/sign-in");
    } catch (err) {
      setCreateUserError("Não foi possível criar o usuário.");
      return;
    }
  };

  return (
    <Styled.FormContainer>
      <h2>Cadastrar</h2>
      {createUserError && <p className="alert-message">{createUserError}</p>}

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <Input {...register("name")} placeholder="Nome" error={errors.name} />

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

        <button className="btn-submit" type="submit">
          Cadastrar
        </button>
      </form>
    </Styled.FormContainer>
  );
}
