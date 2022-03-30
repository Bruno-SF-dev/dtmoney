import styled from "styled-components";

export const Container = styled.div`
  h2 {
    color: var(--dark-white);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  p {
    color: var(--dark-gray-soft);
  }

  span {
    color: var(--dark-white);
  }

  .actions-wrapper {
    margin-top: 32px;
    display: flex;
    gap: 16px;

    button {
      width: 100%;
      height: 3.5rem;
      padding: 0 1.5rem;
      border-radius: 0.25rem;

      border: 0;
      background: var(--dark-gray);

      font-size: 1rem;
      font-weight: 600;
      color: #ffffff;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }

      &.btn-danger {
        background: var(--red);
      }
    }
  }
`;
