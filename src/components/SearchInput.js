export const SearchInput = ({ handleSubmit, handleChange }) => {
  return (
    <form role="search" onSubmit={handleSubmit}>
      <input
        type="search"
        aria-label="Search for a gif"
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};
