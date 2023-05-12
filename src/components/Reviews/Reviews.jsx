import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesApi } from 'services/movieApi';

const Reviews = () => {
  const params = useParams();
  const [review, setReview] = useState({});
  const id = params.movieId.slice(1);
  useEffect(
    review => {
      id &&
        getMoviesApi(`/movie/${id}/reviews`)
          .then(review => setReview(review))
          .catch(error => console.log(error.message));
      console.log(id, review);
      // console.log('useEffect called');
    },
    [id]
  );
  return (
    <ul>
      {review.results&&review.results.map(el => (
        <li key={el.id}>
          <h3>Author: {el.author}</h3>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
