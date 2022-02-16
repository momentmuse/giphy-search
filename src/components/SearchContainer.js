import { useState, useEffect, useCallback } from 'react';
import { SearchInput } from './SearchInput';
import { SearchPageLocation } from './SearchPageLocation';
import { MemoizedSearchResults } from './SearchResults';
import { useDebounce } from '../hooks';
import { getSearchResults } from '../services';
import { PAGINATION_INTERVAL } from '../constants';

export const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResultData, setSearchResultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginationImageCount, setPaginationImageCount] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchQuery, 600);

  const fetchResults = useCallback(async () => {
    const {
      data: { data: gifs, pagination },
    } = await new getSearchResults(searchQuery)
      .limitTo(PAGINATION_INTERVAL)
      .offsetBy(currentPage * PAGINATION_INTERVAL)
      .send();

    setSearchResultData(gifs);
    setPaginationImageCount(pagination.total_count);
  }, [currentPage, searchQuery]);

  // fetch on page change
  useEffect(() => {
    fetchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  // fetch on debounce
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        fetchResults().then((results) => {
          setIsSearching(false);
        });
      } else {
        setIsSearching(false);
      }
      setCurrentPage(0);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedSearchTerm]
  );

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchResults();
    setCurrentPage(0);
  };

  const handlePageChange = (value) => {
    setCurrentPage(currentPage + value);
  };

  const totalPages = () => {
    return paginationImageCount
      ? Math.ceil(paginationImageCount / PAGINATION_INTERVAL)
      : 1;
  };

  return (
    <>
      <h2>I'm the Search Container!</h2>
      <SearchInput handleChange={handleChange} handleSubmit={handleSubmit} />
      <MemoizedSearchResults
        searchResultData={searchResultData}
        isSearching={isSearching}
      />
      <SearchPageLocation
        /*currentPage + 1 because it starts at 0 for offset*/
        currentPage={currentPage + 1}
        handlePageChange={handlePageChange}
        totalPages={totalPages()}
      />
    </>
  );
};
