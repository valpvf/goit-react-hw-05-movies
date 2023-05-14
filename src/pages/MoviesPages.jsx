import MoviesList from 'components/MoviesList/MoviesList';
import { FormStyled } from 'components/MoviesList/MoviesList.styled';
import { useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getMoviesApi } from 'services/movieApi';

const Movies = () => {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useSearchParams();

  const query = search.get('query');

  useEffect(
    movies => {
      query &&
        getMoviesApi(`search/movie`, query)
          .then(movies => setMovies(movies.results))
          .catch(error => console.log(error.message));
      // console.log('useEffect called');
    },
    [query]
  );
  const handleSubmit = e => {
    e.preventDefault();
    setSearch({ query: input });
  };
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </FormStyled>
      <MoviesList forRender={movies} endpoint={''} />
      <Outlet />
    </>
  );
};

export default Movies;
