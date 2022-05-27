import styled, { css } from "styled-components";

interface SummaryProps {
  isNegative: boolean;
}

export const Container = styled.div<SummaryProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -8rem;

  animation: enter-from-top 0.6s forwards;
    background: var(--dark-gray);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--dark-gray-soft);
    color: #cacaca;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
    }

    &.highlight-background {
      background: var(--green);
      color: #ffffff;

      ${(props) =>
        props.isNegative &&
        css`
          background: var(--red);
        `}
    }
  }
`;
