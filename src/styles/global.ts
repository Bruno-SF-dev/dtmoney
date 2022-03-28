import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --green: #33cc95;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --text-body: #969cb3;
    --background: #f0f2f5;
    --shape: #ffffff;

    --dark-black: #181818;
    --dark-black-soft: #212121;
    --dark-gray: #3d3d3d;
    --dark-gray-soft: #aaaaaa;
    --dark-white: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--dark-black-soft) ;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  button {
    cursor: pointer;
  }

  input {
    width: 100%;
    height: 3.5rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid var(--dark-black-soft);
    background: var(--dark-black-soft);

    font-size: 1rem;
    color: var(--dark-white);

    &::placeholder {
      color: ${transparentize(0.3, "#aaaaaa")};
    }

    & + input {
      margin-top: 1rem;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }

  button.btn-submit {
    margin-top: 1.5rem;
    width: 100%;
    height: 3.5rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 0;
    background: var(--green);

    font-size: 1rem;
    font-weight: 600;
    color: #ffffff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(3px);
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--dark-black);
    padding: 3rem;
    border-radius: 0.25rem;
    position: relative;
  }

  .react-modal-btn-close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter .2s;

    &:hover {
      filter: brightness(.8);
    }
  }
`;
