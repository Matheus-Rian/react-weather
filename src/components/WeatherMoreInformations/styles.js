import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 85%;
  max-width: 500px;
  margin-bottom: 16px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media(max-width: 320px) {
    width: 90%;
  }
`;
