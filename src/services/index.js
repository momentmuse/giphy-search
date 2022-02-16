import axios from 'axios';
import { API_SEARCH_URL } from '../constants';

export const getSearchResults = async (searchQuery) => {
  try {
    const response = await axios.get(`${API_SEARCH_URL}&q=${searchQuery}`);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return [];
    // handle error
  }
};
