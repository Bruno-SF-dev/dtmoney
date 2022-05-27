import { ReactNode } from "react";
import * as Styled from "./styles";

interface SubmitButtonProps {
  children: ReactNode;
  isSubmitting?: boolean;
}

export function SubmitButton({
  children,
  isSubmitting = false,
}: SubmitButtonProps) {
  return (
    <Styled.Container isLoading={isSubmitting} disabled={isSubmitting}>
      <Styled.Content>{children}</Styled.Content>
    </Styled.Container>
  );
}
