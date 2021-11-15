import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1, h2 {
    font-weight: 300;
  }

  h1 {
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  h2 {
    color: ${({ theme }) => theme.colors.gray}
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 60%;

    @media(max-width: 540px) {
      width: 70%;
    }

    @media(max-width: 425px) {
      width: 90%;

      button {
        font-size: 2rem;
      }
    }

    @media(max-width: 355px) {
      width: 100%;
    }


    @media(max-width: 280px) {
      width: 100%;

      button {
        font-size: 1.5rem;
      }
    }
  }
`;
