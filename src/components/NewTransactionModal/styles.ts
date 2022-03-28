import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--dark-white);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#e52e4d",
  green: "#33cc95",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 3.5rem;
  border: 1px solid var(--dark-black-soft);
  border-radius: 0.25rem;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.95, colors[props.activeColor])
      : "transparent"};

  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--dark-gray-soft);
  }

  &:hover {
    border-color: ${(props) => transparentize(0.5, colors[props.activeColor])};
  }
`;
