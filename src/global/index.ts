import { createGlobalStyle } from "styled-components";

import theme from "./theme";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    font-family: var(--font-montserrat-alternates), sans-serif;
  };

  html, body {
    display: flex;

    width: 100%;
    height: 100vh;

    background-color: ${theme.colors.background};
  };

  p {
    font-family: var(--font-montserrat-alternates), sans-serif;
  };

  input[type='file']{
    display: none;
  };

  button {
    display: flex;

    border: 0;
    background-color: transparent;
    cursor: pointer;
  }
`;