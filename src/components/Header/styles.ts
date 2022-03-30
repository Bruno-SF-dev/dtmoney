import styled from "styled-components";

export const Container = styled.header`
  background: var(--dark-black);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
    gap: 20px;

    h2 {
      color: #ffffff;
    }
  }

  & > button {
    font-size: 1rem;
    color: #ffffff;
    background: var(--dark-gray);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
