import * as Styled from "./styles";

export function Loading() {
  return (
    <Styled.Container>
      <Styled.Loader>
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </Styled.Loader>
    </Styled.Container>
  );
}
