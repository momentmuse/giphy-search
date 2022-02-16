import {
  PageLocationContainer,
  StyledButton,
} from './SearchPageLocation.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export const SearchPageLocation = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const isDisabled = (value) => {
    return currentPage + value === 0 || currentPage + value > totalPages;
  };

  return (
    <PageLocationContainer>
      <StyledButton
        onClick={() => handlePageChange(-1)}
        disabled={isDisabled(-1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </StyledButton>
      &nbsp;Page {currentPage} of {totalPages}&nbsp;
      <StyledButton
        onClick={() => handlePageChange(1)}
        disabled={isDisabled(1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </StyledButton>
    </PageLocationContainer>
  );
};
