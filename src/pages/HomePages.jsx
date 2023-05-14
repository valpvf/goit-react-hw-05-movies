import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getMoviesApi } from 'services/movieApi';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMoviesApi('/trending/all/week')
      .then(movieList => setMovieList(movieList.results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList forRender={movieList} endpoint={'movies/'} />
    </>
  );
};

export default Home;
