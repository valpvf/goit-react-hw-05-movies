import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { getMoviesApi } from 'services/movieApi';
import {
  AdditionalStyled,
  GoBackStyled,
  LinkStyled,
} from '../components/MoviesList/MoviesList.styled';

const MovieDetails = () => {
  const params = useParams();
  const id = params.movieId;
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleClickGoBack = () => {
    const { state: lastLocation } = location;
    navigate(lastLocation);
  };

  return (
    <>
      <GoBackStyled onClick={handleClickGoBack}>Go back</GoBackStyled>
      <div style={{ display: 'flex', gap: 40, padding: '15px' }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
              : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
          }
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
      <hr />
      <div>
        <AdditionalStyled>Additional information</AdditionalStyled>
        <LinkStyled to="cast" state={location.state}>
          Cast
        </LinkStyled>
        <LinkStyled to="reviews" state={location.state}>
          Reviews
        </LinkStyled>
      </div>
      <hr />
      <Outlet />
    </>
  );
};

export default MovieDetails;
