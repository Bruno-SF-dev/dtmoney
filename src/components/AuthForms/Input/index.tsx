import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import * as Styled from "./styles";

interface InputPropssss extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputPropssss> = (
  { error, ...rest },
  ref,
) => {
  return (
    <Styled.Container>
      <input ref={ref} {...rest} />
      {!!error && <p className="error-message">{error.message}</p>}
    </Styled.Container>
  );
};

// Passar a "ref" do Input para esse componente, quando chamado. (p/ uso do react-hook-form)
export const Input = forwardRef(InputBase);
