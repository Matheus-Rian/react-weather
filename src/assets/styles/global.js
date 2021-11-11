import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Advent Pro', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor.main};
    color: ${({ theme }) => theme.colors.white};
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
