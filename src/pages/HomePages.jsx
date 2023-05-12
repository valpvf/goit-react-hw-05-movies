import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMoviesApi } from 'services/trandingApi';

const Home = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMoviesApi()
      .then(movieList => setMovieList(movieList))
      .catch(error => console.log(error.message));
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movieList.filter(el=> el.title).map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      {/* <Outlet /> */}
    </>
  );
};

export default Home;
