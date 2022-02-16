import { memo, useCallback } from 'react';
import { GifCard } from './GifCard';

const SearchResults = ({ searchResultData, isSearching }) => {
  const populateResults = useCallback(() => {
    if (isSearching) {
      return <div>Searching ...</div>;
    } else {
      return searchResultData.map((gif) => (
        <GifCard
          gifURL={gif.images.fixed_height.url}
          key={gif.id}
          title={gif.title}
        />
      ));
    }
  }, [searchResultData, isSearching]);

  return <>{populateResults()}</>;
};

export const MemoizedSearchResults = memo(SearchResults);
