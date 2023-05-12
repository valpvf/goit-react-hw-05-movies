import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
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
      <a href="/">Go back</a>
      <div style={{ display: 'flex', gap: 40 }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
        <a href={`${params.movieId}/cast`}>Cast</a>
        <a href={`${params.movieId}/reviews`}>Reviews</a>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
