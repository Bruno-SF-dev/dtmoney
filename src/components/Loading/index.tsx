import * as Styled from "./styles";

export function Loader() {
  return (
    <Styled.Loader>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </Styled.Loader>
  );
}

export function Loading() {
  return (
    <Styled.Container>
      <Loader />
    </Styled.Container>
  );
}
