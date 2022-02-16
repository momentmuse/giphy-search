import { useState, useEffect } from 'react';
import { SearchInput } from './SearchInput';
import { SearchPageLocation } from './SearchPageLocation';
import { SearchResults } from './SearchResults';
import { getSearchResults } from '../services';
import { PAGINATION_INTERVAL } from '../constants';

export const SearchContainer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResultData, setSearchResultData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [paginationImageCount, setPaginationImageCount] = useState(0);

  const fetchResults = () => {
    // send api GET request with searchQuery, limit = interval and offset = currentPage * interval
    // set searchResultData
    // set pagImgCount (pag object comes with data)
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
    console.log('handling change!! ', e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handling SUBMIT!! ', searchQuery);
  };

  const handlePageChange = (value) => {
    setCurrentPage(currentPage + value);
  };

  const totalPages = () => {
    // calculate num of pages by dividing total num of image results by 10 (interval constant) and any leftover is an extra page
    // Math.ceil?
    return 10;
  };

  return (
    <>
      <h2>I'm the Search Container!</h2>
      <SearchInput handleChange={handleChange} handleSubmit={handleSubmit} />
      <SearchResults />
      <SearchPageLocation
        /*currentPage + 1 because it starts at 0 for offset*/
        currentPage={currentPage + 1}
        handlePageChange={handlePageChange}
        totalPages={totalPages()}
      />
    </>
  );
};
