import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 80vw;

  @media ${({ theme }) => theme.device.tablet} {
    width: 25vw;
  }
`;

export const StyledSearchButton = styled.button`
  border: none;
  outline: none;
  height: 100%;
  padding: 0 0.8rem;
  &:hover {
    cursor: pointer;
  }
`;
