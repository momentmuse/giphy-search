import { GifCard } from './GifCard';

export const SearchResults = ({ searchResultData }) => {
  const populateResults = () => {
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
