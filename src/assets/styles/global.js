import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html,
  body {
    font-family: 'Advent Pro', sans-serif;
    height: 100vh;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor.main};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
  }
`;
