import * as yup from "yup";

export const schemaValidation = yup
  .object({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("Email inválido"),
    password: yup.string().required("Senha obrigatória"),
  })
  .required();
