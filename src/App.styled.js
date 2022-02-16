import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0.5rem; 1.5rem;
    @media ${({ theme }) => theme.device.tablet} {
      margin: 2rem 3rem;
    }
    background-color: ${({ theme }) => theme.color.dark};;
    color: ${({ theme }) => theme.color.light};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export const StyledHeader = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
