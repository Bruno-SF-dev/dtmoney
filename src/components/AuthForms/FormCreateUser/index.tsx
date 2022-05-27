import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "./schemaValidation";

import { AuthContext } from "../../../contexts/authContext";

import * as Styled from "../styles";

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
    <Styled.Container>
      <h2>Cadastrar</h2>
      {createUserError && <p className="alert-message">{createUserError}</p>}

      <form onSubmit={handleSubmit(handleCreateUser)}>
        <Styled.FieldContainer>
          <input {...register("name")} name="name" placeholder="Nome" />
          <p className="error-message">{errors.name?.message}</p>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <input {...register("email")} name="email" placeholder="E-mail" />
          <p className="error-message">{errors.email?.message}</p>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <p className="error-message">{errors.password?.message}</p>
        </Styled.FieldContainer>

        <button className="btn-submit" type="submit">
          Cadastrar
        </button>
      </form>
    </Styled.Container>
  );
}
