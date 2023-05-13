import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '55c2c220c53d8c4fecff89ed1dddc5f1';

export const getMoviesApi = (q, s) => {
  return axios
    .get(q, {
      params: {
        api_key: API_KEY,
        // language: 'uk-UA',
        query: s,
      },
    })
    .then(res => res.data);
};
