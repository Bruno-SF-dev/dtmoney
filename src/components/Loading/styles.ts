import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Loader = styled.div`
  width: 100%;
  display: flex;

  .lds-ripple {
    margin: 0 auto;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border: 4px solid var(--green);
      opacity: 1;
      border-radius: 50%;
      animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
      animation-delay: 0.5s;
    }

    @keyframes lds-ripple {
      from {
        width: 0;
        height: 0;
        opacity: 1;
      }
      to {
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
`;
