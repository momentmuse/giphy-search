import { SearchInput } from './SearchInput';
import { SearchPageLocation } from './SearchPageLocation';
import { SearchResults } from './SearchResults';

export const SearchContainer = () => {
  return (
    <>
      <h2>I'm the Search Container!</h2>
      <SearchInput />
      <SearchResults />
      <SearchPageLocation />
    </>
  );
};
