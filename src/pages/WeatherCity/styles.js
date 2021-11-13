import styled from 'styled-components';

export const Ancora = styled.a`
  display: flex;
  justify-content: flex-start;
  img {
    position: relative;
    left: 0;
    transform: rotate(270deg);
  }
`;

export const Container = styled.main`
  width: 100%;
  max-width: 500px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .main-information {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1, h2 {
      font-weight: 300;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 4rem;
      text-transform: uppercase;
    }

    h2 {
      font-size: 3.5rem;
    }

    .temp {
      display: flex;
      align-items: center;
      justify-content: center;

      & > p:first-child {
        margin-top: 16px;
        font-size: 12rem;
      }

      .arrows {
        padding-right: 8px;
        height: 65%;
        gap: 8px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        & > :last-child {
          transform: rotate(180deg);
        }
      }

      & > div:last-child {
        span {
          font-size: 3.5rem;
        }

        height: 65%;
        gap: 6px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: flex-end;
      }

    }

  }

  .group-status-weather {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    height: 16%;
    margin: 24px 0;
  }
`;
