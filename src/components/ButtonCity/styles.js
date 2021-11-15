import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 24px;
  padding: 8px 12px;
  margin: 8px 4px;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`;
