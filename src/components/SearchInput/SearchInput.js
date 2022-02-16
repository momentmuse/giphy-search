import { InputContainer } from './SearchInput.styled';

export const SearchInput = ({ handleSubmit, handleChange }) => {
  return (
    <InputContainer>
      <form role="search" onSubmit={handleSubmit}>
        <input
          type="search"
          aria-label="Search for a gif"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
    </InputContainer>
  );
};
