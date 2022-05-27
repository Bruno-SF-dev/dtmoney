import styled, { css } from "styled-components";

const loader = css`
  // overlay
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0.25rem;
    background: rgba(0, 0, 0, 0.4);
  }

  // circle animated
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 18px;
    height: 18px;
    border: 3px solid rgba(250, 250, 250, 0.9);
    border-top-color: transparent;
    border-radius: 50%;

    animation: button-loading 0.5s infinite linear;

    @keyframes button-loading {
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  }
`;

interface ContainerProps {
  isLoading?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  background: var(--green);
  border-radius: 0.25rem;

  position: relative;

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 1;

    &:hover {
      filter: none;
    }
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      ${loader}

      //Content component
      & > :first-child {
        opacity: 0;
      }
    `}
`;

export const Content = styled.div`
  width: 100%;
  height: 3.5rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  transition: filter 0.2s;
`;
