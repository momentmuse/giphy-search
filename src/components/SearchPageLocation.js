export const SearchPageLocation = ({
  currentPage,
  totalPages,
  handlePageChange,
}) => {
  const isDisabled = (value) => {
    return currentPage + value === 0 || currentPage + value > totalPages;
  };

  return (
    <>
      <button onClick={() => handlePageChange(-1)} disabled={isDisabled(-1)}>
        prev
      </button>
      page {currentPage} of {totalPages}
      <button onClick={() => handlePageChange(1)} disabled={isDisabled(1)}>
        next
      </button>
    </>
  );
};
