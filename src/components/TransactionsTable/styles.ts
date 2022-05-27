import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  & > p {
    text-align: center;
    color: var(--dark-gray-soft);
  }

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    animation: enter-from-right 0.6s forwards;

    th {
      color: var(--dark-gray-soft);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tr:hover {
      td:last-child {
        button {
          opacity: 1;
          visibility: visible;
        }
      }
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--dark-black);
      color: var(--dark-gray-soft);

      &:first-child {
        color: var(--dark-white);
        border-radius: 0.25rem 0 0 0.25rem;
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

      &:last-child {
        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
          background: transparent;
          padding: 0;
          border: none;
          font-size: 0;

          opacity: 0;
          visibility: hidden;
          transition: all 0.2s;

          img {
            width: 20px;
          }
        }
      }
    }
  }
`;
