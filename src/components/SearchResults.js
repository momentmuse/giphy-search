import { memo } from 'react';
import { GifCard } from './GifCard';

const SearchResults = ({ searchResultData }) => {
  const populateResults = () => {
    console.log('POPULATING RESULTS');
    return searchResultData.map((gif) => (
      <GifCard
        gifURL={gif.images.fixed_height.url}
        key={gif.id}
        title={gif.title}
      />
    ));
  };

  return <>{populateResults()}</>;
};

export const MemoizedSearchResults = memo(SearchResults);
