import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
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
      <Outlet />
      <ul>
        {movieList
          .filter(el => el.title)
          .map(el => (
            <li key={el.id}>
              <a href={`/movies/:${el.id}`}>{el.title}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Home;
