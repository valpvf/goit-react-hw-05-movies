import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getMoviesApi } from 'services/movieApi';

const Movies = () => {
  // const params = useParams();
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState('');
  // const id = params.movie;

  useEffect(
    search => {
      getMoviesApi(`search/movie`, query)
        .then(search => setSearch(search.results))
        .catch(error => console.log(error.message));
      // console.log('useEffect called');
    },
    [query]
  );
  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.target.search.value);
  };
  return (
    <>
      <form action="search" onSubmit={handleSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {search &&
          search.map(el => (
            <li key={el.id}>
              <a href={`/movies/:${el.id}`}>{el.title}</a>
            </li>
          ))}
      </ul>
      <Outlet />
    </>
  );
};

export default Movies;
