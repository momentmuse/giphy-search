import { StyledHeader } from './App.styled';
import { SearchContainer } from './components/SearchContainer/SearchContainer';

function App() {
  return (
    <div className="App">
      <StyledHeader>Giphy Search</StyledHeader>
      <SearchContainer />
    </div>
  );
}

export default App;
