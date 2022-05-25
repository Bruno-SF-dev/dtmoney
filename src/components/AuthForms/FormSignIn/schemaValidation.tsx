import * as yup from "yup";

export const schemaValidation = yup
  .object({
    email: yup.string().required("E-mail obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  })
  .required();
