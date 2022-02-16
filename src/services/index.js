import axios from 'axios';
import { API_SEARCH_URL } from '../constants';

// export const getSearchResults = async (searchQuery) => {
//   try {
//     const response = await axios.get(`${API_SEARCH_URL}&q=${searchQuery}`);
//     console.log(response);
//     return response;
//   } catch (error) {
//     console.log(error);
//     return [];
//     // handle error
//   }
// };

export const getSearchResults = class {
  constructor(query) {
    this.queryString = `${API_SEARCH_URL}&q=${query}`;
  }

  limitTo(interval) {
    if (this.queryString.includes('&limit=')) {
      console.error('Query already contains limit param.');
    } else {
      this.queryString = `${this.queryString}&limit=${interval}`;
    }
    return this;
  }

  offsetBy(items) {
    if (this.queryString.includes('&offset=')) {
      console.error('Query already contains offset param.');
    } else {
      this.queryString = `${this.queryString}&offset=${items}`;
    }
    return this;
  }

  async send() {
    try {
      const response = await axios.get(this.queryString);
      return response;
    } catch (error) {
      // render to UI?
      console.error(error);
      return [];
    }
  }
};
