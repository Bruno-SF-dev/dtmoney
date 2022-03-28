import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;

  padding: 15px 30px 45px;
  border-radius: 4px;
  background: var(--dark-black);

  h2 {
    color: var(--dark-white);
    font-size: 1.5rem;
    margin-bottom: 32px;
    text-align: center;
  }
`;
