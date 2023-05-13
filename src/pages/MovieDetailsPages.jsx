import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMoviesApi } from 'services/movieApi';

const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const id = params.movieId.slice(1);
  useEffect(
    movie => {
      id &&
        getMoviesApi(`/movie/${id}`)
          .then(movie => setMovie(movie))
          .catch(error => console.log(error.message));
      // console.log('useEffect called');
    },
    [id]
  );
  return (
    <>
      {/* <a href="/">Go back</a> */}
      <div style={{ display: 'flex', gap: 40, padding: '15px'}}>
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`:  `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}
          alt=""
          width="300"
        />
        <div>
          <h1>
            {movie.title} (
            {movie.release_date && movie.release_date.slice(0, 4)})
          </h1>
          <p>User score: {Math.round(movie.vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>{movie.genres && movie.genres.map(el => el.name).join(' ')}</p>
        </div>
      </div>

      <div>
        <h4>Additional information</h4>
        <Link to='cast'>Cast</Link>
        <Link to='reviews'>Reviews</Link>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
