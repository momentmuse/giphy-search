import { GifCard } from './GifCard';

export const SearchResults = ({ searchResultData }) => {
  const populateResults = () => {
    return [
      { title: 'pizza gif', id: 1 },
      { title: 'cool cat gif', id: 2 },
      { title: 'amazing capybara gif', id: 3 },
    ].map((gif) => {
      return <GifCard title={gif.title} key={gif.id} />;
    });
  };

  return <>{populateResults()}</>;
};
