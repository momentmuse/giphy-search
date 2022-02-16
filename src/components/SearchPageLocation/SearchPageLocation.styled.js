import styled from 'styled-components';

export const PageLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
`;
export const StyledButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.color.light};

  &:hover {
    cursor: pointer;
  }
`;
