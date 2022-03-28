import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  & > header {
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 40px;
    background: var(--dark-black);

    a {
      text-decoration: none;
      color: var(--dark-gray-soft);

      &.is-active {
        color: var(--dark-white);
      }
    }
  }

  & > main {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 80px;
  }
`;
