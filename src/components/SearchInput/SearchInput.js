import {
  InputContainer,
  StyledInput,
  StyledSearchButton,
} from './SearchInput.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const SearchInput = ({ handleSubmit, handleChange }) => {
  return (
    <InputContainer>
      <form role="search" onSubmit={handleSubmit}>
        <StyledInput
          type="search"
          aria-label="Search for a gif"
          onChange={handleChange}
        />
        <StyledSearchButton>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </StyledSearchButton>
      </form>
    </InputContainer>
  );
};
