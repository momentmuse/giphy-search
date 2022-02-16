// add to .env and .gitignore
// note: do NOT expose API keys in the client in prod
const GIPHY_API_KEY = '325u328fakeapikey';

export const API_SEARCH_URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}`;
export const PAGINATION_INTERVAL = 10;
