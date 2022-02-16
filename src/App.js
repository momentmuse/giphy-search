import { SearchContainer } from './components/SearchContainer/SearchContainer';
import { GlobalStyle, StyledHeader } from './App.styled';
import { ThemeProvider } from 'styled-components';
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <StyledHeader>Giphy Search</StyledHeader>
        <SearchContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;
