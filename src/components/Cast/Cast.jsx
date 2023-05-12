import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesApi } from 'services/movieApi';

const Cast = () => {
  const params = useParams();
  const [cast, setCast] = useState({});
  const id = params.movieId.slice(1);
  useEffect(
    cast => {
      id &&
        getMoviesApi(`/movie/${id}/credits`)
          .then(cast => setCast(cast))
          .catch(error => console.log(error.message));
      console.log(id, cast);
      // console.log('useEffect called');
    },
    [id]
  );
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
      {cast.cast &&
        cast.cast.map(el => (
          <li key={el.id} style={{width:150}}>
            <img src={el.profile_path ? `https://image.tmdb.org/t/p/w154/${el.profile_path}`: 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'} alt=""
            width='154' height={231}/>
            <p>{el.name}</p>
            <span>Character: {el.character}</span>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
