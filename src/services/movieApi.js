import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '55c2c220c53d8c4fecff89ed1dddc5f1';

export const getMoviesApi = (endpoint, q, page) => {
  return axios
    .get(endpoint, {
      params: {
        api_key: API_KEY,
        page,
        // language: 'uk-UA',
        query: q,
      },
    })
    .then(res => res.data);
};
