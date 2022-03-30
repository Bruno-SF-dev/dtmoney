import styled from "styled-components";

export const Container = styled.div`
  .actions-logout {
    display: flex;
    gap: 16px;
    transform: translateX(-15px);
    opacity: 0;
    font-size: 14px;
    color: #ffffff;

    button {
      border: none;
      font-size: 14px;
      padding: 0;
      background: transparent;
      color: var(--dark-gray-soft);
      transition: color 0.2s;

      .logout-danger {
        color: var(--red);
        opacity: 0.8;
      }

      &:hover {
        color: #ffffff;
      }
    }

    animation: logout-actions-intro 0.4s forwards;

    @keyframes logout-actions-intro {
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }
`;
